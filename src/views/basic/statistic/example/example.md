````html
<template>
  <div>
    <ai-statistic v-model="value" :options="options" label="资产总值">
        <i class="el-icon-s-tools"></i>
    </ai-statistic>
    <ai-statistic v-model="value" :options="options2" label="收入总值">
        <img src="../../../assets/images/logo-theme-chalk.svg" />
    </ai-statistic>
    <!-- 多个统计数字 -->
    <div>
        <ai-statistic v-for="item in statisticArray" v-model="item.value" :options="item.options" :label="item.label" :key="item.key">
            <i class="el-icon-s-tools"></i>
        </ai-statistic>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 100,
        options: {
            customClass: 'addClass',
            unit: '元'
        },
        options2:{
            customClass: '',
            unit: '元'
        },
        statisticArray: [
            { label: '资产总值', options: { customClass: '', unit: '元' }, value: 100, key: 1 },
            { label: '收入总值', options: { customClass: '', unit: '元' }, value: 100, key: 2 },
            { label: '收入总值', options: { customClass: '', unit: '元' }, value: 10, key: 3 },
            { label: '资产总值', options: { customClass: '', unit: '元' }, value: 0, key: 4 },
        ]
      };
    }
  }
</script>
```