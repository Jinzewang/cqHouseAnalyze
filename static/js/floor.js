$.getJSON('/data/getFloor', function (view_data) {
    (function () {
        var dom = document.getElementById("chart_13");
        var myChart = echarts.init(dom);
        var app = {};
        var option;
        option = {
            legend: {
                textStyle: {
                    color: '#c7afba',
                    font: 10,
                }
            },
            tooltip: {},
            grid: {
                x: 25,
                y: 30,
                x2: 25,
                y2: 30,
                borderWidth: 1,
            },
            dataset: {
                source: [
                    ['product', '高楼层', '中楼层', '低楼层'],
                    ['江北', view_data['view_data'][0][0], view_data['view_data'][0][1], view_data['view_data'][0][2]],
                    ['南岸', view_data['view_data'][1][0], view_data['view_data'][1][1], view_data['view_data'][1][2]],
                    ['渝北', view_data['view_data'][2][0], view_data['view_data'][2][1], view_data['view_data'][2][2]],
                    ['渝中', view_data['view_data'][3][0], view_data['view_data'][3][1], view_data['view_data'][3][2]],
                    ['北碚', view_data['view_data'][4][0], view_data['view_data'][4][1], view_data['view_data'][4][2]],
                    ['巴南',view_data['view_data'][5][0], view_data['view_data'][5][1], view_data['view_data'][5][2]],
                    ['沙坪坝',view_data['view_data'][6][0], view_data['view_data'][6][1], view_data['view_data'][6][2]],
                    ['九龙坡', view_data['view_data'][7][0], view_data['view_data'][7][1], view_data['view_data'][7][2]],
                    ['大渡口', view_data['view_data'][8][0], view_data['view_data'][8][1], view_data['view_data'][8][2]],
                ]
            },
            xAxis: {
                axisLabel: {
                    // 坐标轴旋转
                    rotate: 40,
                    interval: 0,
                    textStyle: {
                        color: '#ffffff'
                    },
                },
                type: 'category'
            },
            yAxis: {
                axisLabel: {
                    textStyle: {
                        color: '#ffffff'
                    },
                },
            },
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
        // var chartDom = document.getElementById('chart_13');
        // var myChart = echarts.init(chartDom);
        // var option;
        //
        // option = {
        //     legend: {},
        //     tooltip: {},
        //     dataset: {
        //         source: [
        //             ['product', '2015', '2016', '2017'],
        //             ['Matcha Latte', 43.3, 85.8, 93.7],
        //             ['Milk Tea', 83.1, 73.4, 55.1],
        //             ['Cheese Cocoa', 86.4, 65.2, 82.5],
        //             ['Walnut Brownie', 72.4, 53.9, 39.1]
        //         ]
        //     },
        //     xAxis: {type: 'category'},
        //     yAxis: {},
        //     // Declare several bar series, each will be mapped
        //     // to a column of dataset.source by default.
        //     series: [
        //         {type: 'bar'},
        //         {type: 'bar'},
        //         {type: 'bar'}
        //     ]
        // };
        //
        // option && myChart.setOption(option);
    })();
})