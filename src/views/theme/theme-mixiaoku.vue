<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'theme-mixiaoku',
    mounted() {
      document.body.setAttribute('id', 'body-theme-mixiaoku')
    }
  }
</script>

<style lang="scss">
  // @import '../../lib/theme-mixiaoku/index.scss';
</style>
