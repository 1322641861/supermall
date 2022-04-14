import {
    ADD_COUNTER, PUSH_CART, CHECK_BUTTON, CHECK_ALL,
    REDUCE_COUNTER, DEC_LOAD_COUNT, INC_LOAD_COUNT
} from './mutations-types'

export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [REDUCE_COUNTER](state, payload) {
        payload.count > 1 ? payload.count-- : payload.count = 1
    },
    [PUSH_CART](state, payload) {
        payload.count = 1
        state.cartList.push(payload)
    },
    [CHECK_BUTTON](state, payload) {
        const cartList = state.cartList[payload];
        cartList.checked = !cartList.checked
    },
    [CHECK_ALL](state, payload) {
        state.cartList.forEach(item => item.checked = payload ? false : true);
    },
    [INC_LOAD_COUNT](state, payload) {
        state.loadCount++
    },
    [DEC_LOAD_COUNT](state, payload) {
        state.loadCount--
    }
 }