(function (func) {
    $.ajax({
        url: "/data/getFloor",
        type: "GET",
        dataType: "json",
        success: function (data) {
            func(data);
        }
    });
}) (function (data) {
    var dom = document.getElementById("chart_13");
    var myChart = echarts.init(dom);
    var app = {};
    alert(data)
    var option;
    var dataFloor = [[43.3, 85.8, 93.7]
                    ,[83.1, 73.4, 55.1]
                    ,[86.4, 65.2, 82.5]
                    ,[72.4, 53.9, 39.1]
                    ,[23.1, 45.2, 15.2]
                    ,[14,45,36]
                    ,[14,45,36]
                    ,[14,45,36]
                    ,[14,45,36]]

    option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '高楼层', '中楼层', '低楼层'],
                ['渝中', dataFloor[0][0], dataFloor[0][1], dataFloor[0][2]],
                ['江北', dataFloor[1][0], dataFloor[1][1], dataFloor[1][2]],
                ['渝北', dataFloor[2][0], dataFloor[2][1], dataFloor[2][2]],
                ['南岸', dataFloor[3][0], dataFloor[3][1], dataFloor[3][2]],
                ['沙坪坝', dataFloor[4][0], dataFloor[4][1], dataFloor[4][2]],
                ['九龙坡',dataFloor[5][0], dataFloor[5][1], dataFloor[5][2]],
                ['大渡口',dataFloor[6][0], dataFloor[6][1], dataFloor[6][2]],
                ['北碚', dataFloor[7][0], dataFloor[7][1], dataFloor[7][2]],
                ['巴南', dataFloor[8][0], dataFloor[8][1], dataFloor[8][2]],
            ]
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {},
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
})