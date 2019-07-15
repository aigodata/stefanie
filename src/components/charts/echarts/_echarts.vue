<template>
  <div class="charts-module" :class="currentTheme">
    <div class="charts-module-content custom-charts" v-show="!isEmptyData"></div>
    <div class="charts-module-empty-content" v-show="isEmptyData">
      <span class="charts-module-no-data">暂无数据</span>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import ElementResizeDetectorMaker from 'element-resize-detector'

export default {
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    config: {
      type: Object,
      default: function () {
        return {}
      }
    },
    theme: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      isEmptyData: false,
      currentTheme: [],
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init();
    })
  },
  methods: {
    // 初始化
    init () {
      // 图表实例校验
      if (!this.chart) {
        let el = this.$el.querySelector(".custom-charts");
        el && (this.chart = echarts.init(el));
      }

      if (!this.chart) { return; }

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
    draw (options) {
        console.log('dddd===',options);
      this.chart.setOption(options || {});
    },
    // 监听窗口大小改变
    resize (width = this.$el.clientWidth, height = this.$el.clientHeight) {
      console.info(width, height)
      this.chart.resize(width, height);
    }
  }
}
</script>