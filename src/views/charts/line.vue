<template>
    <div class="charts-container">
        <span class="charts-title">Echarts</span>
        <span class="charts-description">*****</span>
        <Custom-Charts type="chartsLine" :data="data"  />

        <!-- 切换图表 -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: [
                    {
                        "name": "张三",
                        "data": [
                            {
                                "name": "2019-01",
                                "value": 300
                            },
                            {
                                "name": "2019-02",
                                "value": 100
                            },
                            {
                                "name": "2019-03",
                                "value": 200
                            },
                            {
                                "name": "2019-04",
                                "value": 400
                            }
                        ]
                    },
                    {
                        "name": "李四",
                        "data": [
                            {
                                "name": "2019-01",
                                "value": 111
                            },
                            {
                                "name": "2019-02",
                                "value": 222
                            },
                            {
                                "name": "2019-03",
                                "value": 333
                            },
                            {
                                "name": "2019-04",
                                "value": 444
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
