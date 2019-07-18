````html
<el-row>
    <el-col :span="6">
        <ai-statistic v-model="value" icon :options="options" color="green" label="资产总值">
            <i class="el-icon-s-tools"></i>
        </ai-statistic>
    </el-col>
    <el-col :span="6">
        <ai-statistic v-model="value" icon :options="options" color="green" label="资产总值">
            <img src="../../../assets/images/aigo.jpg" />
        </ai-statistic>
    </el-col>
</el-row>
<script>
    export default {
        data(){
            return{
                value:1000,
                options:{
					unit: '元',
					isSymbol: ',',
                }
            }
        }
    }
</script>
````