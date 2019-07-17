<template>
	<!-- 统计数字|用于展示数字数据 -->
	<div class="ai-statistic" :class="`${options.customClass}`">
		<div class="ai-statistic-inner" :class="`${theme} `">
			<!-- icon展示 -->
			<div class="ai-statistic-icon" v-if="options.icon.isIcon">
				<div v-if="options.icon.iconType=='is-fill'" class="ai-statistic-icon-border ai-statistic-icon-fill">
					<slot></slot>
				</div>
			</div>
			<!-- 文字提示 -->
			<div class="ai-statistic-text">
				<div class="ai-statistic-label">
					{{ label }}{{options.unit?`(${options.unit})`:``}}
				</div>
				<div class="ai-statistic-value">
					{{ options.isSymbol?fmoney(value,3):value }}
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
			},
		},
		computed: {},
		watch: {},
		data () {
			return {};
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
			load () { }
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
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border i,
	.ai-statistic .ai-statistic-icon .ai-statistic-icon-border img {
		width: 30px;
		height: 30px;
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
		padding: 10px;
	}
	.ai-statistic .ai-statistic-text .ai-statistic-label {
		font-size: 14px;
		min-height: 14px;
	}
	.ai-statistic .ai-statistic-text .ai-statistic-value {
		font-size: 30px;
		min-height: 30px;
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