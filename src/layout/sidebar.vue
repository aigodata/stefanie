<template>
    <div class="layout-sidebar">
        <ul class="layout-sidebar-content">
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
        </ul>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .layout-sidebar {

    }

    .layout-sidebar-content {

    }
</style>
