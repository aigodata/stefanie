<template>
    <!-- 单选框组件示例 -->
    <div class="compontent-container">
        <span class="compontent-title">Radio 单选框</span>
        <span class="compontent-description">在一组备选项中进行单选</span>
        <!-- 示例 -->
        <div class="compontent-example">
            <span class="compontent-example-title">基础用法</span>
            <span class="compontent-example-description">由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</span>
            <div class="compontent-example-content compontent-component-basic-radio">
                <!-- 组件使用 -->
                <div class="source">
                    <ai-radio v-model="radio" label="1">选择一</ai-radio>
                    <ai-radio v-model="radio" label="2">选择二</ai-radio>
                </div>
                <!-- 代码参考 -->
                <div class="example">
                    <markdown-run :mark="exampleMD" highlight-style-file-name="github"></markdown-run>
                </div>
            </div>
        </div>
        <!-- 组件参数说明 -->
        <div class="compontent-use">
            <markdown-run :mark="useMD"></markdown-run>
        </div>
    </div>
</template>
<script>
    import ExampleMD from '!text-loader!./example/example.md'
    import UseMD from '!text-loader!./use.md'

    export default {
        props: {

        },
        data() {
            return {
                exampleMD: ExampleMD,
                useMD: UseMD,
                radio: 1,
            }
        },
        computed: {

        },
        watch: {

        },
        methods: {

        },
        mounted() {

        }
    }
</script>