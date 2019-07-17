````html
<ai-statistic v-model="value" icon :options="options" color="green" label="资产总值">
    <i class="el-icon-s-tools"></i>
</ai-statistic>
  <ai-statistic v-model="value" icon :options="options" color="green" label="资产总值">
    <img src="../../../assets/images/aigo.jpg" />
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