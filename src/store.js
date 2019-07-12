import Vue from 'vue'
import Vuex from 'vuex'
import localStore from 'store'		// 浏览器存储

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		theme: '',			// 主题 theme-chalk  theme-mixiaoku
		category: '',		// 大分类
	},
	mutations: {
		theme(state, params) {
			localStore.set('theme', params);
			state.theme = params;
		},
	},
	actions: {
	},
	getters: {
		theme: (state) => {
			return state.theme || localStore.get('theme') || 'theme-chalk'
		},
	}
})

export default store
