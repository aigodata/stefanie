<template>
	<!-- 单选按钮 (组件名称) | 可支持键盘空格按钮 (组件描述) -->
	<div class="ai-radio" :class="[theme,customConfig.customClass]">
		<label role="radio" @keydown.space.stop.prevent="model = isDisabled ? model : label">
			<input
				type="radio"
				name="name || 'radio_' + radioVal"
				:disabled="disabled"
				:checked="label == model ? 'true' : ''"
				@change="change"
			>
			<slot></slot>
		</label>
	</div>
</template>
<script>
	import parent from "@/components/basic/basic";

	export default {
		extends: parent,
		name: "ai-radio",
		props: {
			label: {
				type: [String, Number, Boolean],
				default: ""
			},
			disabled: {
				type: Boolean,
				default: false
            },
            /**
             * 默认参数的书写位置
             *     可以配置样式变量
             *     可以配置组件的默认配置
             */
            options: {
			    type: Object,
                default: function() {
                    return {
                        xxx: 'xxx'
                    }
                }
            }
		},
		computed: {
			// 重新组装、合并 props 数据 --> 不能删除!!!
            customConfig: function() {
                // 当前类 props.options 属性
                let c = this.$options.__proto__.props.options.default();
                // 父类 props.options 属性
                let p = this.$options.extends.props.options.default();
                // 自定义属性 与 当前类 props 、父类 props 合并
                return Object.assign(p, c, this.options);
            },
			model: {
				get() {
					return typeof this.value !== "undefined" ? this.value : "";
				},
				set() {}
			}
		},
		watch: {},
		data() {
			return {};
		},
		methods: {
			change() {
				this.$emit("input", this.label);
			},
			clear() {
			    // 这里用于移除变量, 清除缓存, 释放闭包
            },
			load() {
				// 初始化
                this.model = this.value !== "undefined" ? this.value : "";
			}
		},
		mounted() {
			this.load()
		},
		destroyed() {
		    this.clear()
        }
	};
</script>
<style>

	.ai-radio {
		display: inline-block;
		margin-right: 15px;
	}

	.ai-radio:last-child {
		margin-right: 0;
	}

	/* 白垩纪 主题 样式 */
	.ai-radio.theme-chalk {

        /* 关于颜色的样式写在这里 */
	}

	/* 日食 主题 样式 */
	.ai-radio.theme-mixiaoku {

        /* 关于颜色的样式写在这里 */
	}
</style>
