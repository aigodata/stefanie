````html
<el-row>
    <el-col :span="6">
        <ai-statistic v-model="value" :options="options" color="green" label="资产总值">
            <i class="el-icon-s-tools"></i>
        </ai-statistic>
    </el-col>
</el-row>

<script>
    export default {
        data(){
            return{
                options:{
                    value:1000,
					unit: '元',
                }
            }
        }
    }
</script>
````