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
            theme: {
                type: String,
                default: 'chalk',
            }
        },
        data(){
            return {
            }
        }
    }
</script>