// home 页面store
export default {
    state: {
        count: 0,
        // home页面数据 名称为 home_sj
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
                categoryList:[]
            }
        },
        //home商品数据
        shangpin:{
            result:[{
                infoVos:[{
                    promotionTipList:[]
                }],
            }]
        }
    },
    mutations: {
        homemsg(state, n) {
            // 变更状态
            state.home_sj = n
        },
        goodsmsg(state,n){
            state.shangpin=n
        }
    },
    actions: {

    }
}