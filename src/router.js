import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import main from '@/views/main.vue'

// 白垩纪
const chalk = () => import('./views/theme/theme-chalk.vue')
// 日食
const mixiaoku = () => import('./views/theme/theme-mixiaoku.vue')

const EMPTY_VIEW = { template: '<router-view />' };

let children = [
	{
		path: '/', redirect: 'basic'
	},
	{
		path: 'basic',
		component: EMPTY_VIEW,
		children: [
			{
				path: 'radio', meta: {name: '单选框'},
				component: () => import('@/views/basic/radio'),
			}
		]
	},
	{
		path: 'chart',
		component: EMPTY_VIEW,
		children: [
			{
				path: 'line', meta: {name: '线形图'},
				component: () => import('@/views/charts/line'),
			}
		]
	},
	{
		path: 'template',
		component: EMPTY_VIEW,
	}
]

export default new Router({
    routes: [
    	{
			path: '/', meta: {name: '/'},  component: EMPTY_VIEW,
			children: [
				{
					path: '/', redirect: '/main'	// 默认配置成重定向第一个菜单
				},
				{
					path: '/main', meta: {name: 'main'}, component: main,
					children: [
						{
							path: '/', redirect: 'theme-chalk'
						},
						{
							path: 'theme-chalk', name: 'theme-chalk', component: chalk, meta: {name: '主题: 白垩纪'},
							children: children
						},
						{
							path: 'theme-mixiaoku', name: 'theme-mixiaoku', component: mixiaoku, meta: {name: '主题: 日食'},
							children: children
						}
					]
				},
			]
		}
    ]
});
