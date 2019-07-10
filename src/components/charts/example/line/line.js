export class ExampleLine {
    constructor(data) {
        this.data = data;
        this.option = {};
    }
    // 初始化
    init() {
        this.setTitle();
        this.setLegend();
        this.setGrid();
        this.setTooltip();
        this.setXAxis();
        this.setYAxis();
        this.setSeries();
    };
    // 配置标题
    setTitle() {
        // 详见 https://echarts.baidu.com/option.html#title  
        this.option.title = {
            text: '我是一个折线图',
            top: '15',
            left: 'center',
            textStyle: {
                color: 'lime'
            }
        }
    };
    // 图例
    setLegend() {
        // 详见 https://echarts.baidu.com/option.html#legend
        let legend = {
            type: 'plain',
            orient: 'horizontal',
            data: []
        };
        this.data.forEach(item => {
            legend.data.push(item.name);
        })
        this.option.legend = legend;
    };
    // 
    setGrid() {
        // 详见 https://echarts.baidu.com/option.html#grid
        this.option.grid = {
            show: true,
            borderWidth: 0,
            backgroundColor: '#fff',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 2
        }
    };
    // 配置提示框
    setTooltip() {
        // 详见 https://www.echartsjs.com/option.html#tooltip
        let _this = this;
        this.option.tooltip = {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            formatter: function (params, ticket, callback) {
                let title = params[0].axisValueLabel || '';
                let labels = '';
                params.forEach(item => {
                    labels += '<div class="tooltip-content">'
                        + '<span class="tooltip-label">' + _this.data[item.seriesIndex].name + '</span>'
                        + '<span class="tooltip-value">' + item.data + '</span>'
                        + '</div>';
                })
                return '<div class="charts-tooltip-container">'
                    + '<span class="tooltip-title">'+ title + '</span>'
                    + labels
                    + '</div>';
            }
        };;
    };
    // 设置X轴数据
    setXAxis() {
        // 详见 https://www.echartsjs.com/option.html#xAxis
        let xAxis = {
            type: 'category',
            data: []
        };
        let t = this.data[0].data;
        t.forEach(item => {
            xAxis.data.push(item.name);
        });
        this.option.xAxis = xAxis;
    };
    // 设置Y轴数据
    setYAxis() {
        // 详见 https://www.echartsjs.com/option.html#yAxis
        let yAxis = {
            type: 'value'
        };
        this.option.yAxis = yAxis;
    };
    // 设置数据
    setSeries() {
        // 详见 https://www.echartsjs.com/option.html#series
        let series = [];

        this.data.forEach(item => {
            let t = {
                type: 'line',
                data: []
            }
            item.data.forEach(childItem => {
                t.data.push(childItem.value);
            });
            series.push(t);
        });

        this.option.series = series;
    };
}