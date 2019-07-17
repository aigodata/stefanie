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
				default: function() {
					return {
						customClass: ""
					};
				}
			}
		},
		computed: {
            // 重新组装、合并 props 数据 --> 不能删除!!!
			customConfig: function() {
				// 当前类 props.options 默认属性
				let t = this.$options.__proto__.props.options.default();
				// 自定义属性 与 默认属性 合并
				return Object.assign(t, this.options);
			}
		}
	};
</script>
