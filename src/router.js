import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import main from '@/views/main.vue'

// 白垩纪
const chalk = () =>
    import ('./views/theme/theme-chalk.vue')
    // 日食
const mixiaoku = () =>
    import ('./views/theme/theme-mixiaoku.vue')

const EMPTY_VIEW = { template: '<router-view />' };

let children = [{
        path: '/',
        redirect: 'basic'
    },
    {
        path: 'basic',
        component: EMPTY_VIEW,
        meta: { name: '基础组件' },
        children: [{
                path: '/',
                redirect: 'ai-reference-demo'
            },
            {
                path: 'ai-reference-demo',
                meta: { name: '参考示例' },
                component: () =>
                    import ('@/views/basic/ai-reference-demo/index'),
            },
            {
                path: 'statistic',
                meta: { name: 'statistic 统计' },
                component: () =>
                    import ('@/views/basic/statistic/index'),
            },
            {
                path: 'information',
                meta: { name: 'information 信息' },
                component: () =>
                    import ('@/views/basic/information/index'),
            }
        ]
    },
    {
        path: 'chart',
        component: EMPTY_VIEW,
        meta: { name: '图表' },
        children: [{
                path: '/',
                redirect: 'line'
            },
            {
                path: 'line',
                meta: { name: 'line 线形图' },
                component: () =>
                    import ('@/views/charts/line'),
                children: [{
                    path: 'line-a',
                    mata: { name: '线形图-a' },
                    component: () =>
                        import ('@/views/charts/line')
                }]
            },
            {
                path: 'pie',
                meta: { name: 'pie 饼图' },
                component: () =>
                    import ('@/views/charts/pie'),
            },
            {
                path: 'scatter',
                meta: { name: 'scatter 散点图' },
                component: () =>
                    import ('@/views/charts/scatter'),
            }
        ]
    },
    {
        path: 'template',
        component: EMPTY_VIEW,
        meta: { name: '模板' },
    }
]

export default new Router({
    routes: [{
        path: '/',
        meta: { name: '/' },
        component: EMPTY_VIEW,
        children: [{
                path: '/',
                redirect: '/main' // 默认配置成重定向第一个菜单
            },
            {
                path: '/main',
                meta: { name: 'main' },
                component: main,
                children: [{
                        path: '/',
                        redirect: 'theme-chalk'
                    },
                    {
                        path: 'theme-chalk',
                        name: 'theme-chalk',
                        component: chalk,
                        meta: { name: '主题: 白垩纪' },
                        children: children
                    },
                    {
                        path: 'theme-mixiaoku',
                        name: 'theme-mixiaoku',
                        component: mixiaoku,
                        meta: { name: '主题: 日食' },
                        children: children
                    }
                ]
            },
        ]
    }]
});