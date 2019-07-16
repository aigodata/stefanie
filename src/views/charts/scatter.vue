<template>

  <div class=".ai-charts-container">
    <span class=".ai-charts-title">Echarts</span>
    <span class=".ai-charts-description">*****</span>
    <Custom-Charts type="chartsScatter" :data="data" />

  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]
      ]
    }
  }
}
</script>