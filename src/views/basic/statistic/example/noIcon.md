````html
<ai-statistic v-model="value" :options="options" color="green" label="资产总值"> </ai-statistic>

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