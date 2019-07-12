````html vue-run
<template>
  <button class="btn btn-blue" @click="test">打开console，点击看看效果</button>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      test() {
        console.log("你点击了按钮");
      }
    }
  }
</script>
```