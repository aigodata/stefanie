<template>
  <ul class="ai-nav-group">
    <template v-for="item in data">
      <li v-if="!item.redirect" class="ai-nav-item" >
        <span class="ai-nav-name" v-if="item.meta" @click="handleRouteChange($event)" :data-router="parentPath + '/' + item.path">{{ item.meta.name }}</span>
        <SidebarMenu v-if='Array.isArray(item.children)' :data="item.children" :parentPath="parentPath + '/' + item.path" />
      </li>
    </template>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SidebarMenu',
  data () {
    return {
      active: ''
    }
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    parentPath: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters([
      'theme'
    ])
  },
  methods: {
    // 切换菜单
    handleRouteChange (event) {
      this.$router.push(`/main/${this.theme}/${event.target.getAttribute('data-router')}`);
    }
  },
  mounted () {
  }
}
</script>