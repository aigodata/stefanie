export class CustomHandle {
    constructor(data, config) {
        this.data = data || [];
        this.config = config || {};
        this.option = {};
    };
    // 初始化
    init() {
        this.setTitle();
        this.setXAxis();
        this.setYAxis();
        this.setSeries();
        console.log(this.option);
    };
    // 配置标题
    setTitle() {
        // 详见 https://echarts.baidu.com/option.html#title
        let title = {
            text: '散点图',
            top: '15',
            left: 'center',
            textStyle: {
                color: '#ccc'
            }
        };
        this.option.title = Object.assign(title, this.config.title || {});
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
        this.option.xAxis = {};
    };
    // 设置Y轴数据
    setYAxis() {
        // 详见 https://www.echartsjs.com/option.html#yAxis
        let yAxis = {
            type: 'value'
        };
        this.option.yAxis = {};
    };
    // 设置数据
    setSeries() {
        // 详见 https://www.echartsjs.com/option.html#series
        let series = [];

        this.data.forEach(item => {
            let t = {
                type: 'scatter',
                symbolSize: 20,
            };

            Object.assign(t, this.config.series || {});
            t.name = item.name;
            t.data = [];
            item.data.forEach(childItem => {
                t.data.push(childItem.value);
            });
            series.push(t);
        });
        this.option.series = series;
    };
}