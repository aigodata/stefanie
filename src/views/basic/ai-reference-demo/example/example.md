````html
<template>
  <div>
      <ai-reference-demo v-model="radio" label="1">选择一</ai-reference-demo>
      <ai-reference-demo v-model="radio" label="2">选择二</ai-reference-demo>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio: 2
      }
    }
  }
</script>
```
