````html
<el-row>
    <el-col :span="6">
        <ai-statistic v-model="value" icon :options="options" fill="green" label="收入总值">
            <i class="el-icon-s-tools"></i>
        </ai-statistic>
    </el-col>
</el-row>

<script>
    export default {
        data(){
            return{
                value:1000,
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