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
        data() {
            return {}
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
        watch: {

        },
        // 组件方法实例
        methods: {
            // 标签切换,触发input事件并返回新值 v-model
            change() {
                this.$emit('input', this.label);
            },
            clear() {

            },
            // 页面初始化加载 
            load() {
                // 初始化
                this.model = this.value !== 'undefined' ? this.value : '';
            }
        },
        // DOM渲染完毕
        mounted() {
            this.load();
        },
        // 组件销毁
        destroyed() {

        }
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