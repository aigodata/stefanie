<template>
    <!--
        动态组件
            这个组件的意义很大, 可以动态灵活的切换组件, 不只是图表, 组件也需要一起切换
    -->
    <component :is="currentComponent" :data="data" :config="config" :theme="theme"></component>
</template>
<script>
    import Charts_Line from './echarts/line/line'
    import Charts_Bar from './echarts/bar/bar'
    import Charts_Pie from './echarts/pie/pie'
    import Charts_Scatter from './echarts/scatter/scatter'

    // 动态组件大集合
    const CUSTOM_COMPONENTS = {
        chartsLine: Charts_Line,
        chartsBar: Charts_Bar,
        chartsPie: Charts_Pie,
        chartsScatter: Charts_Scatter
    };

    export default {
        props: {
            type: {
                type: String,
                default: ''
            },
            data: {
                type: Array,
                default: function () {
                    return []
                }
            },
            theme: {
                type: String,
                default: 'mixiaolku'
            },
            config: {
                type: Object,
                default: function () {
                    return {}
                }
            }
        },
        data() {
            return {
                currentComponent: ''
            }
        },
        mounted() {
            // 配置自定义组件加载
            this.currentComponent = CUSTOM_COMPONENTS[this.type] || '';
        }
    }
</script>
