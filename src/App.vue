<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar v-show="$route.meta.show"></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from 'components/content/maintabbar/maintabbar'

export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
