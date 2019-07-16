<script>
    export default {
        props: {
            // 绑定值
            value: {
                type: [Boolean, Number, String],
                default: '',
            },
            // 是否禁用
            disabled: {
                type: Boolean,
                default: false
            },
            // 加载状态
            loading: {
                type: Boolean,
                default: false,
            },
            /**
             * 主题
             * theme-chalk -> 白垩纪(浅色)
             * theme-mixiaoku -> 日食(深色)
             */
            theme: {
                type: String,
                default: 'theme-chalk',
            },
            /**
             * 选项配置
             * label -> 指定节点标签为节点对象的某个属性值
             * children -> 指定子节点对象的某个属性值
             */
            options: {
                type: Object,
                default: function () {
                    return {
                        label: 'label',
                        children: 'children'
                    }
                }
            }
        },
        data() {
            return {
            }
        }
    }
</script>