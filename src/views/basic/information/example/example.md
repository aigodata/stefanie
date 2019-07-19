````html
<el-row>
    <el-row>
        <el-col :span="6">
            <ai-information :options="options"></ai-information>
        </el-col>
        <el-col :span="6">
            <ai-information :options="options2"></ai-information>
        </el-col>
        <el-col :span="6">
            <ai-information :options="options2" theme="theme-mixiaoku"></ai-information>
        </el-col>
    </el-row>
</el-row>

<script>
    export default {
        data(){
            return{
                options: {
					title: 'XX合同信息展示',
					data: [
						{ title: '合同金额', value: 8000, unit:'元' },
						{ title: '合同余额', value: 100,unit:'元' },
					]
                },
                options2: {
					title: '奖学金',
					data: []
				}
            }
        }
    }
</script>
````