<template>
  <div>
    <!-- 底部标签栏控制 - 路由出口 -->
    <router-view></router-view>
    <!-- 底部标签栏 -->
    <van-tabbar v-model="active" active-color="#F93935">
      <van-tabbar-item icon="home-o" to="/home">叮当快药</van-tabbar-item>
      <van-tabbar-item icon="search" to="/mall">叮当商城</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/spncart">清单列表</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mine" >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
</style>
