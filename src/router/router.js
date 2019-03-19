import Vue from 'vue'
import VueRouter from 'vue-router';
import one from "../components/one.vue"

Vue.use(VueRouter);

import home from "../components/one/home.vue"
import mall from "../components/one/mall.vue"
import spncart from "../components/one/spncart.vue"
import mine from "../components/one/mine.vue"
import reg from "../components/one/reg.vue"
import login from "../components/one/login.vue"
import site from "../components/one/site.vue"
import search from "../components/one/search.vue"
import Xlist from "../components/one/Xlist.vue"
let router = new VueRouter({
    routes: [{
        path: '/',
        name: "one",
        component: one,
        redirect: '/home',
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
            {
                // 我的
                path: '/reg',
                name: 'reg',
                component: reg
            },
            {
                // 我的
                path: '/login',
                name: 'login',
                component: login
            }
        ]
    }, {
        path: '/site',
        name: "site",
        component: site
    }, {
        path: '/search',
        name: "search",
        component: search
    },
    {
        path: '/Xlist',
        name: "Xlist",
        component: Xlist
    }]
});

export default router