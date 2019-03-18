// home 页面store
export default {
    state: {
        count: 0,
        home_sj: {
            data: {
                topUrlNew:{
                    topUrls:[]
                },
                categoryList:[],
                functionList:{
                    list:[]
                },
                specialList:{
                    list:[]
                },
            }
        }
        // home页面数据 名称为 home_sj
    },
    mutations: {
        homemsg(state, n) {
            // 变更状态
            state.home_sj = n
        }
    },
    actions: {

    }
}