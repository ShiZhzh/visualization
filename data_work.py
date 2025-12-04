
import json
import os

import pandas as pd


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


    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    df = pd.read_csv(data_path, encoding="utf-8-sig")

    team_metrics = []  
    for eng_name, cn_name in team_cn_map.items():

        home_matches = df[df["HomeTeam"] == eng_name]  
        away_matches = df[df["AwayTeam"] == eng_name]  

      
        
        total_goals = home_matches["FTHG"].sum() + away_matches["FTAG"].sum()
        
        total_conceded = home_matches["FTAG"].sum() + away_matches["FTHG"].sum()
        
        total_shots_on_target = home_matches["HST"].sum() + away_matches["AST"].sum()
        
        total_corners = home_matches["HC"].sum() + away_matches["AC"].sum()


        win_matches = len(home_matches[home_matches["FTR"] == "H"]) + len(away_matches[away_matches["FTR"] == "A"])
        clean_sheet_matches = len(home_matches[home_matches["FTAG"] == 0]) + len(away_matches[away_matches["FTHG"] == 0])

        metrics = {
            "球队中文名": cn_name,
            "球队英文名": eng_name,
            "场均进球": round(total_goals / total_matches, 2),  
            "场均射正": round(total_shots_on_target / total_matches, 2),
            "场均角球": round(total_corners / total_matches, 2),
            "场均失球": round(total_conceded / total_matches, 2),
            "防守得分": round(10 - (total_conceded / total_matches), 2),  
            "零封率(%)": round((clean_sheet_matches / total_matches) * 100, 2),
            "胜率(%)": round((win_matches / total_matches) * 100, 2),
            "总进球": total_goals,
            "总场次": total_matches
        }
        team_metrics.append(metrics)

   

    result_df = pd.DataFrame(team_metrics)
    
    result_df_sorted = result_df.sort_values("胜率(%)", ascending=False).reset_index(drop=True)

 
    json_path = os.path.join(output_dir, "2021-2022英超球队指标统计.json")

    result_dict = result_df_sorted.to_dict("records")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(result_dict, f, ensure_ascii=False, indent=2)  
    print(f"JSON文件已保存：{json_path}")

if __name__ == "__main__":
   
    YOUR_DATA_PATH = "ws/2021-2022.csv"  

    calculate_football_metrics(data_path=YOUR_DATA_PATH)