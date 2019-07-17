<script>
	export default {
		props: {
			// 绑定值
			value: {
				type: [Boolean, Number, String],
				default: ""
			},
			// 加载状态
			loading: {
				type: Boolean,
				default: false
			},
			/**
			 * 主题
			 * theme-chalk -> 白垩纪(浅色)
			 * theme-mixiaoku -> 日食(深色)
			 */
			theme: {
				type: String,
				default: "theme-chalk"
			},
			/**
			 * 选项配置
			 * customClass -> 自定义样式名字
			 */
			options: {
				type: Object,
				default: function(data) {
					return {
						customClass: ""
					};
				}
			}
		},
		data() {
			return {};
		}
	};
</script>
