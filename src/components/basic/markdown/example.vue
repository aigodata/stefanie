<template>
    <div>
        <markdown-run :mark="content" highlight-style-file-name="github" />
    </div>
</template>
<script>
    import AA from '!text-loader!./example.md'

    export default {
        data() {
            return {
                content: '',
            }
        },
        mounted() {
            console.info('AA ==>', AA)
            this.content = AA;
        }
    }
</script>