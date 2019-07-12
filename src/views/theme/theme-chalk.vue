<template>
    <router-view></router-view>
</template>

<script>
    import '~@aigodata/element-theme/lib/theme-chalk/index.css';
    export default {
        name: 'theme-chalk',
        mounted() {
            document.body.setAttribute('id', 'body-theme-chalk')
        }
    }
</script>

<style lang="scss">

</style>

