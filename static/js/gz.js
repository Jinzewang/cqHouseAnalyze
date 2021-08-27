// 柱状图1模块

// 关注度数据展示
$.getJSON('/data/getGZ', function (gz) {
    (function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector("bar.chart"));
        var sumPeople = gz['SumPeople']
        var C_area = gz['C_area']

        var data1 = sumPeople
        var data2 = ['关注人数']
        var data3 = data2.concat(data1)
        var data4 = ['product']
        var data5 = C_area
        var data6 = data4.concat(data5)
        option = {
            legend: {},
            tooltip: {},
            dataset: {
                source: [
                    data6, data3,
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
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

        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    })();
    console.log(data['price'][0])
});

//
// // 关注度数据展示
// $.getJSON('/data/get_relation_data', function (gz) {
//     (function () {
//         // 基于准备好的dom，初始化echarts实例
//         var myChart = echarts.init(document.querySelector("bar.chart"));
//
//         var data1 = {
//         {
//             GZ | tojson
//         }
//     }
//         var data2 = ['关注人数']
//         var data3 = data2.concat(data1)
//         var data4 = ['product']
//         var data5 = {
//         {
//             area | tojson
//         }
//     }
//         var data6 = data4.concat(data5)
//         option = {
//             legend: {},
//             tooltip: {},
//             dataset: {
//                 source: [
//                     data6, data3,
//                 ]
//             },
//             xAxis: {type: 'category'},
//             yAxis: {},
//             // Declare several bar series, each will be mapped
//             // to a column of dataset.source by default.
//             series: [
//                 {type: 'bar'},
//                 {type: 'bar'},
//                 {type: 'bar'},
//                 {type: 'bar'},
//                 {type: 'bar'},
//                 {type: 'bar'},
//                 {type: 'bar'},
//                 {type: 'bar'},
//                 {type: 'bar'},
//
//             ]
//         };
//
//
//         // 3. 把配置和数据给实例对象
//         myChart.setOption(option);
//
//         // 重新把配置好的新数据给实例对象
//         myChart.setOption(option);
//         window.addEventListener("resize", function () {
//             myChart.resize();
//         });
//     })();
//     console.log(data['price'][0])
// });
//
