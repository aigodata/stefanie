<template>
    <label role="radio" @keydown.space.stop.prevent="model = isDisabled ? model : label">
        <input type="radio" name="name || 'radio_' + radioVal" :disabled="disabled" :checked="label == model ? 'true' : ''"
            @change="handleRadioChange" />
        <slot></slot>
    </label>
</template>
<script>
    import ParentBasic from 'c/basic/basic';

    export default {
        extends: ParentBasic,
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
        mounted() {
            this.model = this.value !== 'undefined' ? this.value : '';
        },
        methods: {
            handleRadioChange() {
                this.$emit('input', this.label);
            }
        }
    }
</script>