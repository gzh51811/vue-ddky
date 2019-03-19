import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
Vue.use(vuex);

// mall 页面store
import mall_store from './mall_store'
//home页面store
import home_store from './home_store'
// 页面请求链接
import RequestLink_store from './RequestLink_store'
// 搜索页面数据
import search_store from './search_store'
import {
    nearer
} from 'q';
export default new vuex.Store({
    modules: {
        mall: mall_store,
        homemsg: home_store,
        RequestLink_store: RequestLink_store,
        search_store: search_store
    },
    state: {
        severhttp: "http://localhost:3000/",
        usern: ""
    },
    getters: {
        severhttp(state) {
            return state.severhttp
        },
        usern(state) {
            return state.usern
        }
    },
    mutations: {

    },
    actions: {
        usernc(context, n) {
            console.log(n)
            axios
                .get(context.state.severhttp + 'api/login', {
                    params: {
                        phoneNum: n.phoneNum,
                        pswNum: n.pswNum
                    }
                })
                .then(function (response) {
                    if (response.data == "ok") {
                        console.log(response.data);
                        console.log(context.state)
                        context.state.usern = n.phoneNum;
                        xr("usern", n.phoneNum, 10, "/")
                        // 写入cookie
                        //写入cookie文件 传入参数为名称，值，保存时间(以天数为单位)，读取域
                        function xr(cname, cvalue, ctime, cy) {
                            //生成到期时间
                            //获取当前时间
                            var ds = new Date();
                            //计算到期时间
                            ds.setTime(ds.getTime() + (ctime * 1000 * 60 * 60 * 24));
                            //合成时间写入字符
                            var expires = "expires=" + ds.toGMTString();
                            document.cookie = cname + "=" + cvalue + ";" + expires + '; path=' + cy;
                            return '写入成功';
                        }


                    } else {
                        console.log(response.data);
                        console.log("登陆失败")
                        context.state.usern = "";
                    }
                })
        },
        tcusern(context) {
            // 发送退出请求
            axios
                .get(context.state.severhttp + 'api/tc')
                .then(function (response) {
                    context.state.usern = "";
                    sc("usern")
                    function sc(cname) {
                        document.cookie = cname + "=" + ";" + 'expires=Thu, 01 Jan 1970 00:00:00 GMT' + "; path=/";
                        return '删除成功';
                    }
                })
        }
    }
})