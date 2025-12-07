(function() {
    // 获取图表容器并初始化ECharts实例
    const chartDom = document.getElementById('rank-chart-visual');
    if (!chartDom) return;
    const myChart = echarts.init(chartDom);

    // 配置项
    const option = {
        // 提示框配置
        tooltip: {
            trigger: 'axis',
            formatter: params => {
                let str = params[0].axisValue + ' 赛季<br>';
                params.forEach(p => {
                    str += `${p.marker} ${p.seriesName}：第 ${p.value} 名<br>`;
                });
                return str;
            }
        },
        // 图例配置
        legend: {
            top: 0,
            data: ['曼联', '阿森纳', '利物浦', '切尔西', '曼城', '热刺']
        },
        // 绘图网格
        grid: { left: '0%', right: '0%', bottom: '5%', top: '10%', containLabel: true },
        // 工具栏 (保存图片等)
        toolbox: {
            right: 20,
            feature: {
                saveAsImage: { title: '保存图片', pixelRatio: 2 },
                dataZoom: {}
            }
        },
        // X轴配置 (赛季年份)
        xAxis: {
            type: 'category',
            name: '赛季起始年',
            nameLocation: 'middle',
            nameGap: 30,
            boundaryGap: false,
            axisTick: { alignWithLabel: true },
            data: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
                '2010','2011','2012','2013','2014','2015','2016','2017','2018','2019',
                '2020','2021']
        },
        // Y轴配置 (排名，反向坐标轴，1为最高)
        yAxis: {
            type: 'value',
            name: '联赛排名',
            nameTextStyle: {
                padding: [10, 10, 0, 10]
            },
            min: 1,
            max: 21,
            interval: 1,
            inverse: true, // 排名越小越靠上
            axisLabel: { margin: 20 }
        },
        // 数据系列 (各球队历年排名)
        series: [
            { name: '曼联',   type: 'line', smooth: false, symbol: 'circle', symbolSize: 7, lineStyle: { width: 4 }, itemStyle: { color: '#da020e' },
                data: [1,3,1,3,3,2,1,1,1,2,1,2,1,7,4,5,6,2,6,3,2,6] },
            { name: '阿森纳', type: 'line', smooth: false, symbol: 'circle', symbolSize: 7, lineStyle: { width: 4 }, itemStyle: { color: '#ef0107' },
                data: [2,1,2,1,2,4,4,3,4,3,4,3,4,4,3,2,5,6,5,8,8,5] },
            { name: '利物浦', type: 'line', smooth: false, symbol: 'circle', symbolSize: 7, lineStyle: { width: 4 }, itemStyle: { color: '#c8102e' },
                data: [3,2,5,4,5,3,3,4,2,7,6,8,7,2,6,8,4,4,2,1,2,2] },
            { name: '切尔西', type: 'line', smooth: false, symbol: 'circle', symbolSize: 7, lineStyle: { width: 4 }, itemStyle: { color: '#034694' },
                data: [6,6,4,2,1,1,2,2,3,1,2,6,3,3,1,10,1,5,3,4,4,3] },
            { name: '曼城',   type: 'line', smooth: false, symbol: 'circle', symbolSize: 7, lineStyle: { width: 4 }, itemStyle: { color: '#97cbeb' },
                data: [18,21,9,16,8,15,14,9,10,5,3,1,2,1,2,4,3,1,1,2,1,1] },
            { name: '热刺',   type: 'line', smooth: false, symbol: 'circle', symbolSize: 7, lineStyle: { width: 4 }, itemStyle: { color: '#132257' },
                data: [12,9,10,15,9,5,5,11,8,4,5,4,5,6,5,3,2,3,4,6,7,4] }
        ]
    };

    // 设置配置并监听窗口大小变化
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
})();
