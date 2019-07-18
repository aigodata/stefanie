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
					<el-row>
						<el-col :span="6">
							<ai-statistic v-model="value" :options="options" color="green" label="资产总值">
								<i class="el-icon-s-tools"></i>
							</ai-statistic>
						</el-col>
					</el-row>
					<div class="example">
						<markdown-run :mark="NoIcon"></markdown-run>
					</div>
					<div>
						<div class="title">填充自定义颜色/图片</div>
						<el-row>
							<el-col :span="6">
								<ai-statistic v-model="value" icon :options="options" color="green" label="资产总值">
									<i class="el-icon-s-tools"></i>
								</ai-statistic>
							</el-col>
							<el-col :span="6">
								<ai-statistic v-model="value" icon :options="options" color="green" label="资产总值">
									<img src="../../../assets/images/aigo.jpg" />
								</ai-statistic>
							</el-col>
						</el-row>

					</div>
					<div class="example">
						<markdown-run :mark="CustomColor"></markdown-run>
					</div>
					<div>
						<div class="title">填充自定义颜色</div>
						<el-row>
							<el-col :span="6">
								<ai-statistic v-model="value" icon :options="options" fill="green" label="收入总值">
									<i class="el-icon-s-tools"></i>
								</ai-statistic>
							</el-col>
						</el-row>
						<div class="example">
							<markdown-run :mark="FillCustomColor"></markdown-run>
						</div>
					</div>
					<div>
						<div class="title">填充带类型样式</div>
						<el-row>
							<el-col :span="6">
								<ai-statistic v-model="value" :options="options" fill icon type="warning" label="收入总值"><i class="el-icon-s-tools"></i></ai-statistic>
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
						<div class="example">
							<markdown-run :mark="FillType"></markdown-run>
						</div>
					</div>
					<div>
						<div class="title">非填充带类型样式</div>
						<el-row>
							<el-col :span="6">
								<ai-statistic v-model="value" :options="options" icon type="warning" label="收入总值"><i class="el-icon-s-tools"></i></ai-statistic>
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
						<div class="example">
							<markdown-run :mark="NoFillType"></markdown-run>
						</div>
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
	import NoIcon from "!text-loader!./example/noIcon.md";
	import CustomColor from "!text-loader!./example/customColor.md";
	import FillCustomColor from "!text-loader!./example/fillCustomColor.md";
	import FillType from "!text-loader!./example/fillType.md";
	import NoFillType from "!text-loader!./example/noFillType.md";
	import UseMD from "!text-loader!./use.md";

	export default {
		props: {},
		data () {
			return {
				exampleMD: ExampleMD,
				NoIcon: NoIcon,
				CustomColor: CustomColor,
				FillCustomColor: FillCustomColor,
				FillType: FillType,
				NoFillType: NoFillType,
				useMD: UseMD,
				value: 1000,
				options: {
					customClass: '',
					unit: '元',
					isSymbol: ',',
				},
			};
		},
		computed: {},
		watch: {},
		methods: {},
		mounted () { }
	};
</script>
