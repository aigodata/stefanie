<template>
  <!-- 组件示例 -->
  <div class="component-container">
    <span class="component-title">统计模块</span>
    <p class="component-description">用于展示统计数据</p>
    <!-- 示例 -->
    <div class="component-example">
      <span class="component-example-title">基础用法</span>
      <p class="component-example-description">传入数据静态展示</p>
      <div class="component-example-content">
        <!-- 组件使用 -->
        <div class="source">
          <ai-statistics icon="el-icon-upload" data="100" label="资产总值"  />
          <ai-statistics icon="el-icon-upload" data="100" label="资产总值" className="addClass" />
        </div>
        <!-- 代码参考 -->
        <div class="example">
          <markdown-run :mark="exampleMD" highlight-style-file-name="github"></markdown-run>
        </div>
      </div>
    </div>
    <!-- 组件参数说明 -->
    <div class="component-use">
      <markdown-run :mark="useMD"></markdown-run>
    </div>
  </div>
</template>
<script>
import ExampleMD from "!text-loader!./example/example.md";
import UseMD from "!text-loader!./use.md";

export default {
  props: {},
  data() {
    return {
      exampleMD: ExampleMD,
      useMD: UseMD
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>