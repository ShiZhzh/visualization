(function() {
    var teamsData = allTeamsData; // 假设 allTeamsData 在全局定义

    const chartDom = document.getElementById('chart-container');
    if (!chartDom) return;
    const myChart = echarts.init(chartDom);

    // 加载英国地图GeoJSON数据
    fetch("gb.json")
        .then(response => response.json())
        .then(geoData => {
    
            // 过滤非英格兰地区的ID集合
            const nonEnglishIds = new Set([
                // 苏格兰地区
                "GBABD", "GBABE", "GBAGB", "GBANS", "GBCLK", "GBDGY", "GBDND", "GBEAY", "GBEDH", "GBEDU",
                "GBELN", "GBELS", "GBFAL", "GBFIF", "GBGLG", "GBHLD", "GBIVC", "GBMLN", "GBMRY", "GBNAY",
                "GBNLK", "GBORK", "GBPKN", "GBRFW", "GBSAY", "GBSCB", "GBSLK", "GBSTG", "GBWDU", "GBWLN",
                "GBZET","GBERW",
                // 威尔士地区
                "GBAGY", "GBBGE", "GBBGW", "GBCAY", "GBCGN", "GBCMN", "GBCRF", "GBCWY", "GBDEN", "GBFLN",
                "GBGWN", "GBMON", "GBMTY", "GBNTL", "GBNWP", "GBPEM", "GBPOW", "GBRCT", "GBSWA", "GBTOF",
                "GBVGL", "GBWRX",
                // 北爱尔兰地区
                "GBANT", "GBARD", "GBARM", "GBBLA", "GBBLY", "GBBNB", "GBBFS", "GBCKF", "GBCSR", "GBCKT",
                "GBCLR", "GBCGV", "GBDGN", "GBDOW", "GBDRY", "GBFER", "GBLMV", "GBLRN", "GBLSB", "GBMFT",
                "GBMYL", "GBNDN", "GBNTA", "GBNYM", "GBOMH", "GBSTB"
            ]);

            // 定义英格兰各区域的颜色和包含的行政区ID
            const regionConfig = [
                {
                    name: "North East",
                    color: "#87CEEB", 
                    ids: new Set(["GBNBL","GBNET","GBGAT","GBNTY","GBSTY","GBSND","GBDUR","GBDAL","GBHPL","GBSTT","GBRCC","GBMDB"])
                },
                {
                    name: "North West",
                    color: "#4682B4", 
                    ids: new Set(["GBCMA","GBLAN","GBBPL","GBBBD","GBBOL","GBBUR","GBMAN","GBOLD","GBROC","GBSAL","GBSKP",
                        "GBTAM","GBTRA","GBWIG","GBKNO","GBLIV","GBSEF","GBWIR","GBHAL","GBWRT","GBCHE","GBCWC","GBCHW",
                        "GBTRF","GBSFT","GBKWL","GBSHN","GBWGN","GBSLF","GBRCH",])},
                {
                    name: "Yorkshire and the Humber",
                    color: "#33FF99",
                    ids: new Set(["GBNYK","GBYOR","GBERY","GBKHU","GBBRD","GBCLD","GBKIR","GBLDS","GBWKF","GBBNS","GBDNC",
                        "GBROT","GBSHF","GBNLN","GBNEL","GBKHL",])
                },
                {
                    name: "East Midlands",
                    color: "#FFD700", 
                    ids: new Set(["GBDBY","GBDER","GBNTT","GBNGM","GBLIN","GBLEC","GBLCE","GBRUT","GBNTH","GBNNH","GBWNH"])
                },
                {
                    name: "West Midlands",
                    color: "#FFA500", 
                    ids: new Set(["GBSTS","GBSTO","GBSHR","GBTEL","GBWAR","GBWOR","GBHEF","GBBIR","GBCOV","GBDUD","GBSAN","GBSOL",
                        "GBWAL","GBWLV","GBWLL","GBSAW","GBTFW","GBSTE",])
                },
                {
                    name: "East of England",
                    color: "#9999FF",
                    ids: new Set(["GBNFK","GBSFK","GBCAM","GBPET","GBESS","GBSOU","GBTHR","GBHRT","GBBDF","GBLUT","GBCEN","GBCBF",
                        "GBPTE","GBSOS",])
                },
                {
                    name: "London",
                    color: "#FF9999", 
                    ids: new Set(["GBLND","GBBKI","GBBNE","GBBEX","GBBRN","GBBRO","GBCRO","GBEAL","GBENF","GBGRE","GBHCK",
                        "GBHMF","GBHRG","GBHRW","GBHAV","GBHIL","GBHNS","GBISL","GBKEC","GBKTT","GBLBH","GBLEW","GBMRT","GBNWM",
                        "GBRDB","GBRIC","GBSWK","GBSUT","GBTOW","GBWFT","GBWND","GBWSM","GBSTN","GBCRY","GBBRY","GBBEN","GBBDG",
                        "GBTWH","GBCMD","GBHRY",])
                },
                {
                    name: "South East",
                    color: "#40E0D0", 
                    ids: new Set(["GBBKM","GBMKN","GBOXF","GBSUR","GBWSX","GBESX","GBBHM","GBKEN","GBMDW","GBHAM","GBPOR","GBSOU",
                        "GBIOW","GBBRK","GBBRA","GBREA","GBSLO","GBWNM","GBWIN","GBSTH","GBWBK","GBSRY","GBRDG","GBWOK", "GBBRC",
                        "GBSLG","GBMIK","GBBNH", ])
                },
                {
                    name: "South West",
                    color: "#66B2FF", 
                    ids: new Set(["GBGLO","GBSGC","GBWIL","GBSWI","GBDOR","GBBOU","GBPOO","GBSOM","GBBAS","GBNSM","GBDEV","GBPLY",
                        "GBTOR","GBCRN","GBIOS","GBTOB","GBBST","GBCON","GBPOL","GBBMH","GBGLS", "GBSWD",  ])
                }
            ];

            // 过滤GeoJSON特征，只保留英格兰
            geoData.features = geoData.features.filter(feature => !nonEnglishIds.has(feature.properties.id));

            const specialRegions = [];
            const districtToRegionMap = {};

            // 映射行政区到大区，并设置区域颜色
            geoData.features.forEach(feature => {
       
                const region = regionConfig.find(r => r.ids.has(feature.properties.id));
                if (region) {
                    districtToRegionMap[feature.properties.name] = region.name; 
                    specialRegions.push({
                        name: feature.properties.name,
                        itemStyle: {
                            areaColor: region.color
                        }
                    });
                }
            });

            // 注册地图
            echarts.registerMap('UK', geoData);

            // 根据缩放级别获取显示的数据点 (缩放越大显示越多)
            function getSeriesData(zoom) {
                let limit;
                if (zoom < 1.5) {
                    limit = 11;
                } else if (zoom < 2) {
                    limit = 20; 
                } else {
                    limit = teamsData.length;
                }

                return teamsData.map((item, index) => ({
                    name: item.team,
                    value: [item.lon, item.lat],
                    info: item,
                    label: {
                        show: index < limit 
                    }
                }));
            }

            // 地图配置项
            const option = {
                backgroundColor: 'transparent', 
                geo: {
                    map: 'UK',
                    regions: specialRegions,
                    roam: true, // 开启缩放和平移
                    label: {
                        show: false, 
                        color: '#999',
                        fontSize: 16
                    },
                    itemStyle: {
                        areaColor: '#f4f4f4', 
                        borderColor: '#fff',
                        borderWidth: 1
                    },
                    emphasis: {
                        itemStyle: {
                            areaColor: '#e0e0e0', 
                            shadowBlur: 5,
                            shadowColor: 'rgba(0,0,0,0.2)'
                        },
                        label: {
                            show: true,
                            color: '#37003c'
                        }
                    }
                },
                series: [
                    {
                        name: 'Stadiums',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: getSeriesData(1),
                        symbolSize: 15,
                        itemStyle: {
                            color: '#ff2882', 
                            borderColor: '#fff',
                            borderWidth: 2,
                            shadowBlur: 8,
                            shadowColor: 'rgba(0,0,0,0.4)'
                        },
                        label: {
                            show: true,
                            formatter: '{b}',
                            position: 'top',
                            color: '#37003c', 
                            fontWeight: 'bold',
                            fontSize: 14,
                            backgroundColor: 'rgba(255,255,255,0.8)', 
                            padding: [4, 8],
                            borderRadius: 4
                        },
                        emphasis: {
                            scale: true,
                            label: {
                                show: true,
                                fontSize: 14,
                            }
                        }
                    }
                ],
                tooltip: {
                    trigger: 'item',
                    enterable: true,
                    formatter: getTooltipFormatter() // 假设此函数在外部定义
                }
            };

            myChart.setOption(option);

            
            // 监听缩放事件，动态调整标签显示
            myChart.on('georoam', function () {
                
                const zoom = myChart.getModel().getComponent('geo').coordinateSystem.getZoom();
                
                myChart.setOption({
                    geo: {
                        label: {
                            show: zoom > 2.5 
                        }
                    },
                    series: [{
                        data: getSeriesData(zoom)
                    }]
                });
            });

            // 监听点击事件
            myChart.on('click', function(params) {
                console.log(params.componentType);
                if (params.componentType === 'series') {
                    // 点击球队点，跳转到球队详情页
                    window.location.href = "./team/" + params.name.replace(/\s+/g, '').toLowerCase() + ".html";
                } else if (params.componentType === 'geo') {
                    // 点击地图区域，跳转到区域详情页
                    const districtName = params.name;
             
                    const regionName = districtToRegionMap[districtName];

                    if (regionName) {
                        
                        window.location.href = "./area/"+regionName.replace(/\s+/g, '') + ".html";
                    }
                }
            });
        });

    window.addEventListener('resize', myChart.resize);
})();
