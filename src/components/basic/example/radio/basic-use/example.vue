<template>
    <div>
        <h2>基础用法</h2>
        <span>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</span>
        <div class="demo-container demo-component-radio">
            <div class="source">
                <!-- <label role="radio">
                    <input type="radio">正确
                </label>
                <label role="radio">
                    <input type="radio">正确
                </label> -->
                <Custom-Radio>欢欢喜喜</Custom-Radio>
            </div>
            <div class="meta">
                <markdown-run :mark="mark" highlight-style-file-name="github" />
            </div>
        </div>
    </div>
</template>
<script>
    import Example from '!text-loader!./example.md'

    export default {
        data() {
            return {
                mark: Example
            }
        }
    }
</script>