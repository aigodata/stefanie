<template>
    <router-view></router-view>
</template>

<script>
    import '~@aigodata/element-theme/lib/theme-mixiaoku/index.css';
    export default {
        name: 'theme-mixiaoku',
        mounted() {
            document.body.setAttribute('id', 'body-theme-mixiaoku')
        }
    }
</script>

<style lang="scss">

</style>
