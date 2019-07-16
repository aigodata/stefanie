export class CustomHandle {
    constructor(data, config) {
            this.data = data || [];
            this.config = config || {};
            this.option = {};
        }
        // 初始化
    init() {

    };
    // 配置标题
    setTitle() {
        // 详见 https://echarts.baidu.com/option.html#title
        let title = {
            text: '是个散点',
            left: 'center',
            top: 15,
            textStyle: {
                color: '#ccc'
            }
        };
        this.option.title = Object.assign(title, this.config.title || {});
    };
    // 图例
    setLegend() {
        // 详见 https://echarts.baidu.com/option.html#legend
        let legend = {
            orient: 'vertical',
            x: 'left',
            data: []
        };
        this.data.forEach(item => {
            legend.data.push(item.name);
        })
        this.option.legend = legend;
    };
    setVisualMap() {
        let visualMap = {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        };
        this.option.visualMap = visualMap;
    };
    setGrid() {
        // 详见 https://echarts.baidu.com/option.html#grid
        let grid = {
            show: true,
            borderWidth: 0,
            backgroundColor: '#fff',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 2
        };
        this.option.grid = Object.assign(grid, this.config.grid || {});
    };
    // 配置提示框
    setTooltip() {
        // 详见 https://www.echartsjs.com/option.html#tooltip
        let _this = this;
        this.option.tooltip = {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        };;
    };
    // 设置数据
    setSeries() {
        // 详见 https://www.echartsjs.com/option.html#series
        let series = [];
        this.data.forEach(item => {
            let t = {
                type: 'scatter',
            };
            Object.assign(t, this.config.series || {});
            t.name = item.name;
            t.data = [];
            item.data.forEach(childItem => {
                t.data.push(childItem);
            });
            series.push(t);
        });
        this.option.series = series;
    };
}