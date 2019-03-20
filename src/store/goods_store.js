import axios from 'axios'
import index from './index'
// home 页面store
export default {
    state: {
        goodssj: {
            data:{
                detail:{
                    imgUrls:[],
                    deliveryInfo:{
                        typeText:{}
                    }
                }
            },
            instructionsImg:{
                instruction:[{
                    imgs:{} 
                }] 
            }
        }
    },
    getters: {
        goodssj(state) {
            return state.goodssj
        }
    },
    mutations: {

    },
    actions: {
        goodssj(context) {
            axios
                .get(index.getters.severhttp + 'api/goods')
                .then(function (response) {
                    context.state.goodssj = response.data
                })
        }
    }
}