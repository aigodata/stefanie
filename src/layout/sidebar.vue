<template>
    <div class="layout-sidebar">
        <ul class="layout-sidebar-content">
            <SidebarMenu v-if="navMenus.length" :data="navMenus" :parentPath="path" />
        </ul>
        <!-- <ul class="layout-sidebar-content">
            <li>
                <span class="menu-item">Example</span>
                <div class="menu-group">
                    <span class="menu-group-title">Demo</span>
                    <ul class="menu-group-menu">
                        <li>
                            <router-link to="/basic/example/radio">Basic Demo</router-link>
                        </li>
                        <li>
                            <router-link to="/chart/example/line">Charts Demo</router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <span class="menu-item">基本组件</span>
            </li>
            <li>
                <span class="menu-item">图表组件</span>
            </li>
            <li>
                <span class="menu-item">模板组件</span>
            </li>
        </ul> -->
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SidebarMenu  from './menu'

    export default {
        props: {
            data: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        data() {
            return {
                theme: 'theme-chalk',
                path: 'basic',
                navMenus: []
            }
        },
        computed: {
            ...mapGetters([
                // 等名字...
            ])
        },
        components: {
            SidebarMenu
        },
        mounted() {
            this.init();
        },
        methods: {
            // 初始化菜单
            init() {
                let routes = this.$router.options.routes || [];
                this.navMenus = recursiveRoute(this.path, routes);

                function recursiveRoute(p = '', r = []) {
                    if (!r.length) { return []; }
                    let o = [];
                    for (var i = 0; i < r.length; i++) {
                        if (r[i].path == p) {
                            return r[i].children;
                        } else {
                            o = recursiveRoute(p, r[i].children);
                        }
                    }
                    return o;
                }
            }
        }
    }
</script>

<style>
    .layout-sidebar {}

    .layout-sidebar-content {}
</style>