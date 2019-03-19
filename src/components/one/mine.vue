<template>
  <div class="home">
    <!-- 头部开始 -->
    <header>
      <div class="my-head cl">
        <img class="headbg" src="../../img/personal_bg.png" alt>
        <div class="headcont">
          <div class="userIconBox fl">
            <img
              src="//img.ddky.com/c/wap/images/personal_ren.png?ddkycache=9c4c02ca63e20bbb2ee58955fe5cd851"
              alt
              v-if=" usern == '' "
            >
            <img src="http://img.ddky.com/c/user/photo/zu-8@2x.png" alt v-else>
          </div>

          <div class="userInfoBox fl">
            <p class="nologin" v-if=" usern == '' ">
              <span id="reg-btn" style="color:#fff;">
                <router-link to="/reg">注册</router-link>
              </span>
              /
              <span>
                <router-link to="/login">登录</router-link>
              </span>
            </p>

            <p class="nologin" v-else>
              <span id="reg-btn" style="color:#fff;">
                <router-link to="/reg">{{usern}}</router-link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
    <!-- 头部结束 -->
    <!-- 导航start -->
    <nav class="my-nav success-login">
      <ul class="nav-list cl">
        <li class="waitpay">
          <a>
            <span>
              <van-icon name="pending-payment"/>
            </span>
            待付款
          </a>
        </li>
        <li class="currentorder">
          <a>
            <span>
              <van-icon name="credit-pay"/>
            </span>
            当前订单
          </a>
        </li>
        <li class="waitcomment">
          <a>
            <span>
              <van-icon name="records"/>
            </span>
            待评价
          </a>
        </li>
      </ul>
    </nav>
    <!-- 导航end -->
    <!-- 主体信息开始 -->
    <div class="my-main">
      <ul class="main-list cl">
        <li class="allorder">
          <a>
            <span>
              <van-icon name="add-o"/>
            </span>
            <strong>全部订单</strong>
          </a>
        </li>
        <li class="ddsl">
          <a>
            <span>
              <van-icon name="point-gift-o"/>
            </span>
            <strong>叮当送礼</strong>
          </a>
        </li>
        <li class="myyouhui">
          <a>
            <span>
              <van-icon name="gold-coin-o"/>
            </span>
            <strong>优惠券</strong>
          </a>
        </li>

        <li class="dizhiguanli">
          <a>
            <span>
              <van-icon name="location-o"/>
            </span>
            <strong>地址管理</strong>
          </a>
        </li>
        <li>
          <a href="https://m.ddky.com/app/ddky/zixun/custService.html">
            <span>
              <van-icon name="question-o"/>
            </span>
            <strong>常见问题</strong>
          </a>
        </li>
        <li class="preSaleOrderList">
          <a>
            <span>
              <van-icon name="orders-o"/>
            </span>
            <strong>预售订单</strong>
          </a>
        </li>
      </ul>
      <h1 class="tele-btn" @click="minetcdl">
        <a href="javascript:;">退出登陆</a>
      </h1>
    </div>
    <!-- 主体信息结束-->
  </div>
</template>

<script>
// import Vue from 'vue';
// import { Icon } from 'vant';
// Vue.use(Icon);
export default {
  data() {
    return {
      usern: this.$store.getters.usern
    };
  },
  computed: {
    // usern() {
    //   return this.$store.getters.usern;
    // }
  },
  methods: {
    minetcdl() {
      console.log("退出登陆");
      this.$store.dispatch("tcusern");
      this.usern = this.$store.getters.usern;
    }
  },
  created: function() {
    //  检查cookie
    //读取cookie文件
    if (jc("usern") != "non") {
      this.usern = jc("usern");
    }
    function jc(cname) {
      var names = cname + "=";
      var csz = document.cookie.split(";");
      for (var x in csz) {
        // console.log(csz[x])
        if (csz[x].trim().indexOf(names) == 0) {
          //去除当前数组前后空格
          var dqk = csz[x].trim();
          return dqk.substring(names.length, dqk.length);
        }
      }
      return "non";
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
img {
  border: 0;
}
ol,
ul,
li {
  list-style: none;
}
/*公共样式*/
.home {
  /* background: #EFEFF4; */
  width: 100%;
  height: 100%;
}
.headercon,
.my-nav {
  width: 100%;
}
.my-main .main-list li a,
.my-nav .nav-list li a {
  font-size: 14px;
  line-height: 14px;
  color: #4a4a4a;
}
/*头部的样式开始*/
header {
  height: 140px;
  border: none;
}
.headbg {
  width: 100%;
}
.my-head {
  position: relative;
  font-size: 14px;
  line-height: 14px;
}
/*路由自动加a标签*/
.my-head span a {
  color: #fff;
}
.headcont {
  position: absolute;
  top: 30%;
  height: 56px;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
}
.headcont img {
  width: 56px;
  height: 56px;
  float: left;
}
.userInfoBox {
  float: left;
  height: 56px;
  line-height: 56px;
  padding-left: 5px;
}
.userInfoBox p {
  color: #fff;
}
/*头部的样式结束*/
/*nav样式开始*/
.my-nav {
  height: 60px;
  background: #fff;
}
.my-nav li {
  float: left;
  width: 33%;
  text-align: center;
  padding-top: 8px;
}
.my-nav .nav-list span {
  display: block;
  font-size: 20px;
}
/*nav样式结束*/
.my-main {
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0 10px 10px;
}
.my-main ul {
  width: 100%;
  height: 280px;
}
.my-main li {
  width: 30%;
  height: 100px;
  float: left;
  background: rgb(243, 243, 243);
  margin: 0 10px 8px 0;
  text-align: center;
  padding-top: 25px;
}
.my-main li span {
  font-size: 36px;
  color: #cf4747;
  display: block;
}
.my-main h1 {
  display: block;
  width: 192px;
  height: 37px;
  margin: 0 auto;
  color: #cf4747;
  font-size: 15px;
  line-height: 37px;
  text-align: center;
  border: 2px solid #cf4747;
  border-radius: 2px;
  font-weight: 400;
}
.my-main h1 a {
  color: #cf4747;
}
</style>