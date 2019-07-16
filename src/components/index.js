import AIRadio from './basic/radio/radio'
import AIStatistics from './basic/statistics/statistics'
import CustomCharts from './charts/aigo-charts'

const Components = {
    install: function(Vue) {
        Vue.component('ai-radio', AIRadio);
        Vue.component('ai-statistics', AIStatistics);
        Vue.component('Custom-Charts', CustomCharts);
    }
}
export default Components;