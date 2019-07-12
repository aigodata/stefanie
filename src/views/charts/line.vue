<template>
    <div class="demo-container">
        <span class="demo-title">Line 折线图</span>
        <span class="demo-description">*****</span>
        <BasicLine :data="data" />
    </div>
</template>
<script>
    import BasicLine from '@/components/charts/line/example'

    export default {
        components: {
            BasicLine
        },
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
