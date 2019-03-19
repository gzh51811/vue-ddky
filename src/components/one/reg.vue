<template>
  <div class="tabone">
    <div class="tabColor">
      <li class="quick">
        <input type="text" name placeholder="请输入手机号码" id="user" v-model="phoneNum">
      </li>
      <li class="pwdLogin">
        <input type="password" name placeholder="请设置密码" class="pwd" v-model="pswNum">
      </li>
      <p class="voiceYanzheng">
        <a href="javascript:;" @click="gotologin">已有账号，去登陆。</a>
      </p>
    </div>
    <div class="tabButtom">
      <div class="login-btnbox cl" @click="regzc">
        <p class="btn-login">注册</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      phoneNum: "",
      pswNum: ""
    };
  },
  methods: {
    gotologin() {
      this.$router.push("/login");
    },
    regzc() {
      var params = {
        phoneNum: this.phoneNum,
        pswNum: this.pswNum
      };
      var sss = this;
      axios
        .get(this.$store.getters.severhttp + "api/zc", {
          params: {
            phoneNum: this.phoneNum,
            pswNum: this.pswNum
          }
        })
        .then(function(response) {
          if (response.data == "ok") {
            sss.$store.dispatch("usernc", params);
          } else {
            alert("已注册");
          }
        });
    }
  },
  computed: {
    usern() {
      // console.log(this.$store.state.mall.mallsj.data.mallBannerModule.topUrls);

      return this.$store.getters.usern;
    }
  },
  watch: {
    usern: function(newQuestion, oldQuestion) {
      if (this.$store.getters.usern != "") {
        console.log("用户名改变");
        this.$router.push("/mine");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.tabColor {
  height: 200px;
}
.tabButtom {
  padding-top: 15px;
  height: 300px;
  // background: #f5f5f5;
}
li {
  list-style: none;
}
.span {
  font-size: 10px;
  padding-left: 5%;
  color: #cc3333;
}
.quick {
  width: 90%;
  margin: 5px auto 0;
  margin-top: 30px;
  font-size: 16px;
  line-height: 34.5px;
  border: 1px solid #d8d8d8;
  position: relative;
  background: #fafafa;
  border-radius: 5px;
}
#user {
  font-size: 12px;
  line-height: 18px;
  padding: 8px 20px;
  border: none;
  display: inline-block;
  background: #fafafa;
  // width: -webkit-calc(100% - 100px);
}
.clear-tel {
  display: inline-block;
  width: 20px;
  height: 20px;
  // float: right;
  margin-right: 10px;
}
.clear-tel img {
  display: inline-block;
  width: 100%;
  position: relative;
  top: 4px;
}
.cl-li {
  width: 90%;
  margin: 5px auto 0;
  font-size: 16px;
  line-height: 34.5px;
  border: 1px solid #d8d8d8;
  position: relative;
  background: #fafafa;
  border-radius: 5px;
  border: none;
  background: #fff;
}
.cl-li input {
  line-height: 18px;
  padding: 8px 20px;
  border: none;
  display: inline-block;
  background: #fafafa;
  font-size: 10px;
  // width: -webkit-calc(100% - 100px);
}
li .smsCode {
  display: inline-block;
  width: 50%;
  border: 1px solid #d8d8d8;
  background: #fafafa;
  border-radius: 5px;
}
.not_get {
  color: #cc3333;
}
.huoqu {
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -17.5px;
  font-size: 10px;
  width: 87px;
  height: 34.5px;
  border-radius: 5px;
  line-height: 38px;
  color: #fff;
  text-align: center;
  background: #f08800;
}
.voiceYanzheng {
  font-size: 12px;
  text-align: center;
  padding-right: 10px;
  margin-top: 20px;
  color: #9b9b9b;
}
.voiceYanzheng a {
  color: #cc3333;
}
.login-btnbox {
  width: 80%;
  margin: 0 auto;
  background: #cc3333;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  font-size: 13px;
  color: #fff;
}
.pwdLogin {
  width: 90%;
  margin: 5px auto 0;
  font-size: 16px;
  line-height: 34.5px;
  border: 1px solid #d8d8d8;
  position: relative;
  background: #fafafa;
  border-radius: 5px;
}
.pwdLogin input {
  font-size: 12px;
  line-height: 18px;
  padding: 8px 20px;
  border: none;
  display: inline-block;
  background: #fafafa;
  // width: -webkit-calc(100% - 100px);
}
</style>

