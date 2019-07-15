import CustomRadio from './basic/radio/radio'
import CustomCharts from './charts/aigo-charts'

const Components = {
    install: function(Vue) {
        Vue.component('Custom-Radio', CustomRadio);
        Vue.component('Custom-Charts', CustomCharts);
    }
}
export default Components;
