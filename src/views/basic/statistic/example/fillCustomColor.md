````html
<ai-statistic v-model="value" icon :options="options" fill="green" label="收入总值">
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