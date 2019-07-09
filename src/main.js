import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Components from 'c'
import markdownRun from './lib/markdown/index';

Vue.use(Components)
Vue.use(markdownRun);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
