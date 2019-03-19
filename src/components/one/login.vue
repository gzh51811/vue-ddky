<template>
  <van-tabs @click="onClick">
    <!-- <van-tab title="快速登录">
            <div class="tabone">
                <div class="tabColor">
                    <li class="quick">
                      <input type="text" name="" placeholder="请输入手机号码" id="user" >
                      <i class="clear-tel"><img src="https://img.ddky.com/c/wap/images/wap/clear-tel.png" alt=""></i>
                      </li>
                      <li class="cl-li">
                          <input type="text" name="" placeholder="请输入验证码" id="smsCode" class="smsCode" >
                          <a class="codebtn fl huoqu">发送验证码</a>
                      </li>
                      <p class="voiceYanzheng">
                          <span class="not_get">收不到验证码？请使用&nbsp;</span>
                          <span>
                              <a href="javascript:;" class="voiceHuoqu">免费语音获取</a>
                          </span>
                          </p>
                </div>
                <div class="tabButtom">
                    <div class="login-btnbox cl">
                      <p class="btn-login">登录</p>
                    </div>
                </div>
            </div>
    </van-tab>-->
    <van-tab title="密码登录">
      <div class="tabTwo">
        <li class="passwordLogin">
          <input type="text" id="tel" name placeholder="请输入手机号码" class="user" v-model="phoneNum">
        </li>
        <li class="pwdLogin">
          <input type="password" name placeholder="请输入登录密码" class="pwd" v-model="pswNum">
        </li>
        <!-- <li class="last">
                  <a href="resetpassword.html" class="fl forget">忘记密码 ?</a>
        </li>-->
      </div>
      <div class="tabButtom">
        <div class="login-btnbox cl" @click="login">
          <p class="btn-login">登录</p>
        </div>
        <p class="goreg">
          还没有账号？快去
          <a class="start-zhuce" href="javascript:;" @click="gotoReg">注册一下</a>
        </p>
      </div>
    </van-tab>
  </van-tabs>
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
    onClick() {},
    login() {
      console.log(this.$store.getters.severhttp);

      if (this.phoneNum !== "" && this.pswNum !== "") {
        var params = {
          phoneNum: this.phoneNum,
          pswNum: this.pswNum
        };
        this.$store.dispatch("usernc", params);
      }
    },
    gotoReg() {
      this.$router.push("/reg");
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
//密码登录
.tabTwo {
  height: 150px;
}
.tabButtoms {
  padding-top: 15px;
  height: 300px;
  // background: #f5f5f5;
}
.passwordLogin {
  width: 90%;
  margin: 25px auto;
  font-size: 16px;
  line-height: 34.5px;
  border: 1px solid #d8d8d8;
  position: relative;
  background: #fafafa;
  border-radius: 5px;
}
#tel {
  font-size: 12px;
  line-height: 18px;
  padding: 8px 20px;
  border: none;
  display: inline-block;
  background: #fafafa;
  // width: -webkit-calc(100% - 100px);
}
.pwdLogin {
  width: 90%;
  margin: 20px auto 0;
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
.last {
  width: 90%;
  margin: 15px auto 0;
  font-size: 16px;
  line-height: 34.5px;
  border: none;
  margin-top: 10px;
}
.last a {
  color: #999;
  text-decoration: underline;
  font-size: 12px;
  line-height: 20px;
}
.goreg {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.goreg a {
  color: #cc3333;
}
//快速登录
.tabColor {
  height: 150px;
}
.tabButtom {
  padding-top: 15px;
  height: 300px;
  // background: #f5f5f5;
}
li {
  list-style: none;
}
.quick {
  width: 90%;
  margin: 30px auto 0;
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
  float: right;
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
  margin: 15px auto 0;
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
  width: 60%;
  border: 1px solid #d8d8d8;
  background: #fafafa;
  border-radius: 5px;
}
.huoqu {
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -17.5px;
  font-size: 10px;
  width: 23%;
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
</style>
