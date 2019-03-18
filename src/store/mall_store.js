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
            data:{
                ueugList:[] 
            }
        }
    },
    mutations: {
        mallsjcc(state, n) {
            // 变更状态
            state.mallsj = n;
            // console.log("mall页面数据vuex存储完成")
        },
        categorysj(state, n) {
            // 变更状态
            state.cate = n;
            // console.log("mall页面数据vuex存储完成")
        }
    },
    actions: {

    }
}