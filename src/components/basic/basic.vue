<script>
    export default {
        props: {
            value: {
                type: [Boolean, Number, String],
                default: '',
            },
            disabled: {
                type: Boolean,
                default: false
            },
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
            }
        },
        data() {
            return {
            }
        }
    }
</script>