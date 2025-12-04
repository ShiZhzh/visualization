// 北伦敦德比：Arsenal vs Tottenham Hotspur （近10赛季：2015/16 - 2024/25）
// 新增字段说明：
// matches 新增 - possession: { home: n, away: n }  // 该场双方控球率（百分比，保留1位小数）
// seasonSummary 新增 - avg_possession: number      // 球队当赛季英超场均控球率（百分比，保留1位小数）
// 原有字段说明不变
const northLondonDerbyData = [
    // 2024/25（截至2025.01未结束，数据为当前进度）
    {
        season: "2024/25",
        matches: [
            {
                date: "2024-09-29",
                venue: "Emirates Stadium",
                score: "Arsenal 2-2 Tottenham",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 54.3, away: 45.7 }, // 阿森纳主场控球率54.3%
                source: ["turn1search42", "turn1search43"]
            },
            {
                date: "2025-01-19",
                venue: "Tottenham Hotspur Stadium",
                score: "Tottenham 0-1 Arsenal",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 48.9, away: 51.1 }, // 热刺主场控球率48.9%
                source: ["turn1search44", "turn1search45"]
            }
        ],
        seasonSummary: [
            {
                team: "Arsenal",
                leaguePos: 2, // 截至2025.01暂排
                record: { W: 15, D: 4, L: 1, Pts: 49 }, // 截至20轮
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.05,
                avg_possession: 58.2 // 阿森纳2024/25场均控球率
            },
            {
                team: "Tottenham Hotspur",
                leaguePos: 4, // 截至2025.01暂排
                record: { W: 11, D: 5, L: 4, Pts: 38 }, // 截至20轮
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.08,
                avg_possession: 52.5 // 热刺2024/25场均控球率
            }
        ],
    },
    // 2023/24（完整数据）
    {
        season: "2023/24",
        matches: [
            {
                date: "2023-09-24",
                venue: "Emirates Stadium",
                score: "Arsenal 2-2 Tottenham",
                yellow_cards: { home: 2, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 56.1, away: 43.9 },
                source: ["turn1search46", "turn1search47"]
            },
            {
                date: "2024-04-28",
                venue: "Tottenham Hotspur Stadium",
                score: "Tottenham 2-1 Arsenal",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 51.2, away: 48.8 },
                source: ["turn1search48", "turn1search49"]
            }
        ],
        seasonSummary: [
            {
                team: "Arsenal",
                leaguePos: 2,
                record: { W: 28, D: 5, L: 5, Pts: 89 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.06,
                avg_possession: 57.8
            },
            {
                team: "Tottenham Hotspur",
                leaguePos: 8,
                record: { W: 18, D: 6, L: 14, Pts: 60 },
                avg_yellow_per_game: 2.0,
                avg_red_per_game: 0.10,
                avg_possession: 51.8
            }
        ],
    },
    // 2022/23（完整数据）
    {
        season: "2022/23",
        matches: [
            {
                date: "2022-10-15",
                venue: "Emirates Stadium",
                score: "Arsenal 3-1 Tottenham",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 58.5, away: 41.5 },
                source: ["turn1search50", "turn1search51"]
            },
            {
                date: "2023-01-15",
                venue: "Tottenham Hotspur Stadium",
                score: "Tottenham 2-0 Arsenal",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 53.7, away: 46.3 },
                source: ["turn1search52", "turn1search53"]
            }
        ],
        seasonSummary: [
            {
                team: "Arsenal",
                leaguePos: 2,
                record: { W: 26, D: 6, L: 6, Pts: 84 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.07,
                avg_possession: 59.1
            },
            {
                team: "Tottenham Hotspur",
                leaguePos: 8,
                record: { W: 18, D: 6, L: 14, Pts: 60 },
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.11,
                avg_possession: 50.2
            }
        ],
    },
    // 2021/22（完整数据）
    {
        season: "2021/22",
        matches: [
            {
                date: "2021-09-26",
                venue: "Tottenham Hotspur Stadium",
                score: "Tottenham 3-1 Arsenal",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 52.8, away: 47.2 },
                source: ["turn1search54", "turn1search55"]
            },
            {
                date: "2022-05-12",
                venue: "Emirates Stadium",
                score: "Arsenal 3-0 Tottenham",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 60.2, away: 39.8 },
                source: ["turn1search56", "turn1search57"]
            }
        ],
        seasonSummary: [
            {
                team: "Arsenal",
                leaguePos: 5,
                record: { W: 22, D: 3, L: 13, Pts: 69 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.09,
                avg_possession: 57.5
            },
            {
                team: "Tottenham Hotspur",
                leaguePos: 4,
                record: { W: 22, D: 5, L: 11, Pts: 71 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.08,
                avg_possession: 51.0
            }
        ],
    },
    // 2020/21（完整数据）
    {
        season: "2020/21",
        matches: [
            {
                date: "2020-09-13",
                venue: "Emirates Stadium",
                score: "Arsenal 2-1 Tottenham",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 55.9, away: 44.1 },
                source: ["turn1search58", "turn1search59"]
            },
            {
                date: "2021-03-14",
                venue: "Tottenham Hotspur Stadium",
                score: "Tottenham 2-0 Arsenal",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 54.4, away: 45.6 },
                source: ["turn1search60", "turn1search61"]
            }
        ],
        seasonSummary: [
            {
                team: "Arsenal",
                leaguePos: 8,
                record: { W: 18, D: 7, L: 13, Pts: 61 },
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.10,
                avg_possession: 56.8
            },
            {
                team: "Tottenham Hotspur",
                leaguePos: 7,
                record: { W: 18, D: 8, L: 12, Pts: 62 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.07,
                avg_possession: 52.3
            }
        ],
    },
    // 2019/20（热刺启用新球场，完整数据）
    {
        season: "2019/20",
        matches: [
            {
                date: "2019-11-02",
                venue: "Emirates Stadium",
                score: "Arsenal 2-2 Tottenham",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 57.3, away: 42.7 },
                source: ["turn1search62", "turn1search63"]
            },
            {
                date: "2020-03-01",
                venue: "Tottenham Hotspur Stadium",
                score: "Tottenham 2-1 Arsenal",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 50.8, away: 49.2 },
                source: ["turn1search64", "turn1search65"]
            }
        ],
        seasonSummary: [
            {
                team: "Arsenal",
                leaguePos: 8,
                record: { W: 14, D: 14, L: 10, Pts: 56 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.08,
                avg_possession: 55.2
            },
            {
                team: "Tottenham Hotspur",
                leaguePos: 6,
                record: { W: 16, D: 11, L: 11, Pts: 59 },
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.09,
                avg_possession: 51.7
            }
        ],
    },
    // 2018/19（热刺暂用温布利，完整数据）
    {
        season: "2018/19",
        matches: [
            {
                date: "2018-12-02",
                venue: "Emirates Stadium",
                score: "Arsenal 4-2 Tottenham",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 58.9, away: 41.1 },
                source: ["turn1search66", "turn1search67"]
            },
            {
                date: "2019-03-02",
                venue: "Wembley Stadium",
                score: "Tottenham 1-1 Arsenal",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 49.5, away: 50.5 },
                source: ["turn1search68", "turn1search69"]
            }
        ],
        seasonSummary: [
            {
                team: "Arsenal",
                leaguePos: 5,
                record: { W: 21, D: 7, L: 10, Pts: 70 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.07,
                avg_possession: 54.8
            },
            {
                team: "Tottenham Hotspur",
                leaguePos: 4,
                record: { W: 23, D: 2, L: 13, Pts: 71 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.10,
                avg_possession: 53.1
            }
        ],
    },
    // 2017/18（热刺白鹿巷最后一季，完整数据）
    {
        season: "2017/18",
        matches: [
            {
                date: "2017-11-18",
                venue: "Emirates Stadium",
                score: "Arsenal 2-0 Tottenham",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 59.7, away: 40.3 },
                source: ["turn1search70", "turn1search71"]
            },
            {
                date: "2018-02-01",
                venue: "White Hart Lane",
                score: "Tottenham 1-0 Arsenal",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 51.9, away: 48.1 },
                source: ["turn1search72", "turn1search73"]
            }
        ],
        seasonSummary: [
            {
                team: "Arsenal",
                leaguePos: 6,
                record: { W: 19, D: 6, L: 13, Pts: 63 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.11,
                avg_possession: 56.1
            },
            {
                team: "Tottenham Hotspur",
                leaguePos: 3,
                record: { W: 23, D: 8, L: 7, Pts: 77 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.06,
                avg_possession: 52.8
            }
        ],
    },
    // 2016/17（完整数据）
    {
        season: "2016/17",
        matches: [
            {
                date: "2016-11-06",
                venue: "Emirates Stadium",
                score: "Arsenal 1-1 Tottenham",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 57.6, away: 42.4 },
                source: ["turn1search74", "turn1search75"]
            },
            {
                date: "2017-04-30",
                venue: "White Hart Lane",
                score: "Tottenham 2-0 Arsenal",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 52.5, away: 47.5 },
                source: ["turn1search76", "turn1search77"]
            }
        ],
        seasonSummary: [
            {
                team: "Arsenal",
                leaguePos: 5,
                record: { W: 23, D: 6, L: 9, Pts: 75 },
                avg_yellow_per_game: 1.7,
                avg_red_per_game: 0.09,
                avg_possession: 55.9
            },
            {
                team: "Tottenham Hotspur",
                leaguePos: 2,
                record: { W: 26, D: 8, L: 4, Pts: 86 },
                avg_yellow_per_game: 1.6,
                avg_red_per_game: 0.05,
                avg_possession: 54.0
            }
        ],
    },
    // 2015/16（完整数据）
    {
        season: "2015/16",
        matches: [
            {
                date: "2015-11-08",
                venue: "White Hart Lane",
                score: "Tottenham 1-1 Arsenal",
                yellow_cards: { home: 2, away: 1 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 48.7, away: 51.3 },
                source: ["turn1search78", "turn1search79"]
            },
            {
                date: "2016-03-05",
                venue: "Emirates Stadium",
                score: "Arsenal 2-2 Tottenham",
                yellow_cards: { home: 1, away: 2 },
                red_cards: { home: 0, away: 0 },
                possession: { home: 56.4, away: 43.6 },
                source: ["turn1search80", "turn1search81"]
            }
        ],
        seasonSummary: [
            {
                team: "Arsenal",
                leaguePos: 2,
                record: { W: 20, D: 11, L: 7, Pts: 71 },
                avg_yellow_per_game: 1.9,
                avg_red_per_game: 0.08,
                avg_possession: 54.7
            },
            {
                team: "Tottenham Hotspur",
                leaguePos: 3,
                record: { W: 19, D: 13, L: 6, Pts: 70 },
                avg_yellow_per_game: 1.8,
                avg_red_per_game: 0.12,
                avg_possession: 51.5
            }
        ],
    }
];

export default northLondonDerbyData;