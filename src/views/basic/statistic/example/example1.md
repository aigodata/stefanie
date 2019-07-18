````html
<el-row>
    <el-col :span="6">
        <ai-statistic v-model="value" :options="options" fill label="资产总值">
            <i class="el-icon-s-tools"></i>
        </ai-statistic>
    </el-col>
</el-row>

<script>
    export default {
        data(){
            return{
                value: 1000,
				options: {
					unit: '元',
				},
            }
        }
    }
</script>
````