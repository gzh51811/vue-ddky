<template>
    <div class="tabone">
                <div class="tabColor">
                    <li class="quick">
                      <input type="text" name="" placeholder="请输入手机号码" id="user" v-model="phoneNum" @change="phone">
                      <i class="clear-tel" @click="clear"><img src="https://img.ddky.com/c/wap/images/wap/clear-tel.png" alt=""></i>
                      </li>
                      <span class="span">{{shuoming}}</span>
                      <li class="pwdLogin">
                            <input type="password" name="" placeholder="请设置密码" class="pwd" v-model="pswNum" @change="psw">
                      </li>
                      <span class="span">{{jieshi}}</span>
                      <li class="cl-li">
                          <input type="text" name="" placeholder="请输入收到的验证码" id="smsCode" class="smsCode">
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
                    <div class="login-btnbox cl" @click="reg()">
                      <p class="btn-login">注册</p>
                    </div>
                </div>
            </div>
</template>
<script>
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import { constants } from 'fs';
// import func from './vue-temp/vue-editor-bridge';
export default {
  data(){
    return{
      phoneNum:'',
      pswNum:'',
      shuoming:'',
      jieshi:'',
    }
  },
  methods:{
    clear(){
      this.phoneNum='';
    },
    //手机号码验证
    phone(){
      this.shuoming='';
      if(this.phoneNum){
          if(!/^1[3456789]\d{9}$/.test(this.phoneNum)){
              this.shuoming="手机号码不正确，请重新输入"
          }else{
            this.shuoming='';
          }
      }else{
        this.shuoming='请输入手机号码'
      }
      },
    //密码验证
    psw(){
      this.jieshi='';
      if(this.pswNum){
        if(!/^[\u4e00-\u9fa5a-zA-Z0-9]{6,}$/.test(this.pswNum)){
          this.jieshi="您设置的密码格式不符合规则"
        }else{
          this.jieshi="";
        }
      }else{
        this.jieshi="请设置密码"
      }
    },
      reg(){
        if(this.phoneNum && this.pswNum){ 
          // axios.get('http://localhost:1811/vue-ddky/src/api/reg.php')
          // .then(function(res){
          //    console.log(res);
          //       if(this.phoneNum == res.phoneNum){
          //         alert('重复')
          //       }
          // })
        var params = new URLSearchParams();
        params.append("phoneNum", this.phoneNum); //你要传给后台的参数值 key/value
        params.append("pswNum", this.pswNum);
        this.$axios({
            method: "post",
            url: "http://localhost:1811/vue-ddky/src/api/reg1.php",
            data: params
        }).then(res => {
          // console.log(res)
           if(res.data=="no"){//用户名不存在
           alert('恭喜你注册成功！')
            params.append("phoneNum", this.phoneNum); //你要传给后台的参数值 key/value
            params.append("pswNum", this.pswNum);
            // console.log(this.phoneNum)
              this.$axios({
                method:'post',
                url:"http://localhost:1811/vue-ddky/src/api/reg2.php",
                data:params
              }).then(res=>{
                // console.log(res)
                this.$router.push('/login');
              })
           }else{
              alert('该用户名已存在，请换个账号或直接登录')
           }
        });


        

          
        }else{
          alert('请完善您的信息')
        }
      },
    },
    
}

</script>
<style lang="less" scoped>
.tabColor {
  height: 200px;
}
.tabButtom{
   padding-top: 15px;
    height: 300px;
    // background: #f5f5f5;
}
li {
  list-style: none;
}
.span{
  font-size: 10px;
  padding-left:5%;
  color:#cc3333;
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
li .smsCode{
  display: inline-block;
  width: 50%;
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
    width: 87px;
    height: 34.5px;
    border-radius: 5px;
    line-height: 38px;
    color: #fff;
    text-align: center;
    background: #F08800;
}
.voiceYanzheng{
    font-size: 12px;
    text-align: center;
    padding-right: 10px;
    margin-top: 20px;
    color: #9b9b9b;
}
.voiceYanzheng a{
    color:#cc3333;
}
.login-btnbox{
  width:80%;
  margin:0 auto;
  background:#cc3333;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  font-size: 13px;
  color:#fff;
}
.pwdLogin{
    width: 90%;
    margin: 5px auto 0;
    font-size: 16px;
    line-height: 34.5px;
    border: 1px solid #d8d8d8;
    position: relative;
    background: #fafafa;
    border-radius: 5px;
}
.pwdLogin input{
  font-size: 12px;
    line-height: 18px;
    padding: 8px 20px;
    border: none;
    display: inline-block;
    background: #fafafa;
    // width: -webkit-calc(100% - 100px);
}
</style>

