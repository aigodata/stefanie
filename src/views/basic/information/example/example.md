````html
<el-row>
    	<el-row>
            <el-col :span="6">
                <ai-information :options="options"></ai-information>
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
						{ title: '合同金额', value: 8000, },
						{ title: '合同余额', value: 100, },
					]
				},
            }
        }
    }
</script>
````