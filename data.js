const allTeamsData = [
    {team: "Newcastle United", lat: 54.975561, lon: -1.621679,
        msg: "纽卡斯尔联\n成立于1892年，主场圣詹姆斯公园球场，昵称“喜鹊”。英格兰足球传统劲旅之一。",
        data: [4, 3.5, 3.5, 4.5, 4]}, // 纽卡斯尔联
    {team: "Chelsea", lat: 51.481647, lon: -0.190968,
        msg:"切尔西\n切尔西 1905 年成立于伦敦，主场为斯坦福桥球场，昵称 “蓝军”。队史斩获 5 次英超、2 次欧冠冠军，是首支实现欧战全满贯的足坛劲旅。",
        data:[3,4.5,5,3,4.9]}, // 切尔西
    {team: "Liverpool", lat: 53.430827, lon: -2.960836,
        msg: "利物浦\n成立于1892年，主场安菲尔德球场，昵称“红军”。英格兰最成功的俱乐部之一，拥有辉煌的欧战历史。",
        data: [5, 4, 4.5, 5, 4.8]}, // 利物浦
    {team: "AFC Bournemouth", lat: 50.735243, lon: -1.838306,
        msg: "伯恩茅斯\n主场活力球场，昵称“樱桃军团”。",
        data: [3, 3, 3, 3.5, 3]}, // 伯恩茅斯
    {team: "Norwich City", lat: 52.621733, lon: 1.310357,
        msg: "诺维奇城\n主场卡罗路球场，昵称“金丝雀”。",
        data: [2.5, 2.5, 3, 3, 3]}, // 诺维奇城
    {team: "Ipswich Town", lat: 52.054945, lon: 1.145328,
        msg: "伊普斯维奇镇\n主场波特曼路球场，昵称“拖拉机男孩”。",
        data: [2.5, 2.5, 2.5, 3, 3]}, // 伊普斯维奇镇
    {team: "Nottingham Forest", lat: 52.939679, lon: -1.132830,
        msg: "诺丁汉森林\n主场城市球场，曾两夺欧冠冠军。",
        data: [3, 3.5, 3, 4, 3]}, // 诺丁汉森林
    {team: "Leeds United", lat: 53.777829, lon: -1.572155,
        msg: "利兹联\n主场埃兰路球场，昵称“白玫瑰”。",
        data: [3.5, 3, 3.5, 4.5, 3.5]}, // 利兹联
    {team: "Wolves", lat: 52.590236, lon: -2.130422,
        msg: "狼队\n主场莫利纽克斯球场，昵称“狼队”。",
        data: [3.5, 3.5, 3.5, 4, 3.5]},// "Wolverhampton Wanderers"伍尔弗汉普顿流浪者（狼队）
    {team: "Leicester City", lat: 52.620291, lon: -1.142289,
        msg: "莱斯特城\n主场王权球场，昵称“狐狸城”，2016年英超奇迹夺冠。",
        data: [3.5, 3, 3.5, 3.5, 3.5]}, // 莱斯特城
    {team: "Southampton", lat: 50.905435, lon: -1.391183,
        msg: "南安普顿\n主场圣玛丽球场，昵称“圣徒”。",
        data: [3, 3, 3.5, 3, 3]}, // 南安普顿
    {team: "Manchester United", lat: 53.463060, lon: -2.291332,
        msg: "曼彻斯特联\n主场老特拉福德球场，昵称“红魔”。英超夺冠次数最多的球队。",
        data: [4, 3.5, 4, 4, 4]}, // 曼彻斯特联
    {team: "West Ham United", lat: 51.538650, lon: -0.016530,
        msg: "西汉姆联\n主场伦敦碗，昵称“铁锤帮”。",
        data: [3.5, 3.5, 3.5, 4, 3.5]}, // 西汉姆联
    {team: "Arsenal", lat: 51.554877, lon: -0.108435,
        msg: "阿森纳\n主场酋长球场，昵称“枪手”。以华丽的进攻足球著称。",
        data: [4.5, 4, 4.5, 4, 4.5]}, // 阿森纳
    {team: "Tottenham Hotspur", lat: 51.603208, lon: -0.065740,
        msg: "托特纳姆热刺\n主场托特纳姆热刺球场，昵称“白百合”。",
        data: [4, 4, 4, 4.5, 4]}, // 托特纳姆热刺
    {team: "Everton", lat: 53.438788, lon: -2.966320,
        msg: "埃弗顿\n主场古迪逊公园球场，昵称“太妃糖”。",
        data: [3, 3.5, 3, 4, 3]}, // 埃弗顿
    {team: "Aston Villa", lat: 52.509089, lon: -1.884788,
        msg: "阿斯顿维拉\n主场维拉公园球场，英格兰老牌劲旅。",
        data: [4, 3.5, 3.5, 4, 4]}, // 阿斯顿维拉
    {team: "Manchester City", lat: 53.483137, lon: -2.200395,
        msg: "曼彻斯特城\n主场伊蒂哈德球场，昵称“蓝月亮”。近年来英超最具统治力的球队。",
        data: [5, 4.5, 5, 4.5, 5]}, // 曼彻斯特城
    {team: "Sunderland", lat: 54.914586, lon: -1.388307,
        msg: "桑德兰\n主场光明球场，昵称“黑猫”。",
        data: [2.5, 2.5, 2.5, 3.5, 2.5]}, // 桑德兰
    {team: "Fulham", lat: 51.474895, lon: -0.221801,
        msg: "富勒姆\n主场克拉文农场球场，昵称“农场主”。",
        data: [3, 3, 3.5, 3, 3]}, // 富勒姆
    {team: "Coventry City", lat: 52.448352, lon: -1.496622,
        msg: "考文垂城\n主场考文垂建筑协会竞技场。",
        data: [2.5, 2.5, 2.5, 3, 2.5]}, // 考文垂城
    {team: "Sheffield Wednesday", lat: 53.411435, lon: -1.500710,
        msg: "谢菲尔德星期三\n主场希尔斯堡球场，昵称“猫头鹰”。",
        data: [2.5, 2.5, 2.5, 3, 2.5]}, // 谢菲尔德星期三
    {team: "Birmingham City", lat: 52.475654, lon: -1.868036,
        msg: "伯明翰城\n主场圣安德鲁斯球场，昵称“蓝军”。",
        data: [2.5, 2.5, 2.5, 3, 2.5]}, // 伯明翰城
    {team: "Crystal Palace", lat: 51.398310, lon: -0.085402,
        msg: "水晶宫\n主场塞尔赫斯特公园球场，昵称“老鹰”。",
        data: [3, 3, 3.5, 3.5, 3]}, // 水晶宫
    {team: "Portsmouth", lat: 50.796358, lon: -1.063770,
        msg: "朴茨茅斯\n主场弗拉顿公园球场，昵称“庞贝”。",
        data: [2.5, 2.5, 2.5, 3, 2.5]}, // 朴茨茅斯
    {team: "Sheffield United", lat: 53.370355, lon: -1.470873,
        msg: "谢菲尔德联\n主场布拉莫巷球场，昵称“双刀”。",
        data: [2.5, 2.5, 2.5, 3.5, 2.5]}, // 谢菲尔德联
    {team: "Watford", lat: 51.649873, lon: -0.401329,
        msg: "沃特福德\n主场维卡拉格路球场，昵称“大黄蜂”。",
        data: [2.5, 2.5, 3, 3, 2.5]}, // 沃特福德
    {team: "Burnley", lat: 53.788987, lon: -2.230198,
        msg: "伯恩利\n主场特夫摩尔球场，昵称“红酒军团”。",
        data: [2.5, 3, 2.5, 3.5, 3]}, // 伯恩利
    {team: "Bradford City", lat: 53.804418, lon: -1.759326,
        msg: "布拉德福德城\n主场山谷阅兵球场，昵称“矮脚鸡”。",
        data: [2, 2, 2, 2.5, 2]}, // 布拉德福德城
].filter(t => t.team !== "Swansea City" && t.team !== "Cardiff City");

function getTooltipFormatter() {
    return function (params) {
        if (params.componentType === 'series') {
            const dataItem = params.data.info;
            if (!dataItem) return params.name;

            // 创建容器
            const container = document.createElement('div');
            container.style.width = '320px';
            container.style.padding = '10px';
            container.style.backgroundColor = '#fff';
            container.style.borderRadius = '8px';

            // 标题
            const title = document.createElement('div');
            title.style.fontWeight = 'bold';
            title.style.fontSize = '18px';
            title.style.marginBottom = '8px';
            title.style.color = '#37003c'; // 紫色标题
            title.style.borderBottom = '2px solid #00ff85'; // 绿色下划线
            title.style.paddingBottom = '5px';
            title.innerText = dataItem.team;
            container.appendChild(title);

            // 描述
            const desc = document.createElement('div');
            desc.style.fontSize = '13px';
            desc.style.color = '#555';
            desc.style.marginBottom = '15px';
            desc.style.lineHeight = '1.5';
            desc.style.whiteSpace = 'pre-wrap';
            desc.innerText = dataItem.msg || '暂无简介';
            container.appendChild(desc);

            // 图表容器
            const chartContainer = document.createElement('div');
            chartContainer.style.width = '300px';
            chartContainer.style.height = '200px';
            container.appendChild(chartContainer);

            // 初始化雷达图
            const radarChart = echarts.init(chartContainer);
            radarChart.setOption({
                radar: {
                    indicator: [
                        { name: '进攻', max: 5 },
                        { name: '防守', max: 5 },
                        { name: '技术', max: 5 },
                        { name: '体能', max: 5 },
                        { name: '战术', max: 5 }
                    ],
                    radius: '65%',
                    splitNumber: 4,
                    axisName: { 
                        color: '#37003c',
                        fontWeight: 'bold'
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['#f8f8f8', '#fff']
                        }
                    }
                },
                series: [{
                    type: 'radar',
                    data: [{
                        value: dataItem.data || [3,3,3,3,3],
                        name: dataItem.team,
                        areaStyle: { color: 'rgba(0, 255, 133, 0.4)' }, // 绿色填充
                        lineStyle: { color: '#00ff85', width: 2 }, // 绿色线条
                        itemStyle: { color: '#37003c' } // 紫色点
                    }]
                }]
            });

            return container;
        }
    }
}
