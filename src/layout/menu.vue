<template>
    <ul>
        <template v-for="item in data">
            <li @click="handleRouteChange($event)" :data-router="parentPath + '/' + item.path">{{ item.meta.name }}</li>
            <SidebarMenu v-if='Array.isArray(item.children)' :data="item.children" :parentPath="parentPath + '/' + item.path"/>
        </template>
    </ul>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'SidebarMenu',
        props: {
            data: {
                type: Array,
                default: []
            },
            parentPath: {
                type: String,
                default: ''
            }
        },
        computed: {
            ...mapGetters([
                'theme'
            ])
        },
        methods: {
            // 切换菜单
            handleRouteChange(event) {
                this.$router.push(`/main/${this.theme}/${event.target.getAttribute('data-router')}`);
            }
        }
    }
</script>