(function() {
    const radarTeamsData = {
        "曼城":{color:"#6CABDD",values:[85,87,92,95,55,76],rank:1},
        "利物浦":{color:"#C8102E",values:[92,87,85,95,55,74],rank:2},
        "切尔西":{color:"#034694",values:[68,72,78,82,42,55],rank:3},
        "热刺":{color:"#132257",values:[63,65,58,68,42,58],rank:4},
        "阿森纳":{color:"#DB0007",values:[61,63,61,71,34,58],rank:5},
        "曼联":{color:"#DA291C",values:[57,60,68,55,21,42],rank:6},
        "西汉姆联":{color:"#7A263A",values:[60,58,60,57,21,42],rank:7},
        "莱斯特城":{color:"#003090",values:[55,58,62,50,18,42],rank:8},
        "布莱顿":{color:"#0057B8",values:[45,47,55,68,34,34],rank:9},
        "狼队":{color:"#FDB913",values:[35,35,55,47,29,39],rank:10},
        "纽卡斯尔联":{color:"#241F20",values:[40,42,48,45,21,26],rank:11},
        "水晶宫":{color:"#1B458F",values:[47,45,55,58,32,29],rank:12},
        "布伦特福德":{color:"#E30613",values:[42,44,48,53,24,34],rank:13},
        "阿斯顿维拉":{color:"#95BFE5",values:[50,50,61,57,29,34],rank:14},
        "南安普顿":{color:"#D71920",values:[42,52,60,40,21,24],rank:15},
        "埃弗顿":{color:"#003399",values:[42,42,50,42,21,26],rank:16},
        "利兹联":{color:"#FFCD00",values:[41,47,48,35,13,24],rank:17},
        "伯恩利":{color:"#6C1D45",values:[30,38,50,52,24,18],rank:18},
        "沃特福德":{color:"#FFED00",values:[30,35,44,34,11,16],rank:19},
        "诺维奇":{color:"#00A650",values:[18,28,44,30,16,13],rank:20}
    };

    const indicators = [
        {name:"场均进球",max:100},
        {name:"场均射正",max:100},
        {name:"场均角球",max:100},
        {name:"防守得分",max:100},
        {name:"零封率",max:100},
        {name:"胜率",max:100}
    ];

    let radarSelected = ["曼城"], radarMode = "single", radarChartInstance = null;

    // Initialize Radar Chart
    (function initRadar(){
        const btns = document.getElementById("teamButtons");
        if (!btns) return;
        Object.keys(radarTeamsData).forEach(t=>{
            const b = document.createElement("button");
            b.className = "team-btn";
            b.textContent = t;
            b.style.borderLeft = `4px solid ${radarTeamsData[t].color}`;
            b.onclick = ()=>selectRadarTeam(t);
            btns.appendChild(b);
        });

        document.getElementById("modeSelect").onchange = e=>{
            radarMode = e.target.value;
            document.getElementById("comparisonGroup").style.display = radarMode==="compare"?"block":"none";
            if(radarMode==="single" && radarSelected.length>1) radarSelected = [radarSelected[0]];
            updateRadar();
        };

        const a = document.getElementById("teamASelect"), b = document.getElementById("teamBSelect");
        Object.keys(radarTeamsData).forEach(t=>{a.add(new Option(t,t)); b.add(new Option(t,t));});
        a.onchange = ()=>{radarSelected[0]=a.value; updateRadar();}
        b.onchange = ()=>{radarSelected[1]=b.value; updateRadar();}

        radarChartInstance = echarts.init(document.getElementById("radar-chart-visual"));
        window.addEventListener('resize', ()=>radarChartInstance.resize());

        updateRadar();
    })();

    function selectRadarTeam(t){
        if(radarMode==="single") radarSelected = [t];
        else{
            if(radarSelected.includes(t)) radarSelected = radarSelected.filter(x=>x!==t);
            else if(radarSelected.length<2) radarSelected.push(t);
            else radarSelected[1] = t;
        }
        updateRadar();
    }

    function updateRadar(){
        document.querySelectorAll(".team-btn").forEach(b=>b.classList.toggle("active",radarSelected.includes(b.textContent)));
        if(radarSelected[0]) document.getElementById("teamASelect").value = radarSelected[0];
        if(radarSelected[1]) document.getElementById("teamBSelect").value = radarSelected[1];

        document.getElementById("chartTitle").textContent = radarMode==="single"
            ? `${radarSelected[0]} - 2021-2022赛季表现雷达图`
            : `${radarSelected[0]} vs ${radarSelected[1]} - 对比雷达图`;

        const seriesData = radarSelected.map(t=>({
            name: t,
            value: radarTeamsData[t].values,
            itemStyle: {color: radarTeamsData[t].color},
            lineStyle: {color: radarTeamsData[t].color, width: 3},
            areaStyle: {color: hexToRgba(radarTeamsData[t].color,0.25)}
        }));

        radarChartInstance.setOption({
            legend: {data: radarSelected, top:20, right:30, textStyle:{color:"#333"}},
            radar: {
                indicator: indicators,
                shape: "circle",
                center: ["50%","55%"],
                radius: "68%",
                name: {
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: 14
                },
                splitArea: {areaStyle:{color:["rgba(248,249,250,0.8)","rgba(248,249,250,0.4)"]}},
                splitLine: {lineStyle:{color:"#e0e0e0"}},
                axisLine: {lineStyle:{color:"#e0e0e0"}}
            },
            series: [{type:"radar", data:seriesData}]
        }, true);

        document.getElementById("chartLegend").innerHTML = radarSelected.map(t=>`
            <div class="legend-item">
                <div class="legend-color" style="background:${radarTeamsData[t].color}"></div>
                <span>${t} (${radarTeamsData[t].rank}名)</span>
            </div>`).join("");

        const table = document.getElementById("dataTable");
        const head = `<tr><th>俱乐部</th>${indicators.map(i=>`<th>${i.name}</th>`).join("")}<th>排名</th></tr>`;
        const rows = radarSelected.map(t=>{
            const d = radarTeamsData[t];
            const cells = d.values.map(v=>`<td style="color:${v>=70?"#10b981":v>=50?"#f59e0b":"#ef4444"};font-weight:600">${v}</td>`).join("");
            return `<tr>
                <td class="team-cell"><div class="team-indicator" style="background:${d.color}"></div><strong>${t}</strong></td>
                ${cells}
                <td style="font-weight:700;color:#3b82f6">第${d.rank}名</td>
            </tr>`;
        }).join("");
        table.innerHTML = `<thead>${head}</thead><tbody>${rows}</tbody>`;
    }

    function hexToRgba(h,a){
        const r=parseInt(h.slice(1,3),16), g=parseInt(h.slice(3,5),16), b=parseInt(h.slice(5,7),16);
        return `rgba(${r},${g},${b},${a})`;
    }
})();
