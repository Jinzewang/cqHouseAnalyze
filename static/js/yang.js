$.getJSON("/data/getYang", function (x) {
    (function () {
        var chart_1eefc547c9364e07833d878da1298154 = echarts.init(
            document.getElementById('1eefc547c9364e07833d878da1298154'), 'white', {renderer: 'canvas'});
        var option_1eefc547c9364e07833d878da1298154 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "bar",
            "name": "\u8fd1\u5730\u94c1",
            "legendHoverLink": true,
            "data": [
                111.9,
                88.552,
                139.71,
                0,
                147.5,
                115.058,
                181.206,
                0,
                139.763,
                168.544,
                160.598,
                83.728
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "bar",
            "name": "\u4e0d\u8fd1\u5730\u94c1",
            "legendHoverLink": true,
            "data": [
                109.116,
                111.209,
                181.314,
                42.0,
                104.438,
                160.0,
                184.732,
                78.3,
                169.038,
                251.324,
                216.311,
                84.566
            ],
            "showBackground": false,
            "barMinHeight": 0,
            "barCategoryGap": "20%",
            "barGap": "30%",
            "large": false,
            "largeThreshold": 400,
            "seriesLayoutBy": "column",
            "datasetIndex": 0,
            "clip": true,
            "zlevel": 0,
            "z": 2,
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u8fd1\u5730\u94c1",
                "\u4e0d\u8fd1\u5730\u94c1"
            ],
            "selected": {
                "\u8fd1\u5730\u94c1": true,
                "\u4e0d\u8fd1\u5730\u94c1": true
            },
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "textStyle": {
            color: "rgba(236,231,231,0.5)",
            "fontSize": 14
        },
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5
    },
            grid: {
        top: '15%',
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
    },
    "xAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "show": true,
                "position": "top",
                "rotate": 45,
                "margin": 8,
                "color": "#f3ecec"
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "\u4e5d\u9f99\u5761",
                "\u5317\u789a",
                "\u5357\u5cb8",
                "\u57ce\u5e02\u65b0\u533a",
                "\u5927\u6e21\u53e3",
                "\u5df4\u5357",
                "\u6c5f\u5317",
                "\u6c5f\u6d25",
                "\u6c99\u576a\u575d",
                "\u6e1d\u4e2d",
                "\u6e1d\u5317",
                "\u74a7\u5c71"
            ]
        }
    ],
    "yAxis": [
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLabel": {
                "color": "#f3f0f0"
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "show": true,
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }
    ],
    "title": [
        {
            "text": "",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_1eefc547c9364e07833d878da1298154.setOption(option_1eefc547c9364e07833d878da1298154);
        // hart_1eefc547c9364e07833d878da1298154.setOption(option_1eefc547c9364e07833d878da1298154);
    })();
    (function () {
        var chart_e285892258854411ac159a5ad7911124 = echarts.init(
            document.getElementById('e285892258854411ac159a5ad7911124'), 'white', {renderer: 'canvas'});
        var option_e285892258854411ac159a5ad7911124 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597"
    ],
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\u65e0\u7535\u68af",
                    "value": 8108
                },
                {
                    "name": "\u6709\u7535\u68af",
                    "value": 861
                }
            ],
            "radius": [
                "30%",
                "75%"
            ],
            "center": [
                "40%",
                "60%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "color": "#ffffff"
            }
        }
    ],
    "legend": [
        {
            "textStyle": {
                color: "rgba(250,250,250,1)",
                "fontSize": 14,
                "right": "4%"
            },
            "data": [
                "\u65e0\u7535\u68af",
                "\u6709\u7535\u68af"
            ],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },

        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "borderWidth": 0,
        "padding": 5
    },
    "title": [
        {
            "text": "",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        chart_e285892258854411ac159a5ad7911124.setOption(option_e285892258854411ac159a5ad7911124);
    })();
})