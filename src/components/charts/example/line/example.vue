<script>
    import ParentCharts from 'c/charts/charts';
    import { ExampleLine } from './line.js';

    export default {
        extends: ParentCharts,
        methods: {
            createChart() {
                if (Array.isArray(this.data)) {
                    let line = new ExampleLine(this.data);
                    line.init();
                    this.drawCharts(line.option);
                } else {
                    this.isEmptyData = true;
                }
            },
        }
    }
</script>