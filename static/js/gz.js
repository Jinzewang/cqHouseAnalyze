// 关注度数据展示


// 关注度数据展示
$.getJSON('/data/get_relation_data', function (relation) {
    (function () {

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("zx"));
        var data1 = relation.slice(0, 9)
        var data2 = relation.slice(9, 18)
        var data3 = relation.slice(18, 27)
        var data4 = relation.slice(27, 36)
        // console.log(data1,data2,data3,data4)
        option = {
            title: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['精装', '简装', '毛坯'],
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12
                }
            },
            grid: {
                x: 45,
                y: 20,
                x2: 1,
                y2: 18,
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel: {color: '#fff'},
                axisLabel: {
                    textStyle: {
                        color: '#c3dbff',  //更改坐标轴文字颜色
                        fontSize: 12      //更改坐标轴文字大小
                    }
                }

            },
            yAxis: {
                type: 'category',
                data: data1,
                axisLine: {show: false},
                axisTick: {show: false},
                axisLabel: {color: '#fff'}
            },
            series: [
                {
                    name: '精装',
                    type: 'bar',
                    data: data3,
                    itemStyle: {
                        barBorderRadius: 3
                    },

                },
                {
                    name: '简装',
                    type: 'bar',
                    data: data4,
                    itemStyle: {
                        barBorderRadius: 3
                    }
                },
                {
                    name: '毛坯',
                    type: 'bar',
                    data: data2,
                    itemStyle: {
                        barBorderRadius: 3
                    }
                },

            ]
        };

        myChart.setOption(option);
    })();
});

$.getJSON('/data/getGZ', function (gz) {
    (function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("gz"));
        var sumPeople = gz.slice(9, 18)
        var C_area = gz.slice(0, 9)

        // console.log(sumPeople, C_area)
        var data1 = sumPeople
        var data2 = ['关注人数']
        var data3 = data2.concat(data1)
        var data4 = ['product']
        var data5 = C_area
        var data6 = data4.concat(data5)
        console.log(data3, data6)
        option = {
            legend: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            tooltip: {},
            dataset: {
                source: [
                    data6, data3,
                ]
            },
            grid: {
                x: 55,
                y: 52,
                x2: 1,
                y2: 18,
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    textStyle: {
                        color: '#c3dbff',  //更改坐标轴文字颜色
                        fontSize: 12      //更改坐标轴文字大小
                    }
                }
            },
            yAxis: {
                axisLabel: {
                    textStyle: {
                        color: '#c3dbff',  //更改坐标轴文字颜色
                        fontSize: 12      //更改坐标轴文字大小
                    }
                }
            },
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},

            ]
        };

        // 3. 把配置和数据给实例对象
        myChart.setOption(option);

    })();
});