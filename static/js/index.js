// 重庆均价
$.getJSON('/data/getAvg', function (avgs) {
    (function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector(".liuline .chart"));

        // (1)准备数据
        var data = {
            price: [
                [avgs['avg'][0], avgs['avg'][1], avgs['avg'][2],
                    avgs['avg'][3], avgs['avg'][4], avgs['avg'][5],
                    avgs['avg'][6], avgs['avg'][7], avgs['avg'][8]]
            ]
        };

        // 2. 指定配置和数据
        var option = {
            // backgroundColor: '#0f375f',
            color: ["#00f2f1", "#ed3f35"],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        backgroundColor: '#333'
                    }
                }
            },
            legend: {
                data: ['均价', 'bar'],
                right: "10%",
                // 修饰图例文字的颜色
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            grid: {
                top: "20%",
                left: "3%",
                right: "4%",
                bottom: "3%",
                show: true,
                borderColor: "#012f4a",
                containLabel: true
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: [avgs['area'][0], avgs['area'][1], avgs['area'][2],
                    avgs['area'][3], avgs['area'][4], avgs['area'][5],
                    avgs['area'][6], avgs['area'][7], avgs['area'][8]],
                // 去除x坐标轴的颜色
                axisLine: {
                    lineStyle: {
                        color: "#ccc"
                    }
                },
                axisTick: {
                    show: false
                },
                // 修饰刻度标签的颜色
                axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: 12
                    },
                    interval: 0,
                    rotate: 40
                },
            },
            yAxis: {
                type: "value",
                splitLine: {show: false},
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            series: [{
                name: '均价',
                type: 'line',
                // 是否让线条圆滑显示（默认平滑）
                // smooth: tru
                showAllSymbol: false,
                symbol: 'emptyCircle',
                data: data.price[0]
            }, {
                name: 'line',
                type: 'bar',
                barGap: '-100%',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: 'rgba(20,200,212,0.5)'},
                                {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                                {offset: 1, color: 'rgba(20,200,212,0)'}
                            ]
                        )
                    }
                },
                z: -12,
                data: data.price[0]
            }]
        };
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);

        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    })();
});
// 户型占比
$.getJSON('/data/getType', function (data) {
    (function () {
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".liubar  .chart"));
        // 2. 指定配置项和数据
        var option = {
            legend: {
                top: "90%",
                itemWidth: 10,
                itemHeight: 10,
                x: 'center',
                y: 'bottom',
                data: [data['huxing'][0], data['huxing'][1], data['huxing'][2],
                    data['huxing'][3], data['huxing'][4]],
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: "12"
                }
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            // 注意颜色写的位置
            color: [
                "#006cff",
                "#60cda0",
                "#ed8884",
                "#ff9f7f",
                "#0096ff",
                "#9fe6b8",
                "#32c5e9",
                "#1d9dff"
            ],
            series: [
                {
                    name: "点位统计",
                    type: "pie",
                    // 如果radius是百分比则必须加引号
                    radius: ["10%", "70%"],
                    center: ["50%", "42%"],
                    roseType: "radius",
                    data: [
                        {value: data['price'][0], name: data['huxing'][0]},
                        {value: data['price'][1], name: data['huxing'][1]},
                        {value: data['price'][2], name: data['huxing'][2]},
                        {value: data['price'][3], name: data['huxing'][3]},
                        {value: data['price'][4], name: data['huxing'][4]},
                    ],
                    itemStyle: {
                        normal: {
                            borderColor: '#273454',
                            borderWidth: '1',
                        },
                    },
                    // 修饰饼形图文字相关的样式 label对象
                    label: {
                        formatter: '{b}：{d}%',
                        fontSize: 10
                    },
                    // 修饰引导线样式
                    labelLine: {
                        // 连接到图形的线长度
                        length: 10,
                        // 连接到文字的线长度
                        length2: 10
                    }
                }
            ]
        };

        // 3. 配置项和数据给我们的实例化对象
        myChart.setOption(option);
        // 4. 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function () {
            // 让我们的图表调用 resize这个方法
            myChart.resize();
        });
    })();
    console.log(data['price'])
});
