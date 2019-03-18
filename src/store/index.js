import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

// mall 页面store
import mall_store from './mall_store'
//home页面store
import home_store from './home_store'
// 页面请求链接
import RequestLink_store from './RequestLink_store'
export default new vuex.Store({
    modules: {
        mall: mall_store,
        homemsg:home_store,
        RequestLink_store: RequestLink_store,
    }
})
