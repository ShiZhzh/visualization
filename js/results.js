(function() {
    // 定义CSV文件路径和颜色映射
    const csvFile = './statistics/2020-2021.csv';
    const colors = { H: '#2978b5', D: '#999999', A: '#f06b4a' };
    const tip = d3.select('#d3-tooltip');
    let goalsArray = [];

    // 辅助函数：安全转换为数字，格式化百分比，获取标签文本
    function safeNum(v) { const n = +v; return isNaN(n) ? null : n; }
    function formatPct(n, total) { return ((n / total) * 100).toFixed(1) + '%'; }
    function labelFor(k) { return k === 'H' ? '主队胜' : k === 'D' ? '平局' : '客队胜'; }

    // 显示和隐藏提示框 (Tooltip)
    function showTooltip(html, x, y) {
        tip.style('display', 'block')
            .html(html)
            .style('left', (x + 12) + 'px')
            .style('top', (y - 28) + 'px');
    }
    function hideTooltip() { tip.style('display', 'none'); }

    // 加载CSV数据
    d3.csv(csvFile).then(raw => {
        // 数据预处理
        const data = raw.map(d => ({
            HomeTeam: d.HomeTeam, AwayTeam: d.AwayTeam,
            FTHG: safeNum(d.FTHG), FTAG: safeNum(d.FTAG), FTR: d.FTR
        }));

        // 1. 比赛结果分布 (饼图数据准备)
        const resultCounts = { H: 0, D: 0, A: 0 };
        data.forEach(d => { if (d.FTR in resultCounts) resultCounts[d.FTR]++; });
        renderResultPie(resultCounts, resultCounts.H + resultCounts.D + resultCounts.A);


        // 2. 球队进球统计 (柱状图数据准备)
        const goalsByTeam = new Map();
        data.forEach(d => {
            // 统计主队进球
            if (d.HomeTeam) {
                const cur = goalsByTeam.get(d.HomeTeam) || { team: d.HomeTeam, goals: 0, matches: 0 };
                cur.goals += (d.FTHG || 0); cur.matches += 1; goalsByTeam.set(d.HomeTeam, cur);
            }
            // 统计客队进球
            if (d.AwayTeam) {
                const cur = goalsByTeam.get(d.AwayTeam) || { team: d.AwayTeam, goals: 0, matches: 0 };
                cur.goals += (d.FTAG || 0); cur.matches += 1; goalsByTeam.set(d.AwayTeam, cur);
            }
        });

        // 转换为数组并默认按进球数降序排序
        goalsArray = Array.from(goalsByTeam.values());
        goalsArray.sort((a, b) => b.goals - a.goals);
        renderGoalsBar(goalsArray);


        // 绑定排序按钮点击事件
        let sortByGoals = true;
        d3.select('#sort-goals').on('click', function() {
            sortByGoals = !sortByGoals;
            const arr = goalsArray.slice();
            if (sortByGoals) {
                // 按进球数排序
                arr.sort((a, b) => b.goals - a.goals);
                d3.select(this).text('按字母顺序排序');
            } else {
                // 按队名排序
                arr.sort((a, b) => a.team.localeCompare(b.team));
                d3.select(this).text('按进球数排序');
            }
            updateGoalsBar(arr);
        });

    }).catch(err => console.error("D3 CSV Error:", err));

    // 渲染结果饼图
    function renderResultPie(counts, total) {
        const container = d3.select('#chart-result');
        container.html('');
        const w = 420, h = 300, r = Math.min(w, h) / 2 - 20;
        const svg = container.append('svg').attr('width', w).attr('height', h)
            .append('g').attr('transform', `translate(${w / 2}, ${h / 2})`);

        // 生成饼图数据
        const pie = d3.pie().value(d => d.value)(Object.entries(counts).map(([key, value]) => ({ key, value })));
        const arc = d3.arc().innerRadius(0).outerRadius(r);

        // 绘制扇形
        svg.selectAll('path').data(pie).enter().append('path')
            .attr('d', arc).attr('fill', d => colors[d.data.key])
            .attr('stroke', 'white').attr('stroke-width', 1)
            .on('mousemove', (e, d) => showTooltip(`${labelFor(d.data.key)}<br>${d.data.value} 场 (${formatPct(d.data.value, total)})`, e.pageX, e.pageY))
            .on('mouseout', hideTooltip);

        // 添加中心文字
        svg.append('text').attr('text-anchor', 'middle').attr('dy', '-6').style('font-size', '14px').text('比赛结果');
        svg.append('text').attr('text-anchor', 'middle').attr('dy', '16').style('font-size', '12px').style('fill', '#666').text(`共 ${total} 场`);

        // 添加图例
        const legend = container.append('div').style('margin-top', '12px');
        ['H', 'D', 'A'].forEach(k => {
            const item = legend.append('div').style('display', 'inline-block').style('margin-right', '16px');
            item.append('span').style('display','inline-block').style('width','12px').style('height','12px').style('background',colors[k]).style('margin-right','6px');
            item.append('span').style('font-size','13px').text(`${labelFor(k)} ${counts[k]}`);
        });
    }

    let goalsChartState = {};

    // 渲染进球柱状图 (初始化)
    function renderGoalsBar(data) {
        const container = d3.select('#chart-goals');
        container.html('');
        const margin = { top: 20, right: 20, bottom: 60, left: 140 };
        const cw = 1200, ch = 500;
        const svg = container.append('svg').attr('width', '100%').attr('viewBox', `0 0 ${cw} ${ch}`);

        // 定义比例尺
        const x = d3.scaleLinear().domain([0, d3.max(data, d => d.goals) || 1]).range([margin.left, cw - margin.right]);
        const y = d3.scaleBand().domain(data.map(d => d.team)).range([margin.top, ch - margin.bottom]).padding(0.12);

        // 绘制柱子
        svg.append('g').selectAll('rect').data(data).enter().append('rect')
            .attr('class', 'bar').attr('x', margin.left).attr('y', d => y(d.team))
            .attr('height', y.bandwidth()).attr('width', d => x(d.goals) - margin.left).attr('fill', '#3b82c4')
            .on('mousemove', (e, d) => showTooltip(`${d.team}<br>总进球: ${d.goals}<br>场均: ${(d.goals / d.matches).toFixed(2)}`, e.pageX, e.pageY))
            .on('mouseout', hideTooltip);

        // 绘制Y轴标签 (队名)
        svg.append('g').selectAll('text.team').data(data).enter().append('text')
            .attr('x', margin.left - 10).attr('y', d => y(d.team) + y.bandwidth() / 2).attr('dy', '0.35em')
            .attr('text-anchor', 'end').text(d => d.team).style('font-size', '12px');

        // 绘制X轴
        svg.append('g').attr('transform', `translate(0, ${ch - margin.bottom})`).call(d3.axisBottom(x).ticks(8).tickFormat(d3.format('d')));
        svg.append('text').attr('x', cw / 2).attr('y', ch - 15).attr('text-anchor', 'middle').style('font-size', '12px').style('fill', '#666').text('总进球数');

        // 保存状态以便更新
        goalsChartState = { svg, cw, ch, margin };
    }

    // 更新进球柱状图 (排序切换时调用)
    function updateGoalsBar(data) {
        const { svg, cw, ch, margin } = goalsChartState;
        if (!svg) return;
        svg.selectAll('*').remove(); // 清除旧内容

        // 重新定义比例尺和绘制元素 (逻辑同上)
        const x = d3.scaleLinear().domain([0, d3.max(data, d => d.goals) || 1]).range([margin.left, cw - margin.right]);
        const y = d3.scaleBand().domain(data.map(d => d.team)).range([margin.top, ch - margin.bottom]).padding(0.12);

        svg.append('g').selectAll('rect').data(data).enter().append('rect')
            .attr('class', 'bar').attr('x', margin.left).attr('y', d => y(d.team))
            .attr('height', y.bandwidth()).attr('width', d => x(d.goals) - margin.left).attr('fill', '#3b82c4')
            .on('mousemove', (e, d) => showTooltip(`${d.team}<br>总进球: ${d.goals}<br>场均: ${(d.goals / d.matches).toFixed(2)}`, e.pageX, e.pageY))
            .on('mouseout', hideTooltip);

        svg.append('g').selectAll('text.team').data(data).enter().append('text')
            .attr('x', margin.left - 10).attr('y', d => y(d.team) + y.bandwidth() / 2).attr('dy', '0.35em')
            .attr('text-anchor', 'end').text(d => d.team).style('font-size', '12px');

        svg.append('g').attr('transform', `translate(0, ${ch - margin.bottom})`).call(d3.axisBottom(x).ticks(8).tickFormat(d3.format('d')));
        svg.append('text').attr('x', cw / 2).attr('y', ch - 15).attr('text-anchor', 'middle').style('font-size', '12px').style('fill', '#666').text('总进球数');
    }
})();
