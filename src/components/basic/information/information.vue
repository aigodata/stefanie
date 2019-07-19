<template>
	<!-- 信息展示 | 用于展示多条信息数据 -->
	<div class="ai-information" :class="[theme,customConfig.customClass]">
		<div class="ai-information-inner">
			<div class="ai-information-title">{{ customConfig.title }}</div>
			<div v-if="customConfig.data && customConfig.data.length">
				<div v-for="(item,index) in customConfig.data" :key="index" class="ai-information-data">
					{{ item.label }}:{{ item.value }} {{item.unit ? `( ${item.unit} )` : ''}}
				</div>
			</div>
			<div v-else class="ai-information-no-data">
				{{ customConfigData.status }}
			</div>
		</div>
	</div>
</template>
<script>
	import parent from "@/components/parent/basic";
	export default {
		extends: parent,
		name: "ai-information",
		props: {
			label: {
				type: [String, Number],
				default: "信息"
			},
            /**
             * 默认参数的书写位置
             * 可以配置样式变量
             * 可以配置组件的默认配置
             */
			options: {
				type: Object,
				default: function () {
					return {}
				}
			}
		},
		computed: {
			// 重新组装、合并 props 数据 --> 不能删除!!!
			customConfig: function () {
				// 当前类 props.options 属性
				let c = this.$options.__proto__.props.options.default();
				// 父类 props.options 属性
				let p = this.$options.extends.props.options.default();
				// 自定义属性 与 当前类 props 、父类 props 合并
				return Object.assign(p, c, this.options);
			},
		},
		watch: {},
		data () {
			return {
				customConfigData: {
					status: '暂无数据'
				}
			};
		},
		methods: {
			clear () { },
			load () { }
		},
		mounted () {
			this.load();
		},
		destroyed () { }
	};
</script>
<style>
	.ai-information {
		padding: 10px;
	}
	.ai-information .ai-information-inner .ai-information-title {
		font-size: 16px;
		font-weight: 500;
		line-height: 43px;
	}
	.ai-information .ai-information-inner .ai-information-data {
		line-height: 30px;
		font-size: 14px;
	}
	.ai-information .ai-information-inner .ai-information-no-data {
		margin: 10px auto;
		text-align: center;
	}
	/* 白垩纪主题 */
	.ai-information.theme-chalk {
		box-shadow: 1px 2px 12px 1px rgba(0, 0, 0, 0.4);
	}
	.ai-information.theme-chalk .ai-information-inner {
		color: #333;
	}
	.ai-information.theme-chalk .ai-information-inner .ai-information-no-data {
		color: #ccc;
	}
	/* 日食主题 */
	.ai-information.theme-mixiaoku {
		box-shadow: 1px 2px 12px 1px rgba(255, 255, 255, 0.4);
        background: rgba(0, 0, 0, 0.4);
	}
	.ai-information.theme-mixiaoku .ai-information-inner {
		color: #fff;
	}
	.ai-information.theme-mixiaoku .ai-information-inner .ai-information-no-data {
		color: #fff;
	}
</style>
