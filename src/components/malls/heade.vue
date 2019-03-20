<template>
  <div id="header">
    <div class="header_left" v-on:click="siteJump">
      <van-icon name="location" color="#ffffff" size="18px" class="header_left_icon"/>
      <div class="van-ellipsis header_left_text" v-text="heder_left_text"></div>
      <van-icon name="arrow-down" color="#ffffff" size="12px" class="header_left_icon"/>
    </div>
    <div class="header_reght" v-on:click="searchJump">
      <div class="header_reght_dhl">
        <van-icon name="search" color="#ffffff" size="19px" class="header_reght_icon"/>
        <div class="van-ellipsis header_reght_text">搜索药品、症状、品牌</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heder_left_text: "叮当智慧药房（广州店）"
    };
  },
  methods: {
    siteJump() {
      console.log("跳转定位页面");
      this.$router.history.push("/site");
    },
    searchJump() {
      console.log("跳转搜索页面");
      this.$router.history.push("/search");
    }
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 45px;
  background: url(https://img.ddky.com/c/wap/images/ddky2/header_bgc.jpg) center
    center no-repeat;
  background-color: #f93935;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 1;
}
#header > div {
  width: 50%;
  height: 100%;
  float: left;
}
.header_left {
  position: relative;
}
.header_left_icon {
  line-height: 45px;
  margin-left: 10px;
}
.header_left_text {
  display: inline-block;
  width: 120px;
  font-size: 12px;
  margin-left: 10px;
  color: white;
}
.header_reght_dhl {
  width: 170px;
  height: 27px;
  margin-left: 6px;
  border-radius: 27px;
  background-color: rgba(255, 255, 255, 0.432);
  margin-top: 9px;
}
.header_reght_icon {
  line-height: 27px;
  margin-left: 10px;
}
.header_reght_text {
  display: inline-block;
  font-size: 11px;
  color: white;
  position: relative;
  top: -2px;
}
</style>