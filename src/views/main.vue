<template>
    <div id="app">
        <!-- 头部 -->
        <layout-header></layout-header>
        <div class="layout-container">
            <!-- 侧边栏 -->
            <layout-sidebar></layout-sidebar>
            <div class="app-content">
                <!-- 面包屑 -->
                <layout-breadcrumb></layout-breadcrumb>
                <!-- 页面 -->
                <div class="layout-content"><router-view></router-view></div>
            </div>
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
            sidebarShow() {
                return this.$store.state.sidebarShow
            },
            user() {
                let user = this.localStore.get("user") || this.$store.state.user;
                return user || {}
            },
            space() {
                if (!this.sidebarShow) {
                    return 0;
                }
                return this.expand ? '200px' : '50px'
            },
            permission() {
                let permission = this.localStore.get("permission") || this.$store.state.permission;
                return permission || {}
            }
        },
        data() {
            return {
                expand: true,
            }
        },
        methods: {
            setExpand(expand) {
                this.expand = expand;
            }
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
    }

    #app .layout-sidebar {
        width: 200px;
        background: linear-gradient(90deg, RGBA(16, 84, 156, 1) 50%, RGBA(29, 95, 166, 1));
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 2;
        transition: all 0.15s ease;
    }

    #app .layout-content {
        position: relative;
        height: 100%;
        background: #f8fafc;
        z-index: 1;
        overflow: auto;
        transition: all 0.15s ease;
        padding-left: 200px;
    }
</style>

