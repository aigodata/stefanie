<template>
  <!-- 统计展示 -->
  <div class="ai-statistics" :class="className">
    <div class="ai-icon">
      <i :class="icon"></i>
    </div>
    <div class="ai-label">
      <span>{{label}}</span>
    </div>
    <div class="ai-data">
      <span>{{data}}</span>
    </div>
  </div>
</template>
<script>
import parent from "@/components/basic/basic";

export default {
  extends: parent,
  name: "ai-statistics",
  props: {
    label: {
      type: [String, Number],
      default: "统计"
    },
    data: {
      type: [String, Number],
      default: 0
    },
    icon: {
      type: [String],
      default: "el-icon-info"
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  // 组件方法实例
  methods: {},
  // DOM渲染完毕
  mounted() {},
  // 组件销毁
  destroyed() {}
};
</script>
<style>

.ai-statistics {
  min-width: 200px;
  height: 100px;
  position: relative;
  display: inline-block;
  border: 1px solid #ccc;
}
.ai-statistics .ai-icon {
  width: 50%;
  float: left;
  height: 100%;
  position: relative;
}
.ai-statistics .ai-icon i {
  width: 50%;
  height: 50%;
  border: 2px solid rgba(0, 0, 0, 0.4);
  position: absolute;
  margin: auto;
  text-align: center;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: red;
  font-size: 30px;
}
.ai-statistics .ai-icon i::before {
  margin: auto;
  position: absolute;
  display: inline-block;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.ai-statistics .ai-label {
  position: relative;
  height: 50%;
  width: 50%;
  float: right;
}
.ai-statistics .ai-label span {
  position: absolute;
  left: 0;
  bottom: 10px;
}
.ai-statistics .ai-data {
  float: right;
  font-size: 30px;
  width: 50%;
  height: 50%;
}
.addClass{
  width:300px;height:150px;
}
/**
    * -------------------  白垩纪 主题 样式
    */
.ai-statistics .theme-chalk {
}

/**
    * -------------------  日食 主题 样式
    */
.ai-statistics .theme-mixiaoku {
}
</style>