<template>
	<!-- 组件示例 -->
	<div class="component-container">
		<span class="component-title">信息模块</span>
		<p class="component-description">用于展示多条信息数据</p>
		<!-- 示例 -->
		<div class="component-example">
			<span class="component-example-title">基础用法</span>
			<p class="component-example-description">传入数据静态展示</p>
			<div class="component-example-content">
				<!-- 组件使用 -->
				<div class="source">
					<el-row>
						<el-col :span="6">
							<ai-information :options="options"></ai-information>
						</el-col>
                        <el-col :span="6">
							<ai-information :options="options2" ></ai-information>
						</el-col>
						<el-col :span="6">
							<ai-information :options="options2" theme="theme-mixiaoku"></ai-information>
						</el-col>
					</el-row>
					<!-- 代码参考 -->
					<div class="example">
						<markdown-run :mark="ExampleMD" highlight-style-file-name="github"></markdown-run>
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
	import BasicUse from "!text-loader!../basic-use.md";
	import UseMD from "!text-loader!./use.md";

	export default {
		props: {},
		data () {
			return {
				ExampleMD: ExampleMD,
				useMD: UseMD,
				BasicUse: BasicUse,
				options: {
					title: 'XX合同信息展示',
					data: [
						{ label: '合同金额', value: 8000, unit: '元' },
						{ label: '合同余额', value: 100, unit: '元' },
					]
				},
				options2: {
					title: '奖学金',
					data: []
				}
			};
		},
		computed: {},
		watch: {},
		methods: {},
		mounted () { }
	};
</script>
