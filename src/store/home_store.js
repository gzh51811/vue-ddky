import axios from 'axios'
import index from './index'
// home 页面store
export default {
    state: {
        count: 0,
        // home页面数据 名称为 home_sj
        home_sj: {
            data: {
                topUrlNew: {
                    topUrls: []
                },
                categoryList: [],
                functionList: {
                    list: []
                },
                specialList: {
                    list: []
                },
                categoryList: []
            },
        },
        //home商品数据
        shangpin: {
            result: [{
                infoVos: [{
                    promotionTipList: []
                }],
            }]
        },
        shoplists: {

        }
    },
    getters: {
        shoplists(state) {
            return state.shoplists
        }
    },
    mutations: {},
    actions: {
        home_banner(context) {
            axios
                .get(index.getters.severhttp + 'api/home_banner')
                .then(function (response) {
                    context.state.home_sj = response.data
                })
        },
        home_goods(context) {
            axios
                .get(index.getters.severhttp + 'api/home_goods')
                .then(function (response) {
                    context.state.shangpin = response.data
                })
        },
        shoplists(context) {
            axios
                .get(index.getters.severhttp + 'api/shoplists')
                .then(function (response) {
                    context.state.shoplists = response.data
                    console.log(context.state.shoplists)
                })
        }
    }
}