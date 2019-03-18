import Vue from 'vue'
import App from './App.vue'
// 引入路由文件
import router from './router/router'

Vue.config.productionTip = false

import Vant from 'vant';
import axios from "axios";
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')

// 订单快要主题色-#F93935