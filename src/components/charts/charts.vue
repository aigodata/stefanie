<template>
    <div class="demo-module" ref="demoChartsModule">
        <div class="demo-module-content demo-component-charts-line" id="echarts-container" v-show="!isEmptyData">
        </div>
        <div class="demo-module-no-data" v-show="isEmptyData">暂无数据</div>
    </div>
</template>
<script>
    import ECharts from 'echarts'

    export default {
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                // 是否存在数据
                isEmptyData: false,
                // echarts实例
                chart: undefined
            }
        },
        mounted() {
            this.initCharts();
        },
        methods: {
            // 实例化图表
            initCharts() {
                if (!this.chart) {
                    let el = document.querySelector('#echarts-container');
                    if (!el) {
                        let d = document.createElement('div');
                        d.id = 'echarts-container';
                        d.className = 'demo-module-content demo-component-charts-line';
                        this.$refs.demoChartsModule.appendChild(d);
                    }
                    // 基于准备好的dom，初始化echarts实例
                    this.chart = ECharts.init(el);
                }

                // 如果初始化echarts实例仍然无效则跳出
                if (!this.chart) {
                    return;
                }
                // 创建图表
                this.createChart();
            },
            // 绘制图表
            drawCharts(option) {
                option && Object.keys(option).length && this.chart.setOption(option);
            },
        }
    }
</script>