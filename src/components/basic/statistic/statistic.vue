<template>
	<!-- 统计数字 | 用于展示数字数据 -->
	<div class="ai-statistic" :class="[theme,customConfig.customClass]">
		<div class="ai-statistic-inner" :class="[theme,icon?'':'ai-statistic-inner-no-icon']">
			<!-- icon展示 -->
			<div v-if="icon" class="ai-statistic-icon" :class="fill?'is-fill':''">
				<div class="ai-statistic-icon-border" :style="iconBGColor">
					<div class="ai-statistic-inner-border" :style="iconBorder" :class="`${type?type:''}`">
						<slot></slot>
					</div>
				</div>
			</div>
			<!-- 文字提示 -->
			<div class="ai-statistic-text" :class="icon?'':'ai-statistic-no-icon'">
				<div class="ai-statistic-label" :style="titleStyle">
					<span>{{ label }} {{ customConfig.unit ? `( ${ customConfig.unit } )` : ``}}</span>
				</div>
				<div class="ai-statistic-value" :style="valueStyle">
					{{ value }}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import parent from "@/components/parent/basic";
	export default {
		extends: parent,
		name: "ai-statistic",
		props: {
			label: {
				type: [String, Number],
				default: "统计"
			},
            /**
             * 默认参数的书写位置
             * 可以配置样式变量
             * 可以配置组件的默认配置
             */
			options: {
				type: Object,
				default: function () {
					return {
						unit: '',
						isSymbol: false,
						iconBorderSize: '',
						iconBorderColor: '',
						iconBorderType: '',
						iconColor: '',
						iconBGColor: '',
						iconSize: '',
						titleFontSize: '',
						titleFontColor: '',
						valueFontSize: '',
						valueFontColor: ''
					}
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
				fill: false,
				icon: false,
				type: '',
				iconBorder: {},
				iconBGColor: {},
				titleStyle: {},
				valueStyle: {},
			};
		},
		methods: {
			clear () { },
			load () {
				'fill' in this.$attrs ? this.fill = true : null;
				'icon' in this.$attrs ? this.icon = true : null;
				'type' in this.$attrs ? this.type = this.$attrs.type : null;
				let s = this.customConfig;
				this.iconBorder = `border: ${s.iconBorderSize}px ${s.iconBorderType} ${s.iconBorderColor};color:${s.iconColor};font-size:${s.iconSize}px;`;
				'fill' in this.$attrs ? this.iconBGColor = `background:${s.iconBGColor}` : '';
				this.titleStyle = `font-size:${s.titleFontSize}px;color:${s.titleFontColor};`;
				this.valueStyle = `font-size:${s.valueFontSize}px;color:${s.valueFontColor};`;
			}
		},
		mounted () {
			this.load();
		},
		destroyed () { }
	};
</script>
<style>
	.ai-statistic {
		position: relative;
		margin: 10px;
	}
	.ai-statistic .ai-statistic-inner {
		padding: 20px;
		overflow: hidden;
	}
	.ai-statistic .ai-statistic-inner-no-icon {
		padding: 50px 0;
	}
	.ai-statistic .ai-statistic-icon {
		width: 30%;
		float: left;
	}
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border {
		position: relative;
		padding: 50%;
		text-align: center;
		border-radius: 50%;
		font-size: 30px;
	}
	.ai-statistic
		.ai-statistic-icon
		.ai-statistic-icon-border
		.ai-statistic-inner-border {
		position: absolute;
		border: 2px solid #333;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		left: 0;
		top: 0;
	}
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border img,
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border i,
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border img,
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border svg {
		width: 50%;
	}
	.ai-statistic
		.ai-statistic-icon
		.ai-statistic-icon-border
		.ai-statistic-icon-fill
		i {
		color: #fff;
	}
	.ai-statistic .ai-statistic-text {
		width: 70%;
		padding: 0 20px;
		position: absolute;
		right: 0;
		top: 0;
		float: left;
		height: 100%;
	}
	.ai-statistic .ai-statistic-no-icon {
		width: 100%;
	}
	.ai-statistic .ai-statistic-text .ai-statistic-label {
		font-size: 13px;
		min-height: 13px;
		color: #888888;
		height: 50%;
		position: relative;
	}
	.ai-statistic .ai-statistic-text .ai-statistic-label > span {
		position: absolute;
		left: 0;
		bottom: 10px;
	}
	.ai-statistic .ai-statistic-text .ai-statistic-value {
		font-size: 30px;
		min-height: 30px;
		height: 50%;
		position: relative;
	}
	/* 白垩纪主题 */
	.ai-statistic.theme-chalk {
		color: #333;
		background: #fff;
		box-shadow: 1px 2px 12px 1px rgba(0, 0, 0, 0.4);
	}
	/* 填充样式 */
	.ai-statistic.theme-chalk .is-fill .ai-statistic-icon-border {
		color: #fff;
		background: #333;
    }
    .ai-statistic .ai-statistic-icon .ai-statistic-icon-border{
        background: #fff;
        color: #333;
    }
	/* 非填充样式 */
	.ai-statistic.theme-chalk .ai-statistic-icon .warning {
		background: #fff;
		color: #f1d45d;
		border: 2px solid #f1d45d;
	}
	.ai-statistic.theme-chalk .ai-statistic-icon .success {
		background: #fff;
		color: #b3d46c;
		border: 2px solid #b3d46c;
	}
	.ai-statistic.theme-chalk .ai-statistic-icon .primary {
		background: #fff;
		color: #55a2e2;
		border: 2px solid #55a2e2;
	}
	.ai-statistic.theme-chalk .ai-statistic-icon .error {
		background: #fff;
		color: #e3687e;
		border: 2px solid #e3687e;
	}
	.ai-statistic.theme-chalk .is-fill .warning {
		background: #f1d45d;
		color: #fff;
		border: 2px solid #f1d45d;
	}
	.ai-statistic.theme-chalk .is-fill .success {
		background: #b3d46c;
		color: #fff;
		border: 2px solid #b3d46c;
	}
	.ai-statistic.theme-chalk .is-fill .primary {
		background: #55a2e2;
		color: #fff;
		border: 2px solid #55a2e2;
	}
	.ai-statistic.theme-chalk .is-fill .error {
		background: #e3687e;
		color: #fff;
		border: 2px solid #e3687e;
	}

	/* 日食主题 */
	.ai-statistic.theme-mixiaoku {
		box-shadow: 1px 2px 12px 1px rgba(255, 255, 255, 0.4);
		color: #fff;
		background: rgba(0, 0, 0, 0.8);
	}
	/* 填充样式 */
	.ai-statistic.theme-mixiaoku .is-fill .ai-statistic-icon-border {
		color: #fff;
		background: #fff;
    }
    .ai-statistic .ai-statistic-icon .ai-statistic-icon-border{
        background: #fff;
        color: #333;
    }
	/* 非填充样式 */
	.ai-statistic.theme-mixiaoku .ai-statistic-icon .warning {
		background: #fff;
		color: #f1d45d;
		border: 2px solid #f1d45d;
	}
	.ai-statistic.theme-mixiaoku .ai-statistic-icon .success {
		background: #fff;
		color: #b3d46c;
		border: 2px solid #b3d46c;
	}
	.ai-statistic.theme-mixiaoku .ai-statistic-icon .primary {
		background: #fff;
		color: #55a2e2;
		border: 2px solid #55a2e2;
	}
	.ai-statistic.theme-mixiaoku .ai-statistic-icon .error {
		background: #fff;
		color: #e3687e;
		border: 2px solid #e3687e;
	}
	/* 填充样式 */
	.ai-statistic.theme-mixiaoku .is-fill .ai-statistic-icon-border {
		color: #fff;
		background: #333;
	}
	.ai-statistic.theme-mixiaoku .is-fill .warning {
		background: #f1d45d;
		color: #fff;
		border: 2px solid #f1d45d;
	}
	.ai-statistic.theme-mixiaoku .is-fill .success {
		background: #b3d46c;
		color: #fff;
		border: 2px solid #b3d46c;
	}
	.ai-statistic.theme-mixiaoku .is-fill .primary {
		background: #55a2e2;
		color: #fff;
		border: 2px solid #55a2e2;
	}
	.ai-statistic.theme-mixiaoku .is-fill .error {
		background: #e3687e;
		color: #fff;
		border: 2px solid #e3687e;
	}
</style>
