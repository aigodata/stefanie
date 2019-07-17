<script>
import ParentCharts from './../_echarts';
import { CustomHandle } from './proces.js';

export default {
    extends: ParentCharts,
    methods: {
        // 创建图表对象
        createChart () {
            if (Array.isArray(this.data)) {
                let ch = new CustomHandle(this.data, this.config);
                // 处理图表配置...
                ch.init();
                // 回调父类图表绘制
                this.draw(ch.option);
            } else {
                this.isEmptyData = true;
            }
        },
    }
}
</script>