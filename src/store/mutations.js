import {ADD_COUNTER, PUSH_CART, CHECK_BUTTON, CHECK_ALL,
    REDUCE_COUNTER
} from './mutations-types'

export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [REDUCE_COUNTER](state, payload) {
        payload.count > 1 ? payload.count-- : payload.count = 1
    },
    [PUSH_CART](state, payload) {
        state.cartList.push(payload)
    },
    [CHECK_BUTTON](state, payload) {
        const cartList = state.cartList[payload];
        cartList.checked = !cartList.checked
    },
    [CHECK_ALL](state, payload) {
        state.cartList.forEach(item => item.checked = payload ? false : true);
    },
 }