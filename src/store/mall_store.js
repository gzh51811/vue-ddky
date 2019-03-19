import axios from 'axios'
// mall 页面store
export default {
    state: {
        // mall页面数据 名称为 mallsj
        mallsj: {
            data: {
                mallBannerModule: {
                    topUrls: []
                }
            }
        },
        // mall页面数据 名称为 mallsj
        cate: {
            data: {
                ueugList: []
            }
        }
    },
    mutations: {

    },
    actions: {
        mall_banner(context) {
            // 异步请求存储 mall轮播图数据
            axios
                .get('http://localhost:3000/api/mall_banner')
                .then(function (response) {
                    console.log(response)
                    console.log(context.state.mallsj)
                    context.state.mallsj = response.data
                })
        },
        mall_category(context) {
            axios
                .get('http://localhost:3000/api/mall_category')
                .then(function (response) {
                    console.log(response)
                    console.log(context.state.mallsj)
                    context.state.cate = response.data
                })
        }
    }
}