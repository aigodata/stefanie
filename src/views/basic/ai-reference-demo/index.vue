<template>
	<!-- 组件示例 -->
	<div class="component-container">
		<span class="component-title">单选按钮</span>
		<p class="component-description">在一组备选项中进行单选</p>
		<!-- 示例 -->
		<div class="component-example">
			<span class="component-example-title">基础用法</span>
			<p class="component-example-description">由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
			<div class="component-example-content">
				<!-- 组件使用 -->
				<div class="source">
					<ai-reference-demo v-model="radio" label="1">选择一</ai-reference-demo>
					<ai-reference-demo v-model="radio" label="2">选择二</ai-reference-demo>
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
		<div class="component-use">
			<markdown-run :mark="globalMD"></markdown-run>
		</div>
	</div>
</template>
<script>
	import ExampleMD from "!text-loader!./example/example.md";
	import UseMD from "!text-loader!./use.md";
	import GlobalMD from "!text-loader!./../basic-use.md";

	export default {
		props: {},
		computed: {},
		watch: {},
		data() {
			return {
				exampleMD: ExampleMD,
				useMD: UseMD,
				globalMD: GlobalMD,
				radio: 2
			};
		},
		methods: {},
		mounted() {}
	};
</script>
