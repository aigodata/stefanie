<template>
    <div class="ai-layout-sidebar">
        <div class="ai-layout-sidebar-content">
            <SidebarMenu v-if="navMenus.length" :data="navMenus" :parentPath="category" />
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SidebarMenu from './menu'

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
                navMenus: []
            }
        },
        computed: {
            ...mapGetters([
                'theme',
                'category'
            ])
        },
        watch: {
            category: function(){
                this.init();
            }
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
                this.navMenus = recursiveRoute(this.category, routes);

                function recursiveRoute(p = '', r = []) {
                    if (!r.length) { return []; }
                    let o = [];
                    for (var i = 0; i < r.length; i++) {
                        if (r[i].path == p) {
                            return r[i].children || [];
                        } else {
                            o = recursiveRoute(p, r[i].children || []);
                        }
                    }
                    return o;
                }
            }
        }
    }
</script>