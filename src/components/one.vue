<template>
  <div class="one">
    <!-- 底部标签栏控制 - 路由出口 -->
    <router-view></router-view>
    <!-- 底部标签栏 -->
    <van-tabbar v-model="active" active-color="#F93935">
      <van-tabbar-item to="/home">
        <!-- 叮当快药 -->
        <img
          slot="icon"
          slot-scope="props"
          class="icon_img"
          :src="props.active ? icon.active1 : icon.normal1"
        >
      </van-tabbar-item>
      <van-tabbar-item to="/mall">
        <!-- 叮当商城 -->
        <img
          slot="icon"
          slot-scope="props"
          class="icon_img"
          :src="props.active ? icon.active2 : icon.normal2"
        >
      </van-tabbar-item>
      <van-tabbar-item to="/spncart">
        <!-- 清单列表 -->
        <img
          slot="icon"
          slot-scope="props"
          class="icon_img"
          :src="props.active ? icon.active3 : icon.normal3"
        >
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <!-- 我的 -->
        <img
          slot="icon"
          slot-scope="props"
          class="icon_img"
          :src="props.active ? icon.active4 : icon.normal4"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        // 叮当快药
        normal1: require("../../public/img/1542445956477_104_104.jpg"),
        active1: require("../../public/img/1542445952383_104_104.jpg"),
        // 叮当商城
        normal2: require("../../public/img/121212.png"),
        active2: require("../../public/img/1542445962489_104_104.png"),
        // 清单列表
        normal3: require("../../public/img/32323.png"),
        active3: require("../../public/img/32s23.png"),
        // 我的
        normal4: require("../../public/img/123125413.png"),
        active4: require("../../public/img/1231254s13.png")
      }
    };
  },
  mounted: function() {
    console.log("读取导航");
    if (this.$route.name === "home") {
      this.active = 0;
    } else if (this.$route.name === "mall") {
      this.active = 1;
    } else if (this.$route.name === "spncart") {
      this.active = 2;
    } else if (this.$route.name === "mine"||this.$route.name === "login"||this.$route.name === "reg") {
      this.active = 3;
    }
  }
};
</script>

<style>
.icon_img {
  width: 45px;
  height: 45px !important;
  padding-top: 4px;
}
</style>
