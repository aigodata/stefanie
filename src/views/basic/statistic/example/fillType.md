````html
<ai-statistic v-model="value" :options="options" icon fill type="warning" label="收入总值">
    <i class="el-icon-s-tools"></i>
</ai-statistic>
<ai-statistic v-model="value" :options="options" icon fill type="success" label="收入总值">
    <i class="el-icon-s-tools"></i>
</ai-statistic>
<ai-statistic v-model="value" :options="options" icon fill type="primary" label="收入总值">
    <i class="el-icon-s-tools"></i>
</ai-statistic>
<ai-statistic v-model="value" :options="options" icon fill type="error" label="收入总值">
    <i class="el-icon-s-tools"></i>
</ai-statistic>

<script>
    export default {
        data(){
            return{
                options:{
                    customClass: '',
					unit: '元',
					isSymbol: ',',
                }
            }
        }
    }
</script>
````