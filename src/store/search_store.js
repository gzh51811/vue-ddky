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
    }
}