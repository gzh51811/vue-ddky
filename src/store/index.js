import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

// mall 页面store
import mall_store from './mall_store'
//home页面
import home_store from './home_store.js'

export default new vuex.Store({
    modules: {
        mall: mall_store,
        home:home_store
    }
})
