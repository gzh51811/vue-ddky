import Vue from 'vue'
import App from './App.vue'
// 引入路由文件
import router from './router/router'

Vue.config.productionTip = false

//引入vant UI框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//引入ajax的axios
import axios from "axios"; 
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 把axios设置到Vue的原型对象上，方便在任意组件中使用
Vue.prototype.$axios = axios;

//引入jsonp(跨域)
//
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')

// 订单快要主题色-#F93935