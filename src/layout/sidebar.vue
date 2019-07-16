<template>
  <div class="ai-layout-sidebar">
    <div class="ai-layout-sidebar-content">
      <div class="ai-layout-sidebar-title">{{title}}</div>
      <SidebarMenu v-if="navMenus.length" :data="navMenus" :parentPath="category" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarMenu from './menu'

export default {
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      navMenus: [],
      title: null
    }
  },
  computed: {
    ...mapGetters([
      'theme',
      'category',
    ])
  },
  watch: {
    category: function () {
      this.init();
    }
  },
  components: {
    SidebarMenu
  },
  mounted () {
    this.init();
  },
  methods: {
    // 初始化菜单
    init () {
      let routes = this.$router.options.routes || [];
      this.navMenus = recursiveRoute(this.category, routes);
      let obj = { basic: "基础组件", chart: "图表组件", template: "模板" }[this.category];
      this.title = obj;
      function recursiveRoute (p = '', r = []) {
        if (!r.length) { return []; }
        let o = [];
        for (var i = 0; i < r.length; i++) {
          if (r[i].path == p) {
            return r[i].children || [];
          } else {
            o = recursiveRoute(p, r[i].children || []);
          }
        }
        return o;
      }
    }
  }
}
</script>