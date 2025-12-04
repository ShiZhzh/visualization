
import pandas as pd
import numpy as np
import json
import os

def calculate_football_metrics(data_path, output_dir="football_results"):
    
    team_cn_map = {
        "Man City": "曼城",
        "Liverpool": "利物浦",
        "Chelsea": "切尔西",
        "Tottenham": "托特纳姆热刺",
        "Arsenal": "阿森纳",
        "Man United": "曼联",
        "West Ham": "西汉姆联",
        "Leicester": "莱斯特城",
        "Brighton": "布莱顿",
        "Wolves": "狼队",
        "Newcastle": "纽卡斯尔联",
        "Crystal Palace": "水晶宫",
        "Brentford": "布伦特福德",
        "Aston Villa": "阿斯顿维拉",
        "Southampton": "南安普顿",
        "Everton": "埃弗顿",
        "Leeds": "利兹联",
        "Burnley": "伯恩利",
        "Watford": "沃特福德",
        "Norwich": "诺维奇"
    }
    total_matches = 38  

    # 创建输出文件夹
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    df = pd.read_csv(data_path, encoding="utf-8-sig")

    team_metrics = []  # 存储所有球队的指标结果

    # 遍历每支球队，计算指标
    for eng_name, cn_name in team_cn_map.items():
        # 筛选该球队的所有比赛（主场+客场）
        home_matches = df[df["HomeTeam"] == eng_name]  # 主场比赛
        away_matches = df[df["AwayTeam"] == eng_name]  # 客场比赛

      
        # 总进球：主场进球(FTHG) + 客场进球(FTAG)
        total_goals = home_matches["FTHG"].sum() + away_matches["FTAG"].sum()
        # 总失球：主场失球(FTAG) + 客场失球(FTHG)（对手进球=自己失球）
        total_conceded = home_matches["FTAG"].sum() + away_matches["FTHG"].sum()
        # 总射正：主场射正(HST) + 客场射正(AST)
        total_shots_on_target = home_matches["HST"].sum() + away_matches["AST"].sum()
        # 总角球：主场角球(HC) + 客场角球(AC)
        total_corners = home_matches["HC"].sum() + away_matches["AC"].sum()

      
        # 获胜场次：主场胜(FTR=H) + 客场胜(FTR=A)
        win_matches = len(home_matches[home_matches["FTR"] == "H"]) + len(away_matches[away_matches["FTR"] == "A"])
        # 零封场次：主场零封(对手没进球=FTAG=0) + 客场零封(对手没进球=FTHG=0)
        clean_sheet_matches = len(home_matches[home_matches["FTAG"] == 0]) + len(away_matches[away_matches["FTHG"] == 0])

        # 3.3 计算6个核心指标
        metrics = {
            "球队中文名": cn_name,
            "球队英文名": eng_name,
            "场均进球": round(total_goals / total_matches, 2),  # 保留2位小数
            "场均射正": round(total_shots_on_target / total_matches, 2),
            "场均角球": round(total_corners / total_matches, 2),
            "场均失球": round(total_conceded / total_matches, 2),
            "防守得分": round(10 - (total_conceded / total_matches), 2),  # 反向指标（满分10）
            "零封率(%)": round((clean_sheet_matches / total_matches) * 100, 2),
            "胜率(%)": round((win_matches / total_matches) * 100, 2),
            "总进球": total_goals,
            "总场次": total_matches
        }
        team_metrics.append(metrics)

   
    # 转换为DataFrame便于处理
    result_df = pd.DataFrame(team_metrics)
    # 按胜率降序排序
    result_df_sorted = result_df.sort_values("胜率(%)", ascending=False).reset_index(drop=True)

    # 保存为JSON文件
    json_path = os.path.join(output_dir, "2021-2022英超球队指标统计.json")
    # 转换为字典格式后保存
    result_dict = result_df_sorted.to_dict("records")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(result_dict, f, ensure_ascii=False, indent=2)  # ensure_ascii=False保留中文
    print(f"JSON文件已保存：{json_path}")

if __name__ == "__main__":
   
    YOUR_DATA_PATH = "ws/2021-2022.csv"  

    calculate_football_metrics(data_path=YOUR_DATA_PATH)