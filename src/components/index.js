import AIRadio from './basic/radio/radio'
import CustomCharts from './charts/aigo-charts'

const Components = {
    install: function(Vue) {
        Vue.component('ai-radio', AIRadio);
        Vue.component('Custom-Charts', CustomCharts);
    }
}
export default Components;
