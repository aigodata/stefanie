<template>
    <div class="layout-header">
        <div class="layout-header-content clearfix">
            <img class="logo" src="../assets/images/logo-theme-chalk.svg" height="34"
                 v-show="$store.getters.theme === 'theme-chalk'">
            <img class="logo" src="../assets/images/logo-theme-mixiaoku.svg" height="34"
                 v-show="$store.getters.theme === 'theme-mixiaoku'">
            <span class="title">Stefanie</span>
            <span class="sub-title">Components组件库<span class="version">{{ version }}</span></span>
            <el-select v-model="category" size="medium"
                       placeholder="请选择分类" clearable @change="changeCategory">
                <el-option
                    v-for="item in categoryList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <ul class="theme-nav clearfix">
                <li class="theme-nav-item" @click="changeTheme('theme-chalk')"
                    :class="{active: $store.getters.theme === 'theme-chalk'}">
                    白垩纪
                </li>
                <li class="theme-nav-item" @click="changeTheme('theme-mixiaoku')"
                    :class="{active: $store.getters.theme === 'theme-mixiaoku'}">
                    日食
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {version} from '../../package.json'

    export default {
        name: 'layout-header',
        computed: {},
        data() {
            return {
                version,
                category: '',
                categoryList: []
            }
        },
        methods: {
            // 切换分类
            changeCategory() {
                this.$store.commit("category", this.category);
            },
            // 切换主题
            changeTheme(theme, isLoad) {
                if (theme === this.$store.getters.theme && !isLoad) return
                this.$store.commit("theme", theme);
                let pathName = location.pathname
                let origin = location.origin
                let paths = this.$route.path.split('/');
                let currentModule = paths[paths.length - 1];
                location.href = `${origin}${pathName}${'?' + 'random=' + Date.now()}#/main/${theme}/${currentModule}`;
            },
        },
        mounted() {
            // 主题
            let theme = this.$store.getters.theme;
            if (!theme) {
                theme = 'theme-chalk';
                this.$store.commit("theme", theme);
            }
            document.body.setAttribute('id', 'body-' + theme)
            // 分类
            this.category = this.$store.getters.category || 'basic';
            console.log(this.$router)
        }
    }
</script>

<style>
    .layout-header {

    }

    .layout-header .layout-header-content {

    }

    /* logo */

    .layout-header .logo {
        margin-left: 15px;
        margin-right: 15px;
        position: relative;
        top: 9px;
    }

    .layout-header .logo img {
        position: relative;
        top: 13px;
    }

    /* 名称 */

    .layout-header .title {
        padding: 0 10px;
        font-size: 20px;
        font-weight: 600;
        line-height: 60px;
    }

    .layout-header .sub-title {
        font-size: 16px;
        color: #333;
        line-height: 60px;
        padding-right: 10px;
    }

    .layout-header .sub-title .version {
        font-size: 14px;
        font-weight: 400;
        padding-left: 5px;
    }

    /* 主题 */
    .layout-header .theme-nav {
        display: inline-block;
        width: 200px;
        float: right;
        height: 100%;
        line-height: 60px;
        background: transparent;
        padding: 0;
        margin: 0;
    }

    .layout-header .theme-nav .theme-nav-item {
        float: left;
        padding: 0 10px;
        cursor: pointer;
    }

    .layout-header .theme-nav .theme-nav-item:hover,
    .layout-header .theme-nav .theme-nav-item.active {
        color: #549ef8;
    }
</style>
