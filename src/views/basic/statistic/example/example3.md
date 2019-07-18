````html
<el-row>
    <el-col :span="6">
        <ai-statistic v-model="value" icon :options="options" fill label="收入总值">
            <i class="el-icon-s-tools"></i>
        </ai-statistic>
    </el-col>
</el-row>

<script>
    export default {
        data(){
            return{
                value:1000,
                options: {
                    unit: '元',
                    iconBorderSize: '6',
                    iconBorderColor: 'red',
                    iconBorderType: 'solid',
                    iconColor: 'red',
                    iconBGColor: 'green',
                    iconSize: '40',
                    titleFontSize: '18',
                    titleFontColor: '#000',
                    valueFontSize: '40',
                    valueFontColor: 'lime'
                }
            }
        }
    }
</script>
````