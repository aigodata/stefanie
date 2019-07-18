<template>
    <div class="ai-chart" :class="theme" v-loading="loading">
        <!-- 图表的加载位置 -->
        <div class="ai-chart-content" ref="ai-chart-content" v-show="state === 'running'"></div>
        <!-- 状态机显示 | 初始 | 加载错误 | 空数据 -->
        <div class="ai-charts-placeholder" v-show="state !== 'runnong'">
            <!-- 预留空图标占位 -->
            <div class="ai-charts-placeholder-picture">
                <slot></slot>
            </div>
            <span class="ai-charts-placeholder-text">{{ stateMachine[state] }}</span>
        </div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    import ElementResizeDetectorMaker from 'element-resize-detector'

    export default {
        props: {
            data: {
                type: [Array, Object],
                default: function () {
                    return []
                }
            },
            theme: {
                type: String,
                default: 'theme-chalk'
            },
        },
        data() {
            return {
                // 状态机
                stateMachine: {
                    init: '加载中',
                    running: '正常加载',
                    error: '加载失败',
                    empty: '暂无数据'
                },
                // 当前状态
                state: 'init',
                loading: false,
                config: {
                    // 是否启用loading
                    enableLoading: false
                }
            }
        },
        methods: {
            // 初始化
            init() {
                // 图表实例校验
                if (!this.chart) {
                    let el = this.$refs.aiCustomCharts;
                    console.log(el);
                    el && (this.chart = echarts.init(el));
                }

                if (!this.chart) {
                    return;
                }

                // 配置自定义主题
                this.currentTheme = [`theme-${this.theme}`];

                // this.resize();
                // 创建图表对象
                this.createChart();
                // 自动监听el的resize插件
                let elementResizeDetector = ElementResizeDetectorMaker({
                    strategy: 'scroll',  // 监听触发策略
                    callOnAdd: false     // 刚添加的时候是否触发, 默认为true
                });
                // 监听元素的调整尺寸事件
                elementResizeDetector.listenTo(this.$el, () => {
                    // 并自动修改元素的尺寸
                    this.resize(this.$el.clientWidth, this.$el.clientHeight)
                });
            },
            // 图表绘制
            draw(options) {
                this.chart.setOption(options || {});
            },
            // 监听窗口大小改变
            resize(width = this.$el.clientWidth, height = this.$el.clientHeight) {
                this.chart.resize(width, height);
            }
        },
        mounted() {
            this.init();
        },
    }
</script>

<style scoped>
    .ai-chart {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .ai-chart .ai-chart-content {
        width: 100%;
        height: 100%;
    }

    .ai-chart .ai-charts-placeholder {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .ai-chart.theme-chalk .ai-charts-placeholder .ai-charts-placeholder-picture {

    }

    /* 白垩纪 主题 样式 */
    .ai-chart.theme-chalk {
    }
    .ai-chart.theme-chalk .ai-charts-placeholder .ai-charts-placeholder-text {
        color: #909399;
        font-size: 12px;
    }

    /* 日食 主题 样式 */
    .ai-chart.theme-mixiaoku {

        /* 关于颜色的样式写在这里 */
    }
</style>
