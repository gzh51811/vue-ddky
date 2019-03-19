<template>
  <div id="Xlist" style="margin-bottom:50px">
    <div class="header cl">
      <img
        src="https://img.ddky.com/c/wap/images/ddky2/home_icon2.png"
        alt
        class="toHomeUrl fl"
        @click="homsss"
      >
      <div class="headerLeft fl">
        <img src="https://img.ddky.com/c/wap/images/ddky2/icon_search.png" alt>
        <!---->
        <input type="text" placeholder="搜索药品、症状、品牌" class="searchTxt">
      </div>
      <span class="toSearch fr">搜索</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    homsss(){
      this.$router.history.push("/")
    }
  }
};
</script>


<style scoped>
.header {
  width: 100%;
  padding: 0px;
  border-bottom: 1px solid #cbcbcb;
  position: absolute;
  top: 0;
  background-color: #fff;
  height: 50px;
  box-sizing: border-box;
  padding-top: 7px;
}
.toHomeUrl {
  width: 8%;
  height: 25px;
  margin: 4px 7px;
}
.fl {
  float: left;
}
.headerLeft {
  width: 70%;
  line-height: 30px;
  border: none;
  box-sizing: border-box;
  height: 36px;
  background-color: #eee;
  border-radius: 28px;
  padding-left: 2px;
  margin-right: 2px;
}
.headerLeft > img {
  height: 18px;
  vertical-align: middle;
  margin: 6px;
}
.toSearch {
  font-size: 17px;
  margin-left: 8px;
  width: 14%;
}
.searchTxt {
  border: none;
  background: #eee;
  font-size: 12px;
}
.headerLeft,
.searchTxt,
.toSearch {
  line-height: 32px;
  border: none;
  box-sizing: border-box;
}
</style>

