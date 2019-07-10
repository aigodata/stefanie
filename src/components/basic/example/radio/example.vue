<template>
    <div class="demo-module">
        <span class="demo-module-title">基础用法</span>
        <span class="demo-module-description">由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</span>
        <div class="demo-module-content demo-component-basic-radio">
            <div class="source">
                <Custom-Radio v-model="basicRadio" label="1">选择一</Custom-Radio>
                <Custom-Radio v-model="basicRadio" label="2">选择二</Custom-Radio>
            </div>
            <div class="meta">
                <markdown-run :mark="mark" highlight-style-file-name="github" />
            </div>
        </div>
    </div>
</template>
<script>
    import ParentBasic from 'c/basic/basic';
    import ExampleMD from '!text-loader!./example.md'

    export default {
        extends: ParentBasic,
        data() {
            return {
                mark: ExampleMD,
                basicRadio: 1,
            }
        }
    }
</script>