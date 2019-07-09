<template>
    <div id="app">
        <div class="page-header-container">顶部header</div>
        <div class="page-main-container">
            <div class="page-nav">
                左侧菜单
            </div>
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    
    .page-header-container {
        font-weight: bold;
    }

    .page-main-container {
    }

    .page-main-container >.page-nav {
        display: inline-block;
        vertical-align: top;
        width: 15%;
    }

    .page-main-container >.page-content {
        display: inline-block;
        vertical-align: top;
        width: 84%;
        margin-left: 1%;   
    }
</style>