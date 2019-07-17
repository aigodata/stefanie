<template>
	<!-- 统计数字|用于展示数字数据 -->
	<div class="ai-statistic" :class="`${customConfig.customClass} ${horizonta?'ai-statistic-horizonta':''}`">
		<div class="ai-statistic-inner" :class="`${theme} `">
			<!-- icon展示 -->
			<div v-if="fill&&icon" class="ai-statistic-icon is-fill">
				<div class="ai-statistic-icon-border" :class="`${type?type:''}`" :style="color?`background:${color};border:2px solid ${color}`:''">
					<slot></slot>
				</div>
			</div>
			<div v-else-if="icon" class="ai-statistic-icon">
				<div class="ai-statistic-icon-border" :class="`${type?type:''}`" :style="color?`background:#fff;border:2px solid ${color};color:${color}`:''">
					<slot></slot>
				</div>
			</div>
			<!-- 文字提示 -->
			<div class="ai-statistic-text">
				<div class="ai-statistic-label">
					{{ label }}{{ customConfig.unit ? `(${ customConfig.unit })` : ``}}
				</div>
				<div class="ai-statistic-value">
					{{ customConfig.isSymbol?fmoney(value,3):value }}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import parent from "@/components/basic/basic";
	export default {
		extends: parent,
		name: "ai-statistic",
		props: {
			label: {
				type: [String, Number],
				default: "统计"
			}
		},
		computed: {},
		watch: {},
		data () {
			return {
				fill: false,
				color: '',
				type: '',
				horizonta: false,
				icon: false
			};
		},
		methods: {
			// 处理金额位数
			fmoney (s, n) {
				n = n > 0 && n <= 20 ? n : 2;
				s = parseFloat((s + "").replace(/[^\d\.-]/g, "")) + "";
				let l = s.split(".")[0].split("").reverse(),
					r = s.split(".")[1] ? `.${s.split(".")}` : '', t = "";
				for (let i = 0; i < l.length; i++) {
					t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
				}
				return t.split("").reverse().join("") + r;
			},
			clear () { },
			load () {
				'fill' in this.$attrs ? this.fill = true : null;
				'fill' in this.$attrs && this.$attrs.fill ? this.color = this.$attrs.fill : null;
				'type' in this.$attrs && this.$attrs.type ? this.type = this.$attrs.type : null;
				'color' in this.$attrs && this.$attrs.color ? this.color = this.$attrs.color : null;
				'horizonta' in this.$attrs ? this.horizonta = true : null;
				'icon' in this.$attrs ? this.icon = true : null;
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
		display: inline-block;
		margin: 10px;
		box-shadow: 0px 3px 13px 0px rgba(110, 127, 136, 0.1);
	}
	.ai-statistic-horizonta {
		display: block;
	}
	.ai-statistic .ai-statistic-inner {
		padding: 20px;
		overflow: hidden;
	}
	.ai-statistic .ai-statistic-inner::before {
		content: "";
		clear: both;
		display: block;
	}
	.ai-statistic .ai-statistic-icon {
		font-size: 30px;
		text-align: center;
		float: left;
	}
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border {
		border-radius: 50%;
		padding: 15px;
		border: 2px solid #333;
	}
	/* 非填充样式 */
	.ai-statistic .ai-statistic-icon .warning {
		background: #fff;
		color: #f1d45d;
		border: 2px solid #f1d45d;
	}
	.ai-statistic .ai-statistic-icon .success {
		background: #fff;
		color: #b3d46c;
		border: 2px solid #b3d46c;
	}
	.ai-statistic .ai-statistic-icon .primary {
		background: #fff;
		color: #55a2e2;
		border: 2px solid #55a2e2;
	}
	.ai-statistic .ai-statistic-icon .error {
		background: #fff;
		color: #e3687e;
		border: 2px solid #e3687e;
	}

	/* 填充样式 */
	.ai-statistic .is-fill .ai-statistic-icon-border {
		color: #fff;
		background: #333;
	}
	.ai-statistic .is-fill .warning {
		background: #f1d45d;
		color: #fff;
		border: 2px solid #f1d45d;
	}
	.ai-statistic .is-fill .success {
		background: #b3d46c;
		color: #fff;
		border: 2px solid #b3d46c;
	}
	.ai-statistic .is-fill .primary {
		background: #55a2e2;
		color: #fff;
		border: 2px solid #55a2e2;
	}
	.ai-statistic .is-fill .error {
		background: #e3687e;
		color: #fff;
		border: 2px solid #e3687e;
	}
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border img {
		width: 30px;
	}
	.ai-statistic
		.ai-statistic-icon
		.ai-statistic-icon-border
		.ai-statistic-icon-fill
		i {
		color: #fff;
	}
	.ai-statistic .ai-statistic-text {
		float: left;
		padding: 0px 20px 0px 20px;
	}
	.ai-statistic .ai-statistic-text .ai-statistic-label {
		font-size: 13px;
		min-height: 13px;
		margin-top: 10px;
		color: #888888;
	}
	.ai-statistic .ai-statistic-text .ai-statistic-value {
		font-size: 30px;
		min-height: 30px;
		margin-top: 10px;
	}
	/* 白垩纪主题 */
	.ai-statistic .theme-chalk {
		border: 1px solid #ccc;
		color: #333;
		background: #fff;
	}
	/* 日食主题 */
	.ai-statistic .theme-mixiaoku {
		border: 1px solid #fff;
		color: #fff;
		background: #333;
	}
</style>