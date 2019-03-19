import axios from 'axios'
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
        }
    },
    mutations: {},
    actions: {
        home_banner(context) {
            axios
                .get('http://localhost:3000/api/home_banner')
                .then(function (response) {
                    context.state.home_sj = response.data
                })
        },
        home_goods(context) {
            axios
                .get('http://localhost:3000/api/home_goods')
                .then(function (response) {
                    context.state.shangpin = response.data
                })
        }
    }
}