import Vue from 'vue'
import Vuex from 'vuex'
import localStore from 'store'		// 浏览器存储

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// user: null,							// 登录的用户个人信息
	},
	mutations: {
		// // 用户信息
		// user(state, params) {
		// 	localStore.set('user', params);
		// 	state.user = params;
		// },
	},
	actions: {
		// ModifyState(state, params) {
		// 	commit('ModifyState', params)
		// }
	},
	getters: {
		// // 登录的个人信息
		// user: (state) => {
		// 	return state.user || localStore.get('user')
		// },
	}
})

export default store
