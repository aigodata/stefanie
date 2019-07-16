````html
<template>
  <div>
      <ai-radio v-model="radio" label="1">选择一</ai-radio>
      <ai-radio v-model="radio" label="2">选择二</ai-radio>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio: 1
      };
    }
  }
</script>
```