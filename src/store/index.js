import Vue from 'vue'
import Vuex from 'vuex'

// 安装Vuex插件  拥有了仓库
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg: true,
        arr1: [],
    },
    mutations: {
        // modifyMsg(state, obj) {
        //     state.msg += `,${obj.name}`;
        // }
    }
})
