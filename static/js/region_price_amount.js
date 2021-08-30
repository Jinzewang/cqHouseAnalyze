//
area=['江北','渝北','南岸','渝中','沙坪坝','九龙坡','巴南','大渡口','北碚']
price_range=['30万以下','30-60万','60-100万','100-150万','150-200万','200万以上']



//30万以下
$.getJSON('/data/getPrice',function (price_amount,ifsuccess) {

//折线图定制
(function () {
data_underthirty=[price_amount['price_amount_jiangbei']['UnderThirty'],price_amount['price_amount_yubei']['UnderThirty'],
        price_amount['price_amount_nanan']['UnderThirty'],price_amount['price_amount_yuzhong']['UnderThirty'],
        price_amount['price_amount_shapingba']['UnderThirty'],price_amount['price_amount_jiulongpo']['UnderThirty'],
        price_amount['price_amount_banan']['UnderThirty'],price_amount['price_amount_dadukou']['UnderThirty'],price_amount['price_amount_beibei']['UnderThirty']]
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".UnderThirty .chart"));
// console.log(123456)
// console.log(price_amount)
// console.log( price_amount['price_amount_jiangbei']['area'])
  option = {
    backgroundColor: 'transparent',

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    legend: {
        align: "left",
        right: '5%',
        top:'2%',
        type:'plain',
        textStyle:{
            color:'#7ec7ff',
            fontSize:'70%'
        },
        // icon:'rect',
        itemGap:12,
        itemWidth:10,
        icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

        data: [
            price_range[0]
        ]
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '12%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
         name: '区域',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 10
        },
        type: 'category',
        axisLine: {
            show: true
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: area,

    }],

    yAxis: [
         {
         name: '数量',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 0,
        },
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
        {
            name: price_range[0],
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: "#00b3f4",
                    // shadowColor: 'rgba(0, 0, 0, .3)',
                    // shadowBlur: 0,
                    // shadowOffsetY: 3,
                    // shadowOffsetX: 3,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00b3f4',
                }
            },
            itemStyle: {
                color: "#00b3f4",
                borderColor: "#fff",
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,179,244,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,179,244,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,179,244, 0.9)',
                    shadowBlur: 20
                }
            },
            data:data_underthirty
        },

    ]
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
});

//30-60万
$.getJSON('/data/getPrice',function (price_amount,ifsuccess) {

// 折线图定制
(function () {

data_ThirtyToSixty=[price_amount['price_amount_jiangbei']['ThirtyToSixty'],price_amount['price_amount_yubei']['ThirtyToSixty'],
        price_amount['price_amount_nanan']['ThirtyToSixty'],price_amount['price_amount_yuzhong']['ThirtyToSixty'],
        price_amount['price_amount_shapingba']['ThirtyToSixty'],price_amount['price_amount_jiulongpo']['ThirtyToSixty'],
        price_amount['price_amount_banan']['ThirtyToSixty'],price_amount['price_amount_dadukou']['ThirtyToSixty'],
        price_amount['price_amount_beibei']['ThirtyToSixty']]
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".ThirtyToSixty .chart"));
// console.log(123456)
// console.log(price_amount)
// console.log( price_amount['price_amount_jiangbei']['area'])
  option = {
    backgroundColor: 'transparent',

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    legend: {
        align: "left",
        right: '5%',
        top:'1%',
        type:'plain',
        textStyle:{
            color:'#7ec7ff',
            fontSize:'70%'
        },
        // icon:'rect',
        itemGap:12,
        itemWidth:10,
        icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

        data: [
            price_range[1]
        ]
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '12%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
         name: '区域',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 10
        },
        type: 'category',
        axisLine: {
            show: true
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: area,

    }],

    yAxis: [
         {
         name: '数量',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 0,
        },
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
        {
            name: price_range[1],
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: "#00ca95",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00ca95',
                }
            },

            itemStyle: {
                color: "#00ca95",
                borderColor: "#fff",
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,202,149,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,202,149,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,202,149, 0.9)',
                    shadowBlur: 20
                }
            },
            data: data_ThirtyToSixty
        },

    ]
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
});

//60-100万
$.getJSON('/data/getPrice',function (price_amount,ifsuccess) {
// 折线图定制
(function () {
data_SixtyToHundred=[price_amount['price_amount_jiangbei']['SixtyToHundred'],price_amount['price_amount_yubei']['SixtyToHundred'],
        price_amount['price_amount_nanan']['SixtyToHundred'],price_amount['price_amount_yuzhong']['SixtyToHundred'],
        price_amount['price_amount_shapingba']['SixtyToHundred'],price_amount['price_amount_jiulongpo']['SixtyToHundred'],
        price_amount['price_amount_banan']['SixtyToHundred'],price_amount['price_amount_dadukou']['SixtyToHundred'],
        price_amount['price_amount_beibei']['SixtyToHundred']]
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".SixtyToHundred .chart"));
// console.log(123456)
// console.log(price_amount)
// console.log( price_amount['price_amount_jiangbei']['area'])
  option = {
    backgroundColor: 'transparent',

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    legend: {
        align: "left",
        right: '5%',
        top:'6%',
        type:'plain',
        textStyle:{
            color:'#7ec7ff',
            fontSize:'70%'
        },
        // icon:'rect',
        itemGap:12,
        itemWidth:10,
        icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

        data: [
            price_range[2]
        ]
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '12%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
         name: '区域',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 10
        },
        type: 'category',
        axisLine: {
            show: true
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: area,

    }],

    yAxis: [
         {
         name: '数量',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 0,
        },
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
         {
            name: price_range[2],
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: "#90d7ec",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#90d7ec',
                }
            },

            itemStyle: {
                color: "#90d7ec",
                borderColor: "#fff",
                borderWidth: 3,
                // shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(144,215,236,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(144,215,236,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(144,215,236, 0.9)',
                    shadowBlur: 20
                }
            },
            data: data_SixtyToHundred
        },

    ]
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
});

//100-150万
$.getJSON('/data/getPrice',function (price_amount,ifsuccess) {
// 折线图定制
(function () {
data_HundredToHfifty=[price_amount['price_amount_jiangbei']['HundredToHfifty'],price_amount['price_amount_yubei']['HundredToHfifty'],
        price_amount['price_amount_nanan']['HundredToHfifty'],price_amount['price_amount_yuzhong']['HundredToHfifty'],
        price_amount['price_amount_shapingba']['HundredToHfifty'],price_amount['price_amount_jiulongpo']['HundredToHfifty'],
        price_amount['price_amount_banan']['HundredToHfifty'],price_amount['price_amount_dadukou']['HundredToHfifty'],
        price_amount['price_amount_beibei']['HundredToHfifty']]
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".HundredToHfifty .chart"));

  option = {
    backgroundColor: 'transparent',

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    legend: {
        align: "left",
        right: '5%',
        top:'1%',
        type:'plain',
        textStyle:{
            color:'#90d7ec',
            fontSize:'70%'
        },
        // icon:'rect',
        itemGap:12,
        itemWidth:10,
        icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

        data: [
            price_range[3]
        ]
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '12%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
         name: '区域',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 10
        },
        type: 'category',
        axisLine: {
            show: true
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: area,

    }],

    yAxis: [
         {
         name: '数量',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 0,
        },
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
        {
            name: price_range[3],
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
           lineStyle: {
                normal: {
                    color: "#ffc20e",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#ffc20e',
                }
            },

            itemStyle: {
                color: "#ffc20e",
                borderColor: "#fff",
                borderWidth: 3,
                // shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(295,194,14,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(295,194,14,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(295,194,14, 0.9)',
                    shadowBlur: 20
                }
            },
            data: data_HundredToHfifty
        },

    ]
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
});

//150-200万
$.getJSON('/data/getPrice',function (price_amount,ifsuccess) {

// 折线图定制
(function () {
data_HfiftyToTHundred=[price_amount['price_amount_jiangbei']['HfiftyToTHundred'],price_amount['price_amount_yubei']['HfiftyToTHundred'],
        price_amount['price_amount_nanan']['HfiftyToTHundred'],price_amount['price_amount_yuzhong']['HfiftyToTHundred'],
        price_amount['price_amount_shapingba']['HfiftyToTHundred'],price_amount['price_amount_jiulongpo']['HfiftyToTHundred'],
        price_amount['price_amount_banan']['HfiftyToTHundred'],price_amount['price_amount_dadukou']['HfiftyToTHundred'],
        price_amount['price_amount_beibei']['HfiftyToTHundred']]
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".HfiftyToTHundred .chart"));
// console.log(123456)
// console.log(price_amount)
// console.log( price_amount['price_amount_jiangbei']['area'])
  option = {
    backgroundColor: 'transparent',

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    legend: {
        align: "left",
        right: '5%',
        top:'1%',
        type:'plain',
        textStyle:{
            color:'#ba8448',
            fontSize:'70%'
        },
        // icon:'rect',
        itemGap:12,
        itemWidth:10,
        icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

        data: [
            price_range[4]
        ]
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '12%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
         name: '区域',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 10
        },
        type: 'category',
        axisLine: {
            show: true
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: area,

    }],

    yAxis: [
         {
         name: '数量',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 0,
        },
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [

        {
            name: price_range[4],
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
           lineStyle: {
                normal: {
                    color: "#ba8448",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#ba8448',
                }
            },

            itemStyle: {
                color: "#ba8448",
                borderColor: "#fff",
                borderWidth: 3,
                // shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(186,132,72,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(186,132,72,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(186,132,72, 0.9)',
                    shadowBlur: 20
                }
            },
            data: data_HfiftyToTHundred
        },

    ]
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
});

//200万以上
$.getJSON('/data/getPrice',function (price_amount,ifsuccess) {

// 折线图定制
(function () {
data_AboveTHundred=[price_amount['price_amount_jiangbei']['AboveTHundred'],price_amount['price_amount_yubei']['AboveTHundred'],
        price_amount['price_amount_nanan']['AboveTHundred'],price_amount['price_amount_yuzhong']['AboveTHundred'],
        price_amount['price_amount_shapingba']['AboveTHundred'],price_amount['price_amount_jiulongpo']['AboveTHundred'],
        price_amount['price_amount_banan']['AboveTHundred'],price_amount['price_amount_dadukou']['AboveTHundred'],
        price_amount['price_amount_beibei']['AboveTHundred']]
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".AboveTHundred .chart"));

  option = {
    backgroundColor: 'transparent',

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    legend: {
        align: "left",
        right: '5%',
        top:'1%',
        type:'plain',
        textStyle:{
            color:'#f15a22',
            fontSize:'70%'
        },
        // icon:'rect',
        itemGap:12,
        itemWidth:10,
        icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

        data: [
            price_range[5]
        ]
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '12%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
         name: '区域',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 10
        },
        type: 'category',
        axisLine: {
            show: true
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: area,

    }],

    yAxis: [
         {
         name: '数量',
        nameTextStyle: {
            color: "#7ec7ff",
            fontSize: '70%',
            padding: 0,
        },
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [

        {
            name: price_range[5],
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: "#f15a22",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#f15a22',
                }
            },

            itemStyle: {
                color: "#f15a22",
                borderColor: "#fff",
                borderWidth: 3,
                // shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(241,90,34,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(241,90,34,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(241,90,34, 0.9)',
                    shadowBlur: 20
                }
            },
            data: data_AboveTHundred,
        },

    ]
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
});


//大渡口
// $.getJSON('/data/getPrice',function (price_amount,ifsuccess) {
//
// // 折线图定制
// (function () {
// data_dadukou=[price_amount['price_amount_dadukou']['UnderThirty'],price_amount['price_amount_dadukou']['ThirtyToSixty'],
//         price_amount['price_amount_dadukou']['SixtyToEigthty'],price_amount['price_amount_dadukou']['EightyToHundred'],
//         price_amount['price_amount_dadukou']['HundredToHfifty'],price_amount['price_amount_dadukou']['HfiftyToTHundred'],
//         price_amount['price_amount_dadukou']['AboveTHundred']]
//   // 基于准备好的dom，初始化echarts实例
//   var myChart = echarts.init(document.querySelector(".dadukou .chart"));
//
//   option = {
//     backgroundColor: 'transparent',
//
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             lineStyle: {
//                 color: {
//                     type: 'linear',
//                     x: 0,
//                     y: 0,
//                     x2: 0,
//                     y2: 1,
//                     colorStops: [{
//                         offset: 0,
//                         color: 'rgba(0, 255, 233,0)'
//                     }, {
//                         offset: 0.5,
//                         color: 'rgba(255, 255, 255,1)',
//                     }, {
//                         offset: 1,
//                         color: 'rgba(0, 255, 233,0)'
//                     }],
//                     global: false
//                 }
//             },
//         },
//     },
//     legend: {
//         align: "left",
//         right: '5%',
//         top:'1%',
//         type:'plain',
//         textStyle:{
//             color:'#50b7c1',
//             fontSize:'70%'
//         },
//         // icon:'rect',
//         itemGap:12,
//         itemWidth:10,
//         icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
//
//         data: [
//             {
//                 name: price_amount['price_amount_dadukou']['area']
//             },
//
//         ]
//     },
//     grid: {
//         top: '15%',
//         left: '5%',
//         right: '12%',
//         bottom: '6%',
//         containLabel: true
//     },
//     xAxis: [
//         {
//          name: '区域',
//         nameTextStyle: {
//             color: "#7ec7ff",
//             fontSize: '70%',
//             padding: 10
//         },
//         type: 'category',
//         axisLine: {
//             show: true
//         },
//         splitArea: {
//             // show: true,
//             color: '#f00',
//             lineStyle: {
//                 color: '#f00'
//             },
//         },
//         axisLabel: {
//             color: '#fff'
//         },
//         splitLine: {
//             show: false
//         },
//         boundaryGap: false,
//         data: area,
//
//     }],
//
//     yAxis: [
//          {
//          name: '数量',
//         nameTextStyle: {
//             color: "#7ec7ff",
//             fontSize: '70%',
//             padding: 0,
//         },
//         type: 'value',
//         min: 0,
//         // max: 140,
//         splitNumber: 4,
//         splitLine: {
//             show: true,
//             lineStyle: {
//                 color: 'rgba(255,255,255,0.1)'
//             }
//         },
//         axisLine: {
//             show: true,
//         },
//         axisLabel: {
//             show: false,
//             margin: 20,
//             textStyle: {
//                 color: '#d1e6eb',
//
//             },
//         },
//         axisTick: {
//             show: false,
//         },
//     }],
//     series: [
//         {
//             name: price_amount['price_amount_dadukou']['area'],
//             type: 'line',
//             smooth: false, //是否平滑
//             showAllSymbol: true,
//             // symbol: 'image://./static/images/guang-circle.png',
//             symbol: 'circle',
//             symbolSize: 10,
//             lineStyle: {
//                 normal: {
//                     color: "#50b7c1",
//                 },
//             },
//             label: {
//                 show: true,
//                 position: 'top',
//                 textStyle: {
//                     color: '#50b7c1',
//                 }
//             },
//
//             itemStyle: {
//                 color: "#50b7c1",
//                 borderColor: "#fff",
//                 borderWidth: 3,
//                 // shadowColor: 'rgba(0, 0, 0, .3)',
//                 shadowBlur: 0,
//                 shadowOffsetY: 2,
//                 shadowOffsetX: 2,
//             },
//             tooltip: {
//                 show: false
//             },
//             areaStyle: {
//                 normal: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(80,183,193,0.3)'
//                         },
//                         {
//                             offset: 1,
//                             color: 'rgba(80,183,193,0)'
//                         }
//                     ], false),
//                     shadowColor: 'rgba(80,183,193, 0.9)',
//                     shadowBlur: 20
//                 }
//             },
//             data:data_dadukou
//         },
//
//     ]
// };
//
//   // 使用刚指定的配置项和数据显示图表。
//   myChart.setOption(option);
//   window.addEventListener("resize", function () {
//     myChart.resize();
//   });
// })();
// });

//北碚
// $.getJSON('/data/getPrice',function (price_amount,ifsuccess) {
//
// // 折线图定制
// (function () {
// data_beibei=[price_amount['price_amount_beibei']['UnderThirty'],price_amount['price_amount_beibei']['ThirtyToSixty'],
//         price_amount['price_amount_beibei']['SixtyToEigthty'],price_amount['price_amount_beibei']['EightyToHundred'],
//         price_amount['price_amount_beibei']['HundredToHfifty'],price_amount['price_amount_beibei']['HfiftyToTHundred'],
//         price_amount['price_amount_beibei']['AboveTHundred']]
//   // 基于准备好的dom，初始化echarts实例
//   var myChart = echarts.init(document.querySelector(".beibei .chart"));
//
//   option = {
//     backgroundColor: 'transparent',
//
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             lineStyle: {
//                 color: {
//                     type: 'linear',
//                     x: 0,
//                     y: 0,
//                     x2: 0,
//                     y2: 1,
//                     colorStops: [{
//                         offset: 0,
//                         color: 'rgba(0, 255, 233,0)'
//                     }, {
//                         offset: 0.5,
//                         color: 'rgba(255, 255, 255,1)',
//                     }, {
//                         offset: 1,
//                         color: 'rgba(0, 255, 233,0)'
//                     }],
//                     global: false
//                 }
//             },
//         },
//     },
//     legend: {
//         align: "left",
//         right: '5%',
//         top:'1%',
//         type:'plain',
//         textStyle:{
//             color:'#06f0ab',
//             fontSize:'70%'
//         },
//         // icon:'rect',
//         itemGap:12,
//         itemWidth:10,
//         icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
//
//         data: [
//
//             {
//                 name: price_amount['price_amount_beibei']['area']
//             },
//
//         ]
//     },
//     grid: {
//         top: '15%',
//         left: '5%',
//         right: '12%',
//         bottom: '6%',
//         containLabel: true
//     },
//     xAxis: [
//         {
//          name: '区域',
//         nameTextStyle: {
//             color: "#7ec7ff",
//             fontSize: '70%',
//             padding: 10
//         },
//         type: 'category',
//         axisLine: {
//             show: true
//         },
//         splitArea: {
//             // show: true,
//             color: '#f00',
//             lineStyle: {
//                 color: '#f00'
//             },
//         },
//         axisLabel: {
//             color: '#fff'
//         },
//         splitLine: {
//             show: false
//         },
//         boundaryGap: false,
//         data: area,
//
//     }],
//
//     yAxis: [
//          {
//          name: '数量',
//         nameTextStyle: {
//             color: "#7ec7ff",
//             fontSize: '70%',
//             padding: 0,
//         },
//         type: 'value',
//         min: 0,
//         // max: 140,
//         splitNumber: 4,
//         splitLine: {
//             show: true,
//             lineStyle: {
//                 color: 'rgba(255,255,255,0.1)'
//             }
//         },
//         axisLine: {
//             show: true,
//         },
//         axisLabel: {
//             show: false,
//             margin: 20,
//             textStyle: {
//                 color: '#d1e6eb',
//
//             },
//         },
//         axisTick: {
//             show: false,
//         },
//     }],
//     series: [
//
//         {
//             name: price_amount['price_amount_beibei']['area'],
//             type: 'line',
//             smooth: false, //是否平滑
//             showAllSymbol: true,
//             // symbol: 'image://./static/images/guang-circle.png',
//             symbol: 'circle',
//             symbolSize: 10,
//             lineStyle: {
//                 normal: {
//                     color: "#06f0ab",
//                 },
//             },
//             label: {
//                 show: true,
//                 position: 'top',
//                 textStyle: {
//                     color: '#06f0ab',
//                 }
//             },
//
//             itemStyle: {
//                 color: "#06f0ab",
//                 borderColor: "#fff",
//                 borderWidth: 3,
//                 // shadowColor: 'rgba(0, 0, 0, .3)',
//                 shadowBlur: 0,
//                 shadowOffsetY: 2,
//                 shadowOffsetX: 2,
//             },
//             tooltip: {
//                 show: false
//             },
//             areaStyle: {
//                 normal: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(6,240,171,0.3)'
//                         },
//                         {
//                             offset: 1,
//                             color: 'rgba(6,240,171,0)'
//                         }
//                     ], false),
//                     shadowColor: 'rgba(6,240,171, 0.9)',
//                     shadowBlur: 20
//                 }
//             },
//             data: data_beibei
//         },
//
//     ]
// };
//
//   // 使用刚指定的配置项和数据显示图表。
//   myChart.setOption(option);
//   window.addEventListener("resize", function () {
//     myChart.resize();
//   });
// })();
// });




//         //渝中
//          {
//             name: price_amount['price_amount_yuzhong']['area'],
//             type: 'line',
//             smooth: true, //是否平滑
//             showAllSymbol: true,
//             // symbol: 'image://./static/images/guang-circle.png',
//             symbol: 'circle',
//             symbolSize: 10,
//             lineStyle: {
//                 normal: {
//                     color: "#90d7ec",
//                 },
//             },
//             label: {
//                 show: true,
//                 position: 'top',
//                 textStyle: {
//                     color: '#90d7ec',
//                 }
//             },
//
//             itemStyle: {
//                 color: "#90d7ec",
//                 borderColor: "#fff",
//                 borderWidth: 3,
//                 // shadowColor: 'rgba(0, 0, 0, .3)',
//                 shadowBlur: 0,
//                 shadowOffsetY: 2,
//                 shadowOffsetX: 2,
//             },
//             tooltip: {
//                 show: false
//             },
//             areaStyle: {
//                 normal: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(144,215,236,0.3)'
//                         },
//                         {
//                             offset: 1,
//                             color: 'rgba(144,215,236,0)'
//                         }
//                     ], false),
//                     shadowColor: 'rgba(144,215,236, 0.9)',
//                     shadowBlur: 20
//                 }
//             },
//             data: data_yuzhong
//         },
//         //巴南
//          {
//             name: price_amount['price_amount_banan']['area'],
//             type: 'line',
//             smooth: true, //是否平滑
//             showAllSymbol: true,
//             // symbol: 'image://./static/images/guang-circle.png',
//             symbol: 'circle',
//             symbolSize: 10,
//             lineStyle: {
//                 normal: {
//                     color: "#f15a22",
//                 },
//             },
//             label: {
//                 show: true,
//                 position: 'top',
//                 textStyle: {
//                     color: '#f15a22',
//                 }
//             },
//
//             itemStyle: {
//                 color: "#f15a22",
//                 borderColor: "#fff",
//                 borderWidth: 3,
//                 // shadowColor: 'rgba(0, 0, 0, .3)',
//                 shadowBlur: 0,
//                 shadowOffsetY: 2,
//                 shadowOffsetX: 2,
//             },
//             tooltip: {
//                 show: false
//             },
//             areaStyle: {
//                 normal: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(241,90,34,0.3)'
//                         },
//                         {
//                             offset: 1,
//                             color: 'rgba(241,90,34,0)'
//                         }
//                     ], false),
//                     shadowColor: 'rgba(241,90,34, 0.9)',
//                     shadowBlur: 20
//                 }
//             },
//             data: data_banan,
//         },
//         //沙坪坝
//          {
//             name: price_amount['price_amount_shapingba']['area'],
//             type: 'line',
//             smooth: true, //是否平滑
//             showAllSymbol: true,
//             // symbol: 'image://./static/images/guang-circle.png',
//             symbol: 'circle',
//             symbolSize: 10,
//             lineStyle: {
//                 normal: {
//                     color: "#ba8448",
//                 },
//             },
//             label: {
//                 show: true,
//                 position: 'top',
//                 textStyle: {
//                     color: '#ba8448',
//                 }
//             },
//
//             itemStyle: {
//                 color: "#ba8448",
//                 borderColor: "#fff",
//                 borderWidth: 3,
//                 // shadowColor: 'rgba(0, 0, 0, .3)',
//                 shadowBlur: 0,
//                 shadowOffsetY: 2,
//                 shadowOffsetX: 2,
//             },
//             tooltip: {
//                 show: false
//             },
//             areaStyle: {
//                 normal: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(186,132,72,0.3)'
//                         },
//                         {
//                             offset: 1,
//                             color: 'rgba(186,132,72,0)'
//                         }
//                     ], false),
//                     shadowColor: 'rgba(186,132,72, 0.9)',
//                     shadowBlur: 20
//                 }
//             },
//             data: data_shapingba
//         },
//         //九龙坡
//         {
//             name: price_amount['price_amount_jiulongpo']['area'],
//             type: 'line',
//             smooth: true, //是否平滑
//             showAllSymbol: true,
//             // symbol: 'image://./static/images/guang-circle.png',
//             symbol: 'circle',
//             symbolSize: 10,
//             lineStyle: {
//                 normal: {
//                     color: "#ffc20e",
//                 },
//             },
//             label: {
//                 show: true,
//                 position: 'top',
//                 textStyle: {
//                     color: '#ffc20e',
//                 }
//             },
//
//             itemStyle: {
//                 color: "#ffc20e",
//                 borderColor: "#fff",
//                 borderWidth: 3,
//                 // shadowColor: 'rgba(0, 0, 0, .3)',
//                 shadowBlur: 0,
//                 shadowOffsetY: 2,
//                 shadowOffsetX: 2,
//             },
//             tooltip: {
//                 show: false
//             },
//             areaStyle: {
//                 normal: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(295,194,14,0.3)'
//                         },
//                         {
//                             offset: 1,
//                             color: 'rgba(295,194,14,0)'
//                         }
//                     ], false),
//                     shadowColor: 'rgba(295,194,14, 0.9)',
//                     shadowBlur: 20
//                 }
//             },
//             data: data_jiulongpo
//         },
//         //大渡口
//         {
//             name: price_amount['price_amount_dadukou']['area'],
//             type: 'line',
//             smooth: true, //是否平滑
//             showAllSymbol: true,
//             // symbol: 'image://./static/images/guang-circle.png',
//             symbol: 'circle',
//             symbolSize: 10,
//             lineStyle: {
//                 normal: {
//                     color: "#50b7c1",
//                 },
//             },
//             label: {
//                 show: true,
//                 position: 'top',
//                 textStyle: {
//                     color: '#50b7c1',
//                 }
//             },
//
//             itemStyle: {
//                 color: "#50b7c1",
//                 borderColor: "#fff",
//                 borderWidth: 3,
//                 // shadowColor: 'rgba(0, 0, 0, .3)',
//                 shadowBlur: 0,
//                 shadowOffsetY: 2,
//                 shadowOffsetX: 2,
//             },
//             tooltip: {
//                 show: false
//             },
//             areaStyle: {
//                 normal: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(80,183,193,0.3)'
//                         },
//                         {
//                             offset: 1,
//                             color: 'rgba(80,183,193,0)'
//                         }
//                     ], false),
//                     shadowColor: 'rgba(80,183,193, 0.9)',
//                     shadowBlur: 20
//                 }
//             },
//             data:data_dadukou
//         },
//         //北碚
//         {
//             name: price_amount['price_amount_dadukou']['area'],
//             type: 'line',
//             smooth: true, //是否平滑
//             showAllSymbol: true,
//             // symbol: 'image://./static/images/guang-circle.png',
//             symbol: 'circle',
//             symbolSize: 10,
//             lineStyle: {
//                 normal: {
//                     color: "#06f0ab",
//                 },
//             },
//             label: {
//                 show: true,
//                 position: 'top',
//                 textStyle: {
//                     color: '#06f0ab',
//                 }
//             },
//
//             itemStyle: {
//                 color: "#06f0ab",
//                 borderColor: "#fff",
//                 borderWidth: 3,
//                 // shadowColor: 'rgba(0, 0, 0, .3)',
//                 shadowBlur: 0,
//                 shadowOffsetY: 2,
//                 shadowOffsetX: 2,
//             },
//             tooltip: {
//                 show: false
//             },
//             areaStyle: {
//                 normal: {
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(6,240,171,0.3)'
//                         },
//                         {
//                             offset: 1,
//                             color: 'rgba(6,240,171,0)'
//                         }
//                     ], false),
//                     shadowColor: 'rgba(6,240,171, 0.9)',
//                     shadowBlur: 20
//                 }
//             },
//             data: data_beibei
//         },