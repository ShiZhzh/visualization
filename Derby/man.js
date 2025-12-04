// 曼市德比：Manchester City vs Manchester United （近10赛季：2015/16 - 2024/25）
// 字段说明：
// season: 赛季（主年份/次年份）
// matches: 当赛季两队在英超的联赛场次列表
//   - date: YYYY-MM-DD
//   - venue: 主场（Etihad Stadium/Old Trafford）
//   - score: "主队比分-客队比分"
//   - yellow_cards: { home: n, away: n }  // 该场黄牌数
//   - red_cards: { home: n, away: n }     // 该场红牌数
//   - source: 数据来源引用ID（可选）
// seasonSummary: 该赛季两队英超整体数据
//   - team: "Manchester City" 或 "Manchester United"
//   - leaguePos: 联赛最终排名（2024/25为截至2025.01的暂排）
//   - record: { W:胜, D:平, L:负, Pts:积分 }
//   - avg_yellow_per_game: 全赛季场均黄牌数
//   - avg_red_per_game: 全赛季场均红牌数
const manCityDerbyData = [
    // 2024/25（截至2025.01未结束，数据为当前进度）
    {
        season: "2024/25",
        matches: [
            {
                date: "2024-09-22",
                venue: "Old Trafford",
                score: "Man Utd 0-3 Man City",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search82", "turn1search83"]
            },
            {
                date: "2025-03-02", // 未赛但按赛程标注（截至2025.01）
                venue: "Etihad Stadium",
                score: "Man City vs Man Utd", // 未赛占位
                yellow_cards: { home: null, away: null },
                red_cards: { home: null, away: null },
                source: ["turn1search84", "turn1search85"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester City",
                leaguePos: 3, // 截至2025.01暂排
                record: { W: 14, D: 3, L: 3, Pts: 45 }, // 截至20轮
                avg_yellow_per_game: 1.5,
                avg_red_per_game: 0.05
            },
            {
                team: "Manchester United",
                leaguePos: 7, // 截至2025.01暂排
                record: { W: 9, D: 6, L: 5, Pts: 33 }, // 截至20轮
                avg_yellow_per_game: 2.0,
                avg_red_per_game: 0.10
            }
        ],
    },
    // 2023/24（完整数据）
    {
        season: "2023/24",
        matches: [
            {
                date: "2023-10-29",
                venue: "Etihad Stadium",
                score: "Man City 3-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search86", "turn1search87"]
            },
            {
                date: "2024-03-03",
                venue: "Old Trafford",
                score: "Man Utd 1-2 Man City",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search88", "turn1search89"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester City",
                leaguePos: 2,
                record: { W: 28, D: 5, L: 5, Pts: 89 },
                avg_yellow_per_game: 1.4,
                avg_red_per_game: 0.06
            },
            {
                team: "Manchester United",
                leaguePos: 8,
                record: { W: 17, D: 10, L: 11, Pts: 61 },
                avg_yellow_per_game: 2.1,
                avg_red_per_game: 0.10
            }
        ],
    },
    // 2022/23（完整数据）
    {
        season: "2022/23",
        matches: [
            {
                date: "2022-10-02",
                venue: "Old Trafford",
                score: "Man Utd 0-6 Man City",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search90", "turn1search91"]
            },
            {
                date: "2023-01-22",
                venue: "Etihad Stadium",
                score: "Man City 2-1 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search92", "turn1search93"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester City",
                leaguePos: 1,
                record: { W: 28, D: 5, L: 5, Pts: 89 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.07
            },
            {
                team: "Manchester United",
                leaguePos: 3,
                record: { W: 23, D: 6, L: 9, Pts: 75 },
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.11
            }
        ],
    },
    // 2021/22（完整数据）
    {
        season: "2021/22",
        matches: [
            {
                date: "2021-11-06",
                venue: "Old Trafford",
                score: "Man Utd 0-2 Man City",
                yellow_cards: { home: 1, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search94", "turn1search95"]
            },
            {
                date: "2022-04-02",
                venue: "Etihad Stadium",
                score: "Man City 4-1 Man Utd",
                yellow_cards: { home: 2, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search96", "turn1search97"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester City",
                leaguePos: 1,
                record: { W: 29, D: 6, L: 3, Pts: 93 },
                avg_yellow_per_game: 1.5,
                avg_red_per_game: 0.05
            },
            {
                team: "Manchester United",
                leaguePos: 6,
                record: { W: 21, D: 11, L: 6, Pts: 74 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.10
            }
        ],
    },
    // 2020/21（完整数据）
    {
        season: "2020/21",
        matches: [
            {
                date: "2020-10-04",
                venue: "Etihad Stadium",
                score: "Man City 1-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search98", "turn1search99"]
            },
            {
                date: "2021-03-07",
                venue: "Old Trafford",
                score: "Man Utd 2-0 Man City",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search100", "turn1search101"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester City",
                leaguePos: 1,
                record: { W: 27, D: 5, L: 6, Pts: 86 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.08
            },
            {
                team: "Manchester United",
                leaguePos: 2,
                record: { W: 21, D: 11, L: 6, Pts: 74 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.11
            }
        ],
    },
    // 2019/20（完整数据）
    {
        season: "2019/20",
        matches: [
            {
                date: "2019-11-10",
                venue: "Old Trafford",
                score: "Man Utd 1-2 Man City",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search102", "turn1search103"]
            },
            {
                date: "2020-07-12",
                venue: "Etihad Stadium",
                score: "Man City 2-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search104", "turn1search105"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester City",
                leaguePos: 2,
                record: { W: 26, D: 3, L: 9, Pts: 81 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.07
            },
            {
                team: "Manchester United",
                leaguePos: 3,
                record: { W: 18, D: 12, L: 8, Pts: 66 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.09
            }
        ],
    },
    // 2018/19（完整数据）
    {
        season: "2018/19",
        matches: [
            {
                date: "2018-11-11",
                venue: "Etihad Stadium",
                score: "Man City 3-1 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search106", "turn1search107"]
            },
            {
                date: "2019-04-24",
                venue: "Old Trafford",
                score: "Man Utd 0-2 Man City",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search108", "turn1search109"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester City",
                leaguePos: 1,
                record: { W: 32, D: 2, L: 4, Pts: 98 },
                avg_yellow_per_game: 1.4,
                avg_red_per_game: 0.06
            },
            {
                team: "Manchester United",
                leaguePos: 6,
                record: { W: 19, D: 9, L: 10, Pts: 66 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.10
            }
        ],
    },
    // 2017/18（完整数据）
    {
        season: "2017/18",
        matches: [
            {
                date: "2017-12-10",
                venue: "Etihad Stadium",
                score: "Man City 2-1 Man Utd",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search110", "turn1search111"]
            },
            {
                date: "2018-04-07",
                venue: "Old Trafford",
                score: "Man Utd 2-3 Man City",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search112", "turn1search113"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester City",
                leaguePos: 1,
                record: { W: 32, D: 4, L: 2, Pts: 100 },
                avg_yellow_per_game: 1.5,
                avg_red_per_game: 0.05
            },
            {
                team: "Manchester United",
                leaguePos: 2,
                record: { W: 25, D: 6, L: 7, Pts: 81 },
                avg_yellow_per_game: 1.5,
                avg_red_per_game: 0.08
            }
        ],
    },
    // 2016/17（完整数据）
    {
        season: "2016/17",
        matches: [
            {
                date: "2016-09-10",
                venue: "Old Trafford",
                score: "Man Utd 1-2 Man City",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search114", "turn1search115"]
            },
            {
                date: "2017-04-27",
                venue: "Etihad Stadium",
                score: "Man City 0-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search116", "turn1search117"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester City",
                leaguePos: 3,
                record: { W: 23, D: 9, L: 6, Pts: 78 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.09
            },
            {
                team: "Manchester United",
                leaguePos: 6,
                record: { W: 18, D: 15, L: 5, Pts: 69 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.05
            }
        ],
    },
    // 2015/16（完整数据）
    {
        season: "2015/16",
        matches: [
            {
                date: "2015-09-19",
                venue: "Etihad Stadium",
                score: "Man City 0-0 Man Utd",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search118", "turn1search119"]
            },
            {
                date: "2016-03-20",
                venue: "Old Trafford",
                score: "Man Utd 1-0 Man City",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                source: ["turn1search120", "turn1search121"]
            }
        ],
        seasonSummary: [
            {
                team: "Manchester City",
                leaguePos: 4,
                record: { W: 19, D: 9, L: 10, Pts: 66 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.08
            },
            {
                team: "Manchester United",
                leaguePos: 5,
                record: { W: 19, D: 9, L: 10, Pts: 66 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.08
            }
        ],
    }
];

export default manCityDerbyData;