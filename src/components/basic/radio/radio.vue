<template>
    <!-- 组件名称 -->
    <label role="radio" @keydown.space.stop.prevent="model = isDisabled ? model : label">
        <input type="radio" name="name || 'radio_' + radioVal" :disabled="disabled" :checked="label == model ? 'true' : ''"
            @change="change" />
        <slot></slot>
    </label>
</template>
<script>
    import ParentBasic from './../basic';

    export default {
        extends: ParentBasic,
        name: 'ai-radio',
        props: {
            label: {
                type: [String, Number, Boolean],
                default: ''
            }
        },
        computed: {
            model: {
                get() {
                    return typeof this.value !== 'undefined' ? this.value : '';
                },
                set() {
                }
            }
        },
        methods: {
            change() {
                this.$emit('input', this.label);
            },
            clear() {

            },
            load() {

            }
        },
        mounted() {
            this.model = this.value !== 'undefined' ? this.value : '';
        }
    }
</script>