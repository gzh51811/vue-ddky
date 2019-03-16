import Vue from 'vue'
import App from './App.vue'
// 引入路由文件
import router from './router/router'
// 引入axios  
import  Axios from 'axios'
Vue.prototype.$axios=Axios// axios 挂载到vue的实例上 这样他的拓展实例  组件也有$axios
//vuex全局
import  store from './store'


Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

new Vue({
  render: h => h(App),
  router: router,
  store:store,
  Axios:Axios,
}).$mount('#app')

// 订单快要主题色-#F93935