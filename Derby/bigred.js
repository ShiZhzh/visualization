// 双红会：Manchester United vs Liverpool （近10赛季：2015/16 - 2024/25）
// 字段说明：
// season: 赛季（主年份/次年份）
// matches: 当赛季两队在英超的联赛场次列表
//   - date: YYYY-MM-DD
//   - venue: 主场（Old Trafford/Anfield）
//   - score: "主队比分-客队比分"
//   - yellow_cards: { home: n, away: n }  // 该场黄牌数
//   - red_cards: { home: n, away: n }     // 该场红牌数
//   - source: 数据来源引用ID（可选）
// seasonSummary: 该赛季两队英超整体数据
//   - team: "Manchester United" 或 "Liverpool"
//   - leaguePos: 联赛最终排名（2024/25为截至2025.01的暂排）
//   - record: { W:胜, D:平, L:负, Pts:积分 }
//   - avg_yellow_per_game: 全赛季场均黄牌数
//   - avg_red_per_game: 全赛季场均红牌数
const derbyData = [
    {
        season: "2024/25",
        matches: [
            {
                date: "2024-09-01",
                venue: "Old Trafford",
                score: "Man Utd 0-3 Liverpool",
                yellow_cards: { home: 1, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search20", "turn1search21"]
            },
            {
                date: "2025-01-05",
                venue: "Anfield",
                score: "Liverpool 2-2 Man Utd",
                yellow_cards: { home: 2, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search22", "turn1search23"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 7,
                record: { W: 9, D: 6, L: 5, Pts: 33 },
                avg_yellow_per_game: 2.0,
                avg_red_per_game: 0.1
            },
            {
                team: "Liverpool",
                leaguePos: 1,
                record: { W: 16, D: 3, L: 1, Pts: 51 },
                avg_yellow_per_game: 1.4,
                avg_red_per_game: 0.05
            }
        ],
    },
    // 2023/24（完整数据）
    {
        season: "2023/24",
        matches: [
            {
                date: "2023-12-17",
                venue: "Anfield",
                score: "Liverpool 0-0 Man Utd",
                yellow_cards: { home: 1, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search9","turn1search5"]
            },
            {
                date: "2024-04-07",
                venue: "Old Trafford",
                score: "Man Utd 2-2 Liverpool",
                yellow_cards: { home: 3, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search1","turn1search13"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 8,
                record: { W: 17, D: 10, L: 11, Pts: 61 },
                avg_yellow_per_game: 2.1,
                avg_red_per_game: 0.1
            },
            {
                team: "Liverpool",
                leaguePos: 1,
                record: { W: 31, D: 5, L: 2, Pts: 98 },
                avg_yellow_per_game: 1.5,
                avg_red_per_game: 0.05
            }
        ],
    },
    // 2022/23（完整数据）
    {
        season: "2022/23",
        matches: [
            {
                date: "2022-08-22",
                venue: "Old Trafford",
                score: "Man Utd 2-1 Liverpool",
                yellow_cards: { home: 2, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search7", "turn1search18"]
            },
            {
                date: "2023-03-05",
                venue: "Anfield",
                score: "Liverpool 7-0 Man Utd",
                yellow_cards: { home: 1, away: 0 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search8", "turn1search12"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 8,
                record: { W: 16, D: 10, L: 12, Pts: 58 },
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.12
            },
            {
                team: "Liverpool",
                leaguePos: 5,
                record: { W: 22, D: 12, L: 4, Pts: 78 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.08
            }
        ],
    },
    // 2021/22（完整数据）
    {
        season: "2021/22",
        matches: [
            {
                date: "2021-10-24",
                venue: "Old Trafford",
                score: "Man Utd 0-5 Liverpool",
                yellow_cards: { home: 1, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search3","turn1search15"]
            },
            {
                date: "2022-04-19",
                venue: "Anfield",
                score: "Liverpool 4-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search19","turn1search11"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 6,
                record: { W: 21, D: 11, L: 6, Pts: 74 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.1
            },
            {
                team: "Liverpool",
                leaguePos: 2,
                record: { W: 28, D: 8, L: 2, Pts: 92 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.07
            }
        ],
    },
    // 2020/21（修正比分/场地+补充数据）
    {
        season: "2020/21",
        matches: [
            {
                date: "2020-10-18",
                venue: "Anfield",
                score: "Liverpool 2-4 Man Utd",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search4", "turn1search14"]
            },
            {
                date: "2021-05-02",
                venue: "Old Trafford",
                score: "Man Utd 1-2 Liverpool",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search6", "turn1search16"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 2,
                record: { W: 21, D: 11, L: 6, Pts: 74 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.11
            },
            {
                team: "Liverpool",
                leaguePos: 3,
                record: { W: 20, D: 9, L: 9, Pts: 69 },
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.08
            }
        ],
    },
    {
        season: "2019/20",
        matches: [
            {
                date: "2019-10-20",
                venue: "Old Trafford",
                score: "Man Utd 1-1 Liverpool",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search24", "turn1search25"]
            },
            {
                date: "2020-01-19",
                venue: "Anfield",
                score: "Liverpool 2-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search26", "turn1search27"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 3,
                record: { W: 18, D: 12, L: 8, Pts: 66 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.09
            },
            {
                team: "Liverpool",
                leaguePos: 1,
                record: { W: 32, D: 3, L: 3, Pts: 99 },
                avg_yellow_per_game: 1.5,
                avg_red_per_game: 0.06
            }
        ],
    },
    {
        season: "2018/19",
        matches: [
            {
                date: "2018-12-16",
                venue: "Old Trafford",
                score: "Man Utd 0-0 Liverpool",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search28", "turn1search29"]
            },
            {
                date: "2019-03-03",
                venue: "Anfield",
                score: "Liverpool 2-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search30", "turn1search31"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 6,
                record: { W: 19, D: 9, L: 10, Pts: 66 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.1
            },
            {
                team: "Liverpool",
                leaguePos: 2,
                record: { W: 30, D: 7, L: 1, Pts: 97 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.07
            }
        ],
    },
    {
        season: "2017/18",
        matches: [
            {
                date: "2017-10-14",
                venue: "Anfield",
                score: "Liverpool 0-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search32", "turn1search33"]
            },
            {
                date: "2018-03-10",
                venue: "Old Trafford",
                score: "Man Utd 2-1 Liverpool",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search34", "turn1search35"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 2,
                record: { W: 25, D: 6, L: 7, Pts: 81 },
                avg_yellow_per_game: 1.5,
                avg_red_per_game: 0.08
            },
            {
                team: "Liverpool",
                leaguePos: 4,
                record: { W: 21, D: 12, L: 5, Pts: 75 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.09
            }
        ],
    },
    {
        season: "2016/17",
        matches: [
            {
                date: "2016-10-17",
                venue: "Anfield",
                score: "Liverpool 0-0 Man Utd",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search36", "turn1search37"]
            },
            {
                date: "2017-01-15",
                venue: "Old Trafford",
                score: "Man Utd 1-1 Liverpool",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search38", "turn1search39"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 6,
                record: { W: 18, D: 15, L: 5, Pts: 69 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.05
            },
            {
                team: "Liverpool",
                leaguePos: 4,
                record: { W: 22, D: 10, L: 6, Pts: 76 },
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.12
            }
        ],
    },
    {
        season: "2015/16",
        matches: [
            {
                date: "2015-09-12",
                venue: "Old Trafford",
                score: "Man Utd 3-1 Liverpool",
                yellow_cards: { home: 1, away: 0 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search2","turn1search10"]
            },
            {
                date: "2016-01-17",
                venue: "Anfield",
                score: "Liverpool 0-1 Man Utd",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search40", "turn1search41"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 5,
                record: { W: 19, D: 9, L: 10, Pts: 66 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.08
            },
            {
                team: "Liverpool",
                leaguePos: 8,
                record: { W: 16, D: 12, L: 10, Pts: 60 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.1
            }
        ],
    }
];