import Vue from 'vue'
import App from './App.vue'
// 引入路由文件
import router from './router/router'


Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

import {
  Lazyload
} from 'vant';

//vuex
import store from './store'

import axios from 'axios'

Vue.prototype.$axios = axios;
// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.use(Vant);


//引入jsonp(跨域)
// import jsonp from './assets/js/jsonpfz.js';

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')

// 订单快要主题色-#F93935