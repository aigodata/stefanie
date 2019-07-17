````html
<ai-statistic v-model="value" horizonta :options="options" icon fill="red" label="收入总值">
    <i class="el-icon-s-tools"></i>
</ai-statistic>
<ai-statistic v-model="value" horizonta :options="options" icon fill label="收入总值">
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