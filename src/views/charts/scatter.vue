<template>

  <div class="ai-charts-container">
    <span class="ai-charts-title">Echarts</span>
    <span class="ai-charts-description">*****</span>
    <Custom-Charts type="chartsScatter" :data="data" />

  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          name: '散点图1',
          data: [
            { value: [10.0, 8.04], name: 'a' },
            { value: [1.0, 9.04], name: 'b' },
          ]
        }
      ]
    }
  }
}
</script>