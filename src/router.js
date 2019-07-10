import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const EMPTY_VIEW = { template: '<router-view />' };

export default new Router({
    routes: [{
        path: '/',
        component: EMPTY_VIEW,
        children: [
            {
                path: 'basic',
                component: EMPTY_VIEW,
                children: [
                    {
                        path: 'example',
                        component: EMPTY_VIEW,
                        children: [
                            {
                                path: 'radio',
                                component: () => import('./views/basic/example/radio'),
                            }
                        ]
                    }
                ]
            },
            {
                path: 'chart',
                component: EMPTY_VIEW,
                children: [
                    {
                        path: 'example',
                        component: EMPTY_VIEW,
                        children: [
                            {
                                path: 'line',
                                component: () => import('./views/charts/example/line'),
                            }
                        ]
                    }
                ]
            },
            {
                path: 'template',
                component: EMPTY_VIEW,
            }
        ]
    }]
});