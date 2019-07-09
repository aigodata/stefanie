import Vue from 'vue'
import Router from 'vue-router'

import App from './App'

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
                                name: 'component-radio',
                                component: () => import('./views/basic/example/radio'),
                            }
                        ]
                    }
                ]
            },
            {
                path: 'chart',
                component: EMPTY_VIEW,
            },
            {
                path: 'template',
                component: EMPTY_VIEW,
            }
        ]
    }]
});