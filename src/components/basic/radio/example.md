````html
<template>
  <div>
    <Custom-Radio v-model="basicRadio" label="1">选择一</Custom-Radio>
    <Custom-Radio v-model="basicRadio" label="2">选择二</Custom-Radio>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        basicRadio: 2
      };
    }
  }
</script>
```