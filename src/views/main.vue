<template>
    <div id="app">
        <!-- 头部 -->
        <layout-header></layout-header>
        <!-- 侧边栏 -->
        <layout-sidebar></layout-sidebar>
        <div class="layout-container">
            <!-- 面包屑 -->
            <layout-breadcrumb></layout-breadcrumb>
            <!-- 页面 -->
            <div class="layout-content"><router-view></router-view></div>
        </div>
    </div>
</template>

<script>
    import layoutHeader from '@/layout/header.vue'
    import layoutContent from '@/layout/content.vue'
    import layoutSidebar from '@/layout/sidebar.vue'
    import layoutBreadcrumb from '@/layout/breadcrumb.vue'

    export default {
        name: 'app',
        components: {
            layoutHeader,
            layoutContent,
            layoutSidebar,
            layoutBreadcrumb
        },
        computed: {
        },
        data() {
            return {
            }
        },
        methods: {
        },
        mounted() {
        }
    }
</script>

<style>
    #app {
        height: 100%;
        position: relative;
    }

    #app .layout-header {
        position: relative;
        width: 100%;
        height: 60px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        z-index: 3;
    }

    #app .layout-container {
        height: calc(100% - 60px);
        position: relative;
        padding-left: 200px;
    }

    #app .layout-sidebar {
        width: 200px;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 2;
        transition: all 0.15s ease;
        padding-top: 60px;
        border-right: 1px solid #e2e2e2;
    }

    #app .layout-content {
        position: absolute;
        top: 50px;
        bottom: 0;
        left: 200px;
        right: 0;
        overflow: auto;
        padding: 0 0 0 20px;
    }
</style>

