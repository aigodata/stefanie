<template>
    <div id="app">
        <div class="page-header-container">
            <CustomHeader />
        </div>
        <div class="page-main-container">
            <!-- 左侧菜单 -->
            <Menu />
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomHeader from 'c/layout/header';
    import Menu from 'c/layout/menu';

    export default {
        name: 'app',
        components: {
            CustomHeader,
            Menu
        }
    }
</script>