<template>
	<div class="ai-layout-breadcrumb">
		<ul class="ai-layout-breadcrumb-list clearfix">
			<!-- 当前位置
            <li class="ai-layout-breadcrumb-current-position">
                <i class="icon iconfont icon-weizhi"></i>当前位置 :
            </li>
            -->
			<!-- 路由 -->
			<li v-for="(item, index) in list" class="ai-layout-breadcrumb-item">
				<!--<router-link-->
				<!--:to="item.path">-->
				<!--<span>{{item.meta.name}}</span>-->
				<!--<i v-show="index !== list.length - 1" class="el-icon-arrow-right"></i>-->
				<!--</router-link>-->
				<div v-if="index !== list.length - 1" class="router-link-active">
					<!-- @click="change(item)" -->
					<span>{{item.meta.name}}</span>
					<i class="el-icon-arrow-right" :class="`${index==list.length-2?'last-text':''}`"></i>
				</div>
				<div v-else class="last-text">
					{{item.meta.name}}
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'ai-layout-breadcrumb',
		watch: {
			// 如果路由有变化，会再次执行该方法
			'$route': 'load'
		},
		data () {
			return {
				list: []
			}
		},
		methods: {
			load () {
				this.list = []; // 清空
				let matched = this.$router.currentRoute.matched;
				// console.log(matched);
				for (let item of matched) {
					if (item.meta.name !== "main" && item.meta.name !== "/") {
						this.list.push(item)
					}
				}
			},
			change (item) {
				this.$router.push(item.path)
			}
		},
		mounted () {
			this.load();
		},
	}
</script>

<style>
	.ai-layout-breadcrumb {
		position: relative;
		line-height: 50px;
		height: 50px;
		font-size: 14px;
	}

	.ai-layout-breadcrumb .ai-layout-breadcrumb-list {
		margin-left: 20px;
	}

	.ai-layout-breadcrumb .ai-layout-breadcrumb-current-position {
		float: left;
		/*font-size: 12px;*/
		color: #2e3b4a;
	}

	.ai-layout-breadcrumb .ai-layout-breadcrumb-current-position .icon-weizhi {
		font-size: 14px;
		padding-right: 3px;
	}

	.ai-layout-breadcrumb .ai-layout-breadcrumb-list .ai-layout-breadcrumb-item {
		float: left;
		color: #2e3b4a;
		/*font-size: 12px;*/
	}

	.ai-layout-breadcrumb
		.ai-layout-breadcrumb-list
		.ai-layout-breadcrumb-item
		.router-link-active {
		margin: 0;
		display: block;
		text-decoration: none;
		/*cursor: pointer;*/
	}

	/*.ai-layout-breadcrumb .ai-layout-breadcrumb-list .ai-layout-breadcrumb-item .router-link-active:hover span {*/
	/*color: #3d9df4;*/
	/*}*/

	.ai-layout-breadcrumb
		.ai-layout-breadcrumb-list
		.ai-layout-breadcrumb-item
		span {
	}

	.ai-layout-breadcrumb .ai-layout-breadcrumb-list .ai-layout-breadcrumb-item i {
		color: darkgrey;
	}

	.ai-layout-breadcrumb
		.ai-layout-breadcrumb-list
		.ai-layout-breadcrumb-item
		.last-text {
		color: #2da3f1;
	}
</style>
