$.getJSON('/data/getHouseSize', function (view_data) {
    (function () {
        console.log(view_data);
        console.log(view_data['view_data'][0]);
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
                    font: 10,
                    color: '#f5e9e9',
                },
                data: ['50平米以下数量', '50-100平米数量', '100-200平米数量', '200平米以上数量']
            },
            grid: {
                x: 5,
                y: 25,
                borderWidth: 1,
                left: '1%',
                right: '6%',
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
                        color: '#dee8df'
                    },
                    fontSize: '10',
                },
                type: 'category',
                data: ['江北', '渝北', '渝中', '南岸', '巴南', '北碚', '九龙坡','大渡口', '沙坪坝']
            },
            series: [
                {
                    name: '50平米以下数量',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: view_data['view_data'][0]
                },
                {
                    name: '50-100平米数量',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: view_data['view_data'][1]
                },
                {
                    name: '100-200平米数量',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: view_data['view_data'][2]
                },
                {
                    name: '200平米以上数量',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: view_data['view_data'][3]
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
    })();
})