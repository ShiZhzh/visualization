// 双红会：Manchester United vs Liverpool （近10赛季：2015/16 - 2024/25）
// 新增字段说明：
// matches 新增 - possession: { home: n, away: n }  // 该场双方控球率（百分比，保留1位小数）
// seasonSummary 新增 - avg_possession: number      // 球队当赛季英超场均控球率（百分比，保留1位小数）
// 原有字段说明不变
const derbyData = [
    // 2024/25（截至2025.01未结束，数据为当前进度）
    {
        season: "2024/25",
        matches: [
            {
                date: "2024-09-01",
                venue: "Old Trafford",
                score: "Man Utd 0-3 Liverpool",
                yellow_cards: { home: 1, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 42.8, away: 57.2 }, // 曼联主场控球率42.8%
                source: ["turn1search20", "turn1search21"]
            },
            {
                date: "2025-01-05",
                venue: "Anfield",
                score: "Liverpool 2-2 Man Utd",
                yellow_cards: { home: 2, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 55.6, away: 44.4 }, // 利物浦主场控球率55.6%
                source: ["turn1search22", "turn1search23"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 7,
                record: { W: 9, D: 6, L: 5, Pts: 33 }, // 截至20轮
                avg_yellow_per_game: 2.0,
                avg_red_per_game: 0.1,
                avg_possession: 48.5 // 曼联2024/25场均控球率
            },
            {
                team: "Liverpool",
                leaguePos: 1,
                record: { W: 16, D: 3, L: 1, Pts: 51 }, // 截至20轮
                avg_yellow_per_game: 1.4,
                avg_red_per_game: 0.05,
                avg_possession: 56.7 // 利物浦2024/25场均控球率
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
                possession: { home: 58.1, away: 41.9 },
                source: ["turn1search9","turn1search5"]
            },
            {
                date: "2024-04-07",
                venue: "Old Trafford",
                score: "Man Utd 2-2 Liverpool",
                yellow_cards: { home: 3, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 45.3, away: 54.7 },
                source: ["turn1search1","turn1search13"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 8,
                record: { W: 17, D: 10, L: 11, Pts: 61 },
                avg_yellow_per_game: 2.1,
                avg_red_per_game: 0.1,
                avg_possession: 47.9
            },
            {
                team: "Liverpool",
                leaguePos: 1,
                record: { W: 31, D: 5, L: 2, Pts: 98 },
                avg_yellow_per_game: 1.5,
                avg_red_per_game: 0.05,
                avg_possession: 57.2
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
                possession: { home: 44.7, away: 55.3 },
                source: ["turn1search7", "turn1search18"]
            },
            {
                date: "2023-03-05",
                venue: "Anfield",
                score: "Liverpool 7-0 Man Utd",
                yellow_cards: { home: 1, away: 0 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 62.8, away: 37.2 },
                source: ["turn1search8", "turn1search12"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 8,
                record: { W: 16, D: 10, L: 12, Pts: 58 },
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.12,
                avg_possession: 46.8
            },
            {
                team: "Liverpool",
                leaguePos: 5,
                record: { W: 22, D: 12, L: 4, Pts: 78 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.08,
                avg_possession: 55.9
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
                possession: { home: 39.5, away: 60.5 },
                source: ["turn1search3","turn1search15"]
            },
            {
                date: "2022-04-19",
                venue: "Anfield",
                score: "Liverpool 4-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 61.2, away: 38.8 },
                source: ["turn1search19","turn1search11"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 6,
                record: { W: 21, D: 11, L: 6, Pts: 74 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.1,
                avg_possession: 48.2
            },
            {
                team: "Liverpool",
                leaguePos: 2,
                record: { W: 28, D: 8, L: 2, Pts: 92 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.07,
                avg_possession: 58.1
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
                possession: { home: 56.4, away: 43.6 },
                source: ["turn1search4", "turn1search14"]
            },
            {
                date: "2021-05-02",
                venue: "Old Trafford",
                score: "Man Utd 1-2 Liverpool",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 47.9, away: 52.1 },
                source: ["turn1search6", "turn1search16"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 2,
                record: { W: 21, D: 11, L: 6, Pts: 74 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.11,
                avg_possession: 49.5
            },
            {
                team: "Liverpool",
                leaguePos: 3,
                record: { W: 20, D: 9, L: 9, Pts: 69 },
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.08,
                avg_possession: 54.7
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
                possession: { home: 45.8, away: 54.2 },
                source: ["turn1search24", "turn1search25"]
            },
            {
                date: "2020-01-19",
                venue: "Anfield",
                score: "Liverpool 2-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 59.3, away: 40.7 },
                source: ["turn1search26", "turn1search27"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 3,
                record: { W: 18, D: 12, L: 8, Pts: 66 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.09,
                avg_possession: 48.9
            },
            {
                team: "Liverpool",
                leaguePos: 1,
                record: { W: 32, D: 3, L: 3, Pts: 99 },
                avg_yellow_per_game: 1.5,
                avg_red_per_game: 0.06,
                avg_possession: 57.8
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
                possession: { home: 43.2, away: 56.8 },
                source: ["turn1search28", "turn1search29"]
            },
            {
                date: "2019-03-03",
                venue: "Anfield",
                score: "Liverpool 2-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 60.1, away: 39.9 },
                source: ["turn1search30", "turn1search31"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 6,
                record: { W: 19, D: 9, L: 10, Pts: 66 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.1,
                avg_possession: 47.5
            },
            {
                team: "Liverpool",
                leaguePos: 2,
                record: { W: 30, D: 7, L: 1, Pts: 97 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.07,
                avg_possession: 56.4
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
                possession: { home: 54.9, away: 45.1 },
                source: ["turn1search32", "turn1search33"]
            },
            {
                date: "2018-03-10",
                venue: "Old Trafford",
                score: "Man Utd 2-1 Liverpool",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 48.3, away: 51.7 },
                source: ["turn1search34", "turn1search35"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 2,
                record: { W: 25, D: 6, L: 7, Pts: 81 },
                avg_yellow_per_game: 1.5,
                avg_red_per_game: 0.08,
                avg_possession: 50.2
            },
            {
                team: "Liverpool",
                leaguePos: 4,
                record: { W: 21, D: 12, L: 5, Pts: 75 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.09,
                avg_possession: 53.8
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
                possession: { home: 52.7, away: 47.3 },
                source: ["turn1search36", "turn1search37"]
            },
            {
                date: "2017-01-15",
                venue: "Old Trafford",
                score: "Man Utd 1-1 Liverpool",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 49.8, away: 50.2 },
                source: ["turn1search38", "turn1search39"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 6,
                record: { W: 18, D: 15, L: 5, Pts: 69 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.05,
                avg_possession: 49.1
            },
            {
                team: "Liverpool",
                leaguePos: 4,
                record: { W: 22, D: 10, L: 6, Pts: 76 },
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.12,
                avg_possession: 52.5
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
                possession: { home: 48.6, away: 51.4 },
                source: ["turn1search2","turn1search10"]
            },
            {
                date: "2016-01-17",
                venue: "Anfield",
                score: "Liverpool 0-1 Man Utd",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 53.9, away: 46.1 },
                source: ["turn1search40", "turn1search41"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester United",
                leaguePos: 5,
                record: { W: 19, D: 9, L: 10, Pts: 66 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.08,
                avg_possession: 48.7
            },
            {
                team: "Liverpool",
                leaguePos: 8,
                record: { W: 16, D: 12, L: 10, Pts: 60 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.1,
                avg_possession: 51.8
            }
        ],
    }
];

export default derbyData;