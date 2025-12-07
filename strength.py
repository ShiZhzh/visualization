import os
import pandas as pd

# 配置
DATASET_DIR = r'd:/IDE/webstorm/visualization/final/datasets'
SEASONS = [f"{y}-{str(y+1)[-2:]}" for y in range(2000, 2020)] # 2000-01 到 2019-20

# CSV 球队名称映射到 data.js 球队名称
TEAM_NAME_MAP = {
    "Man United": "Manchester United",
    "Man City": "Manchester City",
    "Newcastle": "Newcastle United",
    "Bournemouth": "AFC Bournemouth",
    "Norwich": "Norwich City",
    "Ipswich": "Ipswich Town",
    "Nott'm Forest": "Nottingham Forest",
    "Leeds": "Leeds United",
    "Leicester": "Leicester City",
    "West Ham": "West Ham United",
    "Tottenham": "Tottenham Hotspur",
    "Wolves": "Wolves",
    "Sheff Wed": "Sheffield Wednesday",
    "Birmingham": "Birmingham City",
    "Bradford": "Bradford City",
    "Coventry": "Coventry City",
    "Portsmouth": "Portsmouth",
    "Sheffield United": "Sheffield United",
    "Watford": "Watford",
    "Burnley": "Burnley",
    "Fulham": "Fulham",
    "Sunderland": "Sunderland",
    "Aston Villa": "Aston Villa",
    "Everton": "Everton",
    "Arsenal": "Arsenal",
    "Chelsea": "Chelsea",
    "Liverpool": "Liverpool",
    "Southampton": "Southampton",
    "Crystal Palace": "Crystal Palace",
}

def process_data():
    all_matches = []

    # 1. 加载数据
    for season in SEASONS:
        file_path = os.path.join(DATASET_DIR, f"{season}.csv")
        if os.path.exists(file_path):
            try:
                # 读取 CSV，处理潜在的编码或分隔符问题
                df = pd.read_csv(file_path, encoding='unicode_escape', on_bad_lines='skip')
                
                # 确保所需列存在（缺失值填充为 0）
                required_cols = ['HomeTeam', 'AwayTeam', 'FTHG', 'FTAG', 'HTHG', 'HTAG', 
                                 'HS', 'AS', 'HST', 'AST', 'HF', 'AF', 'HY', 'AY', 'HR', 'AR']
                optional_cols = ['HHW', 'AHW', 'Attendance']
                
                for col in optional_cols:
                    if col not in df.columns:
                        df[col] = 0
                    else:
                        df[col] = pd.to_numeric(df[col], errors='coerce').fillna(0)

                # 仅筛选所需列
                cols_to_keep = required_cols + optional_cols
                df = df[cols_to_keep].dropna(subset=['HomeTeam', 'AwayTeam'])
                all_matches.append(df)
            except Exception as e:
                print(f"Error reading {season}: {e}")

    if not all_matches:
        print("No data found.")
        return

    full_df = pd.concat(all_matches, ignore_index=True)

    # 2. 准备每场比赛的原始指标（主客场视角）
    # 我们需要提取公式所需的原始组件
    
    # 提取统计数据的辅助函数
    def extract_stats(is_home):
        prefix = 'H' if is_home else 'A'
        opp_prefix = 'A' if is_home else 'H'
        team_col = 'HomeTeam' if is_home else 'AwayTeam'
        
        stats = pd.DataFrame()
        stats['Team'] = full_df[team_col]
        
        # 公式组件
        stats['ShotsOnTarget'] = full_df[f'{prefix}ST']
        stats['HitWoodwork'] = full_df[f'{prefix}HW']
        stats['OppShots'] = full_df[f'{opp_prefix}S']
        stats['OppShotsOnTarget'] = full_df[f'{opp_prefix}ST']
        stats['YellowCards'] = full_df[f'{prefix}Y']
        stats['RedCards'] = full_df[f'{prefix}R']
        stats['Goals'] = full_df[f'FT{prefix}G']
        stats['Shots'] = full_df[f'{prefix}S']
        stats['OppFouls'] = full_df[f'{opp_prefix}F']
        stats['HalfTimeGoals'] = full_df[f'HT{prefix}G']
        stats['SecondHalfGoals'] = full_df[f'FT{prefix}G'] - full_df[f'HT{prefix}G']
        stats['Attendance'] = full_df['Attendance']
        
        return stats

    home_stats = extract_stats(True)
    away_stats = extract_stats(False)
    
    combined = pd.concat([home_stats, away_stats])
    
    # 计算每支球队的平均原始统计数据
    team_avg = combined.groupby('Team').mean()

    # 3. 归一化原始指标 (0-1) 以处理量纲差异（特别是上座率）
    def min_max_norm(series):
        return (series - series.min()) / (series.max() - series.min())

    norm_inputs = pd.DataFrame()
    for col in team_avg.columns:
        norm_inputs[col] = min_max_norm(team_avg[col])

    # 4. 使用归一化输入计算 5 个能力值
    # 进攻 = Shots on Target + Hit Woodwork
    # 防守 = -对方Shots -对方Shots on Target - Yellow Cards - Red Cards
    # 技术 = 进球数 + Shots + 对方 Fouls Committed
    # 战术 = 上半场进球数 + Shots on Target + Hit Woodwork
    # 体能 = 下半场进球数 + Attendance
    
    raw_scores = pd.DataFrame()
    raw_scores['Attack'] = norm_inputs['ShotsOnTarget'] + norm_inputs['HitWoodwork']
    
    # 注意：防守是负和，但由于输入是 0-1，结果为负。
    # 较高的原始负值（接近 0）表示更好的防守。
    raw_scores['Defense'] = -(norm_inputs['OppShots'] + norm_inputs['OppShotsOnTarget'] + norm_inputs['YellowCards'] + norm_inputs['RedCards'])
    
    raw_scores['Technique'] = norm_inputs['Goals'] + norm_inputs['Shots'] + norm_inputs['OppFouls']
    raw_scores['Tactics'] = norm_inputs['HalfTimeGoals'] + norm_inputs['ShotsOnTarget'] + norm_inputs['HitWoodwork']
    raw_scores['Physical'] = norm_inputs['SecondHalfGoals'] + norm_inputs['Attendance']

    # 5. 最终归一化到 0-5 范围
    
    def scale_to_range(series, target_min=0, target_max=5.0):
        min_val = series.min()
        max_val = series.max()
        return (series - min_val) / (max_val - min_val) * (target_max - target_min) + target_min

    final_scores = pd.DataFrame()
    final_scores['Attack'] = scale_to_range(raw_scores['Attack'])
    final_scores['Defense'] = scale_to_range(raw_scores['Defense'])
    final_scores['Technique'] = scale_to_range(raw_scores['Technique'])
    final_scores['Physical'] = scale_to_range(raw_scores['Physical'])
    final_scores['Tactics'] = scale_to_range(raw_scores['Tactics'])

    # 6. 输出
    # 收集所有相关球队（数据中的 + 映射表中的）
    all_teams = sorted(list(set(final_scores.index) | set(TEAM_NAME_MAP.keys())))

    for team_csv_name in all_teams:
        js_name = TEAM_NAME_MAP.get(team_csv_name, team_csv_name)
        
        if team_csv_name in final_scores.index:
            row = final_scores.loc[team_csv_name]
            data_values = [
                round(row['Attack'], 1),
                round(row['Defense'], 1),
                round(row['Technique'], 1),
                round(row['Physical'], 1),
                round(row['Tactics'], 1)
            ]
        else:
            # 没有数据意味着降级，使用最低值
            data_values = [0.0, 0.0, 0.0, 0.0, 0.0]

        print(f"{{ team: \"{js_name}\", data: {data_values} }},")

if __name__ == "__main__":
    process_data()
