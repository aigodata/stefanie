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
					<div class="title">无Icon样式</div>
					<!-- 应用实例 -->
					<el-row>
						<el-col :span="6">
							<ai-statistic v-model="value" :options="options" label="资产总值">
								<i class="el-icon-s-tools"></i>
							</ai-statistic>
						</el-col>
					</el-row>
					<!-- 代码参考 -->
					<div class="example">
						<markdown-run :mark="ExampleMD" highlight-style-file-name="github"></markdown-run>
					</div>
					<div class="title">填充默认颜色样式</div>
					<!-- 应用实例 -->
					<el-row>
						<el-col :span="6">
							<ai-statistic v-model="value" :options="options" icon fill label="资产总值">
								<i class="el-icon-s-tools"></i>
							</ai-statistic>
						</el-col>
						<el-col :span="6">
							<ai-statistic v-model="value" :options="options" theme='theme-mixiaoku' icon label="资产总值">
								<i class="el-icon-s-tools"></i>
							</ai-statistic>
						</el-col>
					</el-row>
					<!-- 代码参考 -->
					<div class="example">
						<markdown-run :mark="Example1" highlight-style-file-name="github"></markdown-run>
					</div>
					<div class="title">填充自定义颜色/图片</div>
					<!-- 应用实例 -->
					<el-row>
						<el-col :span="6">
							<ai-statistic v-model="value" icon :options="options" label="资产总值">
								<i class="el-icon-magic-stick"></i>
							</ai-statistic>
						</el-col>
						<el-col :span="6">
							<ai-statistic v-model="value" icon :options="options" label="资产总值">
								<img src="../../../assets/images/aigo.jpg" />
							</ai-statistic>
						</el-col>
					</el-row>
					<!-- 代码参考 -->
					<div class="example">
						<markdown-run :mark="Example2" highlight-style-file-name="github"></markdown-run>
					</div>
					<div>
						<div class="title">填充自定义颜色</div>
						<!-- 应用实例 -->
						<el-row>
							<el-col :span="6">
								<ai-statistic v-model="value" icon :options="options2" fill label="收入总值">
									<i class="el-icon-s-tools"></i>
								</ai-statistic>
							</el-col>
						</el-row>
						<!-- 代码参考 -->
						<div class="example">
							<markdown-run :mark="Example3" highlight-style-file-name="github"></markdown-run>
						</div>
					</div>
					<div>
						<div class="title">填充带类型样式</div>
						<!-- 应用实例 -->
						<el-row>
							<el-col :span="6">
								<ai-statistic v-model="value" theme='theme-mixiaoku' :options="options" fill icon type="warning" label="收入总值"><i class="el-icon-s-tools"></i></ai-statistic>
							</el-col>
							<el-col :span="6">
								<ai-statistic v-model="value" :options="options" fill icon type="success" label="收入总值"><i class="el-icon-s-tools"></i></ai-statistic>
							</el-col>
							<el-col :span="6">
								<ai-statistic v-model="value" :options="options" fill icon type="primary" label="收入总值"><i class="el-icon-s-tools"></i></ai-statistic>
							</el-col>
							<el-col :span="6">
								<ai-statistic v-model="value" :options="options" fill icon type="error" label="收入总值"><i class="el-icon-s-tools"></i></ai-statistic>
							</el-col>
						</el-row>
						<!-- 代码参考 -->
						<div class="example">
							<markdown-run :mark="Example4" highlight-style-file-name="github"></markdown-run>
						</div>
					</div>
					<div>
						<div class="title">非填充带类型样式</div>
						<!-- 应用实例 -->
						<el-row>
							<el-col :span="6">
								<ai-statistic v-model="value" theme='theme-mixiaoku' :options="options" icon type="warning" label="收入总值"><i class="el-icon-s-tools"></i></ai-statistic>
							</el-col>
							<el-col :span="6">
								<ai-statistic v-model="value" :options="options" icon type="success" label="收入总值"><i class="el-icon-s-tools"></i></ai-statistic>
							</el-col>
							<el-col :span="6">
								<ai-statistic v-model="value" :options="options" icon type="primary" label="收入总值"><i class="el-icon-s-tools"></i></ai-statistic>
							</el-col>
							<el-col :span="6">
								<ai-statistic v-model="value" :options="options" icon type="error" label="收入总值"><i class="el-icon-s-tools"></i></ai-statistic>
							</el-col>
						</el-row>
						<!-- 代码参考 -->
						<div class="example">
							<markdown-run :mark="Example5" highlight-style-file-name="github"></markdown-run>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 组件参数说明 -->
		<div class="component-use">
			<markdown-run :mark="useMD"></markdown-run>
			<markdown-run :mark="BasicUse"></markdown-run>
		</div>
	</div>
</template>
<script>
	import ExampleMD from "!text-loader!./example/example.md";
	import Example1 from "!text-loader!./example/example1.md";
	import Example2 from "!text-loader!./example/example2.md";
	import Example3 from "!text-loader!./example/example3.md";
	import Example4 from "!text-loader!./example/example4.md";
	import Example5 from "!text-loader!./example/example5.md";
	import BasicUse from "!text-loader!../basic-use.md";
	import UseMD from "!text-loader!./use.md";

	export default {
		props: {},
		data () {
			return {
				ExampleMD: ExampleMD,
				Example1: Example1,
				Example2: Example2,
				Example3: Example3,
				Example4: Example4,
				Example5: Example5,
				BasicUse: BasicUse,
				useMD: UseMD,
				value: 1000,
				options: {
					unit: '元',
				},
				options2: {
					unit: '元',
					iconBorderSize: '6',
					iconBorderColor: 'red',
					iconBorderType: 'solid',
					iconColor: 'red',
					iconBGColor: 'green',
					iconSize: '40',
					titleFontSize: '18',
					titleFontColor: '#000',
					valueFontSize: '40',
					valueFontColor: 'lime'
				}
			};
		},
		computed: {},
		watch: {},
		methods: {},
		mounted () { }
	};
</script>
