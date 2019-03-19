import axios from 'axios'

// mall 页面store
export default {
    state: {
        hotssj: {
            data: []
        }
    },
    mutations: {
        hotssjcc(state, n) {
            // 变更状态
            state.hotssj = n;
        }
    },
    actions:{
        popularSearches(context) {
            axios
                .get('http://localhost:3000/api/popularSearches')
                .then(function (response) {
                    console.log(response)
                    console.log(context.state.mallsj)
                    context.state.hotssj = response.data
                })
        }
    }
}