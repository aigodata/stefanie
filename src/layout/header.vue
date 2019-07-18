<template>
	<div class="ai-layout-header">
		<div class="ai-layout-header-content clearfix">
			<a href="//github.com/aigodata" class="logo" target="_blank">
				<img src="../assets/images/logo-theme-chalk.svg" height="34" v-show="$store.getters.theme === 'theme-chalk'">
				<img src="../assets/images/logo-theme-mixiaoku.svg" height="34" v-show="$store.getters.theme === 'theme-mixiaoku'">
			</a>
			<span class="ai-layout-header-content-line"></span>
			<span class="title" title="斯蒂芬妮">Stefanie</span>

			<a href="https://github.com/aigodata/stefanie" target="_blank" title="访问github" class="github-logo">
				<img src="../assets/images/github-theme-chalk.svg" v-show="$store.getters.theme === 'theme-chalk'">
				<img src="../assets/images/github-theme-mixiaoku.svg" v-show="$store.getters.theme === 'theme-mixiaoku'">
			</a>
			<ul class="theme-nav clearfix">
				<li class="theme-nav-item" @click="changeTheme('theme-chalk')" :class="{active: $store.getters.theme === 'theme-chalk'}">
					白垩纪
				</li>
				<li class="theme-nav-item" @click="changeTheme('theme-mixiaoku')" :class="{active: $store.getters.theme === 'theme-mixiaoku'}">
					日食
				</li>
			</ul>
			<div class="theme-nav-select">
				<span class="sub-title">Components组件库<span class="version">{{ version }}</span></span>
				<el-select v-model="category" size="medium" placeholder="请选择分类" clearable @change="changeCategory">
					<el-option v-for="item in categoryList" :key="item.path" :label="item.meta.name" :value="item.path">
					</el-option>
				</el-select>
				<div class="theme-nav-line"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import { version } from '../../package.json'

	export default {
		name: 'layout-header',
		computed: {},
		data () {
			return {
				version,
				category: '',
				categoryList: []
			}
		},
		methods: {
			// 切换分类
			changeCategory () {
				this.$store.commit("category", this.category);
				this.$router.push('/main/' + this.$store.getters.theme + '/' + this.category)
			},
			// 切换主题
			changeTheme (theme, isLoad) {
				if (theme === this.$store.getters.theme && !isLoad) return
				this.$store.commit("theme", theme);
				let pathName = location.pathname
				let origin = location.origin
				// let paths = this.$route.path.split('/');
				// let currentModule = paths[paths.length - 1];
				location.href = `${origin}${pathName}${'?' + 'random=' + Date.now()}#/main/${theme}`;
			},
			// 找到大分类列表
			handleCategoryList (tree, parentPath) {
				for (let d of tree) {
					if (d.path === parentPath) {
						// 过滤重定向redirect
						return d.children.filter(d => !d.redirect)
					}
					if (d.children && d.children.length > 0) {
						let list = this.handleCategoryList(d.children, parentPath)
						if (list && list.length > 0) {
							return list
						}
					}
				}
			}
		},
		mounted () {
			// 主题
			let theme = this.$store.getters.theme;
			if (!theme) {
				theme = 'theme-chalk';
				this.$store.commit("theme", theme);
			}
			document.body.setAttribute('id', 'body-' + theme)
			// 分类
			this.category = this.$store.getters.category || 'basic';
			// 分类列表
			let tree = this.$router.options.routes
			let parentPath = this.$store.getters.theme
			this.categoryList = this.handleCategoryList(tree, parentPath)
		}
	}
</script>

<style>
	.ai-layout-header {
	}

	.ai-layout-header .ai-layout-header-content {
	}
	.ai-layout-header .ai-layout-header-content .ai-layout-header-content-line {
		height: 26px;
		border-right: 1px solid #717171;
		opacity: 0.3;
		display: inline-block;
		margin-bottom: -5px;
	}
	/* logo */
	.ai-layout-header .logo {
		margin-left: 15px;
		margin-right: 15px;
	}
	.ai-layout-header .logo img {
		position: relative;
		top: 9px;
	}

	/* 名称 */

	.ai-layout-header .title {
		padding: 0 15px;
		font-size: 20px;
		font-weight: bold;
		line-height: 60px;
		color: #353535;
	}

	.ai-layout-header .sub-title {
		font-size: 16px;
		color: #333;
		line-height: 60px;
		padding-right: 20px;
	}

	.ai-layout-header .sub-title .version {
		font-size: 14px;
		font-weight: 400;
		padding-left: 5px;
	}

	/* 主题 */
	.ai-layout-header .theme-nav {
		display: inline-block;
		width: 200px;
		float: right;
		height: 100%;
		line-height: 60px;
		background: transparent;
		padding: 0;
		margin: 0;
	}

	.ai-layout-header .theme-nav .theme-nav-item {
		float: left;
		padding: 0 10px;
		cursor: pointer;
	}

	.ai-layout-header .theme-nav .theme-nav-item:hover,
	.ai-layout-header .theme-nav .theme-nav-item.active {
		color: #549ef8;
	}
	.ai-layout-header .theme-nav-select {
		float: right;
		color: #353535;
	}
	.ai-layout-header .theme-nav-select .el-select {
		width: 120px;
	}
	.ai-layout-header .theme-nav-select .el-select input {
		border: none;
	}
	.ai-layout-header .theme-nav-select .theme-nav-line {
		height: 26px;
		float: right;
		border-right: 1px solid #717171;
		margin: 17px 20px;
		opacity: 0.3;
	}
	/* github */
	.ai-layout-header .github-logo {
		position: absolute;
		top: 15px;
		right: 20px;
		float: right;
		width: 30px;
		height: 30px;
	}
</style>
