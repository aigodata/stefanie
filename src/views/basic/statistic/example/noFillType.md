````html
<ai-statistic v-model="value" :options="options" icon type="warning" label="收入总值">
    <i class="el-icon-s-tools"></i>
</ai-statistic>
<ai-statistic v-model="value" :options="options" icon type="success" label="收入总值">
    <i class="el-icon-s-tools"></i>
</ai-statistic>
<ai-statistic v-model="value" :options="options" icon type="primary" label="收入总值">
    <i class="el-icon-s-tools"></i>
</ai-statistic>
<ai-statistic v-model="value" :options="options" icon type="error" label="收入总值">
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