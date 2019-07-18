````html
<el-row>
    <el-col :span="6">
        <ai-statistic v-model="value" :options="options" theme='theme-mixiaoku' fill icon type="warning" label="收入总值">
            <i class="el-icon-s-tools"></i>
        </ai-statistic>
    </el-col>
    <el-col :span="6">
        <ai-statistic v-model="value" :options="options" fill icon type="success" label="收入总值">
            <i class="el-icon-s-tools"></i>
        </ai-statistic>
    </el-col>
    <el-col :span="6">
        <ai-statistic v-model="value" :options="options" fill icon type="primary" label="收入总值">
            <i class="el-icon-s-tools"></i>
        </ai-statistic>
    </el-col>
    <el-col :span="6">
        <ai-statistic v-model="value" :options="options" fill icon type="error" label="收入总值">
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
					unit: '元',
                }
            }
        }
    }
</script>
````