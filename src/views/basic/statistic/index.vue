<template>
	<!-- 组件示例 -->
	<div class="component-container">
		<span class="component-title">统计模块</span>
		<p class="component-description">用于展示统计数据</p>
		<!-- 示例 -->
		<div class="component-example">
			<span class="component-example-title">基础用法</span>
			<p class="component-example-description">传入数据静态展示</p>
			<div class="component-example-content">
				<!-- 组件使用 -->
				<div class="source">
					<ai-statistic v-model="value" :options="options" label="资产总值">
						<i class="el-icon-s-tools"></i>
					</ai-statistic>
					<ai-statistic v-model="value" :options="options2" label="收入总值">
						<img src="../../../assets/images/logo-theme-chalk.svg" />
					</ai-statistic>
					<div>
						<ai-statistic v-for="item in statisticArray" v-model="item.value" :options="item.options" :label="item.label" :key="item.key">
							<i class="el-icon-s-tools"></i>
						</ai-statistic>
					</div>
				</div>
				<!-- 代码参考 -->
				<div class="example">
					<markdown-run :mark="exampleMD" highlight-style-file-name="github"></markdown-run>
				</div>
			</div>
		</div>
		<!-- 组件参数说明 -->
		<div class="component-use">
			<markdown-run :mark="useMD"></markdown-run>
		</div>
	</div>
</template>
<script>
	import ExampleMD from "!text-loader!./example/example.md";
	import UseMD from "!text-loader!./use.md";

	export default {
		props: {},
		data () {
			return {
				exampleMD: ExampleMD,
				useMD: UseMD,
				value: 100000,
				options: {
					customClass: '',
					unit: '元',
					isSymbol: ',',
					icon: {
						isIcon: true
					}
				},
				options2: {
					customClass: '',
					unit: '元',
					icon: {
						isIcon: true,
                        iconType: 'is-fill',
                        color:'red'
					}
				},
				statisticArray: [
					{
						label: '资产总值',
						options: {
							customClass: '',
							unit: '元',
							icon: {
								isIcon: true,
								iconType: 'is-fill'
							}
						},
						value: 100,
						key: 1
					},
				]
			};
		},
		computed: {},
		watch: {},
		methods: {},
		mounted () { }
	};
</script>