import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

// mall 页面store
import mall_store from './mall_store'

export default new vuex.Store({
    modules: {
        mall: mall_store
    }
})