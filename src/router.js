import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import main from '@/views/main.vue'

const EMPTY_VIEW = { template: '<router-view />' };

export default new Router({
    routes: [
    	{
			path: '/', component: EMPTY_VIEW,
			children: [
				{
					path: '/', redirect: '/main'	// 默认配置成重定向第一个菜单
				},
				{
					path: '/main', meta: {name: 'main'}, component: main,
					children: [
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
				},
			]
		}
    ]
});
