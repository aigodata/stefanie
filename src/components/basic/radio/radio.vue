<template>
    <!-- 单选按钮 (组件名称) | 可支持键盘空格按钮 (组件描述) -->
    <div class="ai-radio" :class="[theme,options.className]">
        <label role="radio" @keydown.space.stop.prevent="model = isDisabled ? model : label">
            <input type="radio" name="name || 'radio_' + radioVal"  :checked="label == model ? 'true' : ''"
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
        watch: {},
        data() {
            return {}
        },
        methods: {
            change() {
                this.$emit('input', this.label);
            },
            clear() { },
            load() {
                // 初始化
                this.model = this.value !== 'undefined' ? this.value : '';
            }
        },
        mounted() {
            this.load();
        },
        destroyed() { }
    }
</script>
<style>
    .ai-radio {
        display: inline-block;
        margin-right: 15px;
    }

    .ai-radio:last-child {
        margin-right: 0;
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