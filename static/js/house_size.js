$.getJSON('/data/getHouseSize', function (view_data) {
    (function () {
        var chartDom = document.getElementById('chart_16');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // Use axis to trigger tooltip
                    type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
                }
            },
            legend: {
                textStyle: {
                    color: '#f5e9e9',
                },
                data: ['50以下', '50-100', '100-200', '200以上']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                axisLabel: {
                    textStyle: {
                        color: '#ffffff'
                    },
                },
                type: 'value'
            },
            yAxis: {
                axisLabel: {
                    textStyle: {
                        color: '#ffffff'
                    },
                },
                type: 'category',
                data: ['渝中', '江北', '渝北', '南岸', '沙坪坝', '九龙坡', '大渡口','北碚', '巴南']
            },
            series: [
                {
                    name: '50以下',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: view_data[0]//形成各区域的列表数据data.service,可以是列表中的列表
                },
                {
                    name: '50-100',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: view_data[1]
                },
                {
                    name: '100-200',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: view_data[2]
                },
                {
                    name: '200以上',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: view_data[3]
                },
                // {
                //     name: 'Search Engine',
                //     type: 'bar',
                //     stack: 'total',
                //     label: {
                //         show: true
                //     },
                //     emphasis: {
                //         focus: 'series'
                //     },
                //     data: [820, 832, 901, 934, 1290, 1330, 1320]
                // }
            ]
        };
    
        option && myChart.setOption(option);
    })()
})