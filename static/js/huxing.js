// 户型占比(1室)
$.getJSON('/data/getType', function (data) {
    (function () {
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".one  .chart"));
        // 2. 指定配置项和数据
        var option = {
            legend: {
                top: "90%",
                itemWidth: 10,
                itemHeight: 10,
                x: 'center',
                y: 'bottom',
                data: [data['num'][0][0], data['num'][5][0], data['num'][10][0],
                    data['num'][15][0], data['num'][20][0], data['num'][25][0]
                    , data['num'][30][0], data['num'][35][0], data['num'][40][0]],
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
                        {value: data['num'][0][2], name: data['num'][0][0]},
                        {value: data['num'][5][2], name: data['num'][5][0]},
                        {value: data['num'][10][2], name: data['num'][10][0]},
                        {value: data['num'][15][2], name: data['num'][15][0]},
                        {value: data['num'][20][2], name: data['num'][20][0]},
                        {value: data['num'][25][2], name: data['num'][25][0]},
                        {value: data['num'][30][2], name: data['num'][30][0]},
                        {value: data['num'][35][2], name: data['num'][35][0]},
                        {value: data['num'][40][2], name: data['num'][40][0]},
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

// 户型占比(2室)
$.getJSON('/data/getType', function (data) {
    (function () {
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".two  .chart"));
        // 2. 指定配置项和数据
        var option = {
            legend: {
                top: "90%",
                itemWidth: 10,
                itemHeight: 10,
                x: 'center',
                y: 'bottom',
                data: [data['num'][1][0], data['num'][6][0], data['num'][11][0],
                    data['num'][16][0], data['num'][21][0], data['num'][26][0]
                    , data['num'][31][0], data['num'][36][0], data['num'][41][0]],
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
                        {value: data['num'][1][2], name: data['num'][1][0]},
                        {value: data['num'][6][2], name: data['num'][6][0]},
                        {value: data['num'][11][2], name: data['num'][11][0]},
                        {value: data['num'][16][2], name: data['num'][16][0]},
                        {value: data['num'][21][2], name: data['num'][21][0]},
                        {value: data['num'][26][2], name: data['num'][26][0]},
                        {value: data['num'][31][2], name: data['num'][31][0]},
                        {value: data['num'][36][2], name: data['num'][36][0]},
                        {value: data['num'][41][2], name: data['num'][41][0]},
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

// 户型占比(3室)
$.getJSON('/data/getType', function (data) {
    (function () {
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".three  .chart"));
        // 2. 指定配置项和数据
        var option = {
            legend: {
                top: "90%",
                itemWidth: 10,
                itemHeight: 10,
                x: 'center',
                y: 'bottom',
                data: [data['num'][2][0], data['num'][7][0], data['num'][12][0],
                    data['num'][17][0], data['num'][22][0], data['num'][27][0]
                    , data['num'][32][0], data['num'][37][0], data['num'][42][0]],
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
                        {value: data['num'][2][2], name: data['num'][2][0]},
                        {value: data['num'][7][2], name: data['num'][7][0]},
                        {value: data['num'][12][2], name: data['num'][12][0]},
                        {value: data['num'][17][2], name: data['num'][17][0]},
                        {value: data['num'][22][2], name: data['num'][22][0]},
                        {value: data['num'][27][2], name: data['num'][27][0]},
                        {value: data['num'][32][2], name: data['num'][32][0]},
                        {value: data['num'][37][2], name: data['num'][37][0]},
                        {value: data['num'][42][2], name: data['num'][42][0]},
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

// 户型占比(4室)
$.getJSON('/data/getType', function (data) {
    (function () {
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".four  .chart"));
        // 2. 指定配置项和数据
        var option = {
            legend: {
                top: "90%",
                itemWidth: 10,
                itemHeight: 10,
                x: 'center',
                y: 'bottom',
                data: [data['num'][3][0], data['num'][8][0], data['num'][13][0],
                    data['num'][18][0], data['num'][23][0], data['num'][28][0]
                    , data['num'][33][0], data['num'][38][0], data['num'][43][0]],
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
                        {value: data['num'][3][2], name: data['num'][3][0]},
                        {value: data['num'][8][2], name: data['num'][8][0]},
                        {value: data['num'][13][2], name: data['num'][13][0]},
                        {value: data['num'][18][2], name: data['num'][18][0]},
                        {value: data['num'][23][2], name: data['num'][23][0]},
                        {value: data['num'][28][2], name: data['num'][28][0]},
                        {value: data['num'][33][2], name: data['num'][33][0]},
                        {value: data['num'][38][2], name: data['num'][38][0]},
                        {value: data['num'][43][2], name: data['num'][43][0]},
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

// 户型占比(5室)
$.getJSON('/data/getType', function (data) {
    (function () {
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".five  .chart"));
        // 2. 指定配置项和数据
        var option = {
            legend: {
                top: "90%",
                itemWidth: 10,
                itemHeight: 10,
                x: 'center',
                y: 'bottom',
                data: [data['num'][4][0], data['num'][9][0], data['num'][14][0],
                    data['num'][19][0], data['num'][24][0], data['num'][29][0]
                    , data['num'][34][0], data['num'][39][0], data['num'][44][0]],
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
                        {value: data['num'][4][2], name: data['num'][4][0]},
                        {value: data['num'][9][2], name: data['num'][9][0]},
                        {value: data['num'][14][2], name: data['num'][14][0]},
                        {value: data['num'][19][2], name: data['num'][19][0]},
                        {value: data['num'][24][2], name: data['num'][24][0]},
                        {value: data['num'][29][2], name: data['num'][29][0]},
                        {value: data['num'][34][2], name: data['num'][34][0]},
                        {value: data['num'][39][2], name: data['num'][39][0]},
                        {value: data['num'][44][2], name: data['num'][44][0]},
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
