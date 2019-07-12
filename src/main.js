import Vue from 'vue'
import App from './App.vue'
import router from './router'
import localStore from 'store'								// 浏览器存储
import store from './store.js' 								// vuex  全局变量
import Components from './components'
import markdownRun from './lib/markdown/index';

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import '@/assets/styles/reset.css'							// 重置样式
import '@/assets/styles/media.css'							// 媒体查询
import '@/assets/fonts/iconfont.css'						// 图标字体
import '@/assets/fonts/iconfont.js'							// 图标字体
import 'element-ui/lib/theme-chalk/index.css' 				// element-ui
import '@/assets/styles/theme.css'							// 定制element-ui
import '@/assets/styles/main.css'							// 主样式文件
// import '@/assets/global.css'

Vue.use(ElementUI, {locale, size: 'small'});

Vue.use(Components)
Vue.use(markdownRun)

// 添加实例方法, 使用本地存储插件
Vue.prototype.$localStore = localStore;

Vue.config.productionTip = false

let app = new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');

export default app;
