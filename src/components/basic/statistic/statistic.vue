<template>
	<!-- 统计数字|用于展示数字数据 -->
	<div class="ai-statistic" :class="[theme,customConfig.customClass]">
		<div class="ai-statistic-inner" :class="icon?'':'ai-statistic-inner-no-icon'">
			<!-- icon展示 -->
			<div v-if="fill&&icon" class="ai-statistic-icon is-fill">
				<div class="ai-statistic-icon-border">
					<div class="ai-statistic-inner-border" :class="`${type?type:''}`" :style="color?`background:${color};`:''" >
						<slot></slot>
					</div>
				</div>
			</div>
			<div v-else-if="icon" class="ai-statistic-icon">
				<div class="ai-statistic-icon-border">
					<div class="ai-statistic-inner-border" :class="`${type?type:''}`" :style="color?`background:#fff;color:${color}`:''">
						<slot></slot>
					</div>
				</div>
			</div>
			<!-- 文字提示 -->
			<div class="ai-statistic-text" :class="icon?'':'ai-statistic-no-icon'">
				<div class="ai-statistic-label">
					<span>{{ label }} {{ customConfig.unit ? `( ${ customConfig.unit } )` : ``}}</span>
				</div>
				<div class="ai-statistic-value">
					{{ customConfig.isSymbol?fmoney(value,3):value }}
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
		},
		computed: {},
		watch: {},
		data () {
			return {
				fill: false,
				color: '',
				type: '',
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
					t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? this.customConfig.isSymbol : "");
				}
				return t.split("").reverse().join("") + r;
			},
			clear () { },
			load () {
				'fill' in this.$attrs ? this.fill = true : null;
				'fill' in this.$attrs && this.$attrs.fill ? this.color = this.$attrs.fill : null;
				'type' in this.$attrs && this.$attrs.type ? this.type = this.$attrs.type : null;
				'color' in this.$attrs && this.$attrs.color ? this.color = this.$attrs.color : null;
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
	}
	.ai-statistic
		.ai-statistic-icon
		.ai-statistic-icon-border
		.ai-statistic-inner-border {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		left: 0;
		top: 0;
		border: 2px solid;
	}
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border img,
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border i,
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 30px;
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
        box-shadow: 0px 3px 13px 0px rgba(110, 127, 136, 0.1);
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
	/* 日食主题 */
	.ai-statistic .theme-mixiaoku {
		border: 1px solid #fff;
		color: #fff;
		background: #333;
	}
</style>
