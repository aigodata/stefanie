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
            }
        },
        data(){
            return {
            }
        },
        mounted () {
            this.load();
        },
        methods: {
            load(){
                typeof this.aaa === 'function' && this.aaa();
            }
        }
    }
</script>