(function (func) {
    $.ajax({
        url: "/data/getHouseSize",
        type: "GET",
        dataType: "json",
        success: function (data) {
            func(data);
        }
    });
}) (function (data) {
    var chartDom = document.getElementById('chart_16');
    var myChart = echarts.init(chartDom);
    var option;
    var dateArea = [[320, 302, 301, 334, 390, 330, 320, 300, 250]
                    ,[120, 132, 101, 134, 90, 230, 210, 300, 250]
                    ,[220, 182, 191, 234, 290, 330, 310, 300, 250]
                    ,[150, 212, 201, 154, 190, 330, 410, 300, 250]]
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {
            data: ['50以下', '50-100', '100-200', '200以上']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
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
                data: dateArea[0]//形成各区域的列表数据data.service,可以是列表中的列表
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
                data: dateArea[1]
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
                data: dateArea[2]
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
                data: dateArea[3]
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
})