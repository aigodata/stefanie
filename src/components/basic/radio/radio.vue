<template>
    <!-- 单选按钮 | 可支持键盘空格按钮 -->
    <div class="ai-radio" :class="theme">
        <label role="radio" @keydown.space.stop.prevent="model = isDisabled ? model : label">
            <input type="radio" name="name || 'radio_' + radioVal" :disabled="disabled" :checked="label == model ? 'true' : ''"
                @change="change" />
            <slot></slot>
        </label>
    </div>
</template>
<script>
    import parent from '@/components/basic/basic';

    export default {
        extends: parent,
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
                this.model = this.value !== 'undefined' ? this.value : '';
            }
        },
        mounted() {
            this.load();
        }
    }
</script>
<style>
    .ai-radio {
        display: inline-block;
    }
    /**
    * -------------------  白垩纪 主题 样式
    */
    .ai-radio .theme-chalk {}

    /**
    * -------------------  日食 主题 样式
    */
    .ai-radio .theme-mixiaoku {}
</style>