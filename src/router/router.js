import Vue from 'vue'
import VueRouter from 'vue-router';
import one from "../components/one.vue"

Vue.use(VueRouter);

import home from "../components/one/home.vue"
import mall from "../components/one/mall.vue"
import spncart from "../components/one/spncart.vue"
import mine from "../components/one/mine.vue"

let router = new VueRouter({
    routes: [{
        path: '/',
        name: "one",
        component: one,
        children: [{
                // 叮当快药
                path: '/home',
                name: 'home',
                component: home
            },
            {
                // 叮当商城
                path: '/mall',
                name: 'mall',
                component: mall
            },
            {
                // 清单列表
                path: '/spncart',
                name: 'spncart',
                component: spncart
            },
            {
                // 我的
                path: '/mine',
                name: 'mine',
                component: mine
            },
        ]
    }]
});

export default router