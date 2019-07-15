<template>
    <component :is="currentComponent" :data="data" :config="config" :theme="theme"></component>
</template>
<script>
    import Charts_Line from './echarts/line/line'
    import Charts_Bar from './echarts/bar/bar'

    // 动态组件大集合
    const CUSTOM_COMPONENTS = {
        chartsLine: Charts_Line,
        chartsBar: Charts_Bar
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
<style>
    .layout-container .layout-content {}

    .layout-container .layout-content .charts-container {
        width: 100%;
        height: 100%;
    }

    .layout-container .layout-content .charts-container .charts-title {
        display: block;
    }

    .layout-container .layout-content .charts-container .charts-description {
        display: block;
    }

    .layout-container .layout-content .charts-container .charts-module {
        height: 100%;
    }

    .layout-container .layout-content .charts-container .charts-module-content {
        width: 100%;
        height: 100%;
    }

    .layout-container .layout-content .charts-container .charts-module-empty-content {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .layout-container .layout-content .charts-container .charts-module-empty-content .charts-module-no-data {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>