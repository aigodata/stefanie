import AIRadio from './basic/radio/radio'
import AIStatistic from './basic/statistic/statistic'
import CustomCharts from './charts/aigo-charts'

const Components = {
    install: function(Vue) {
        Vue.component('ai-radio', AIRadio);
        Vue.component('ai-statistic', AIStatistic);
        Vue.component('Custom-Charts', CustomCharts);
        // Vue.componetn('ai-radio', await import ('./basic/radio/radio')); 实验失败...
    }
}
export default Components;