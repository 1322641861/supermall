import Vue from "vue"
import vuex from "vuex"

import actions from './actions'
import mutations from './mutations'

Vue.use(vuex)

const state = {
    cartList: []
}

// 创建store实例
const store = new vuex.Store({
    state, 
    mutations,
    actions
})

export default store