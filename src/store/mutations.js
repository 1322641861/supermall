import {ADD_COUNTER, PUSH_CART, CHECK_BUTTON, CHECK_ALL} from './mutations-types'

export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [PUSH_CART](state, payload) {
        state.cartList.push(payload)
    },
    [CHECK_BUTTON](state, payload) {
        const cartList = state.cartList[payload];
        cartList.checked = !cartList.checked
    },
    [CHECK_ALL](state, payload) {
        state.cartList.forEach((item, index) => {
            state.cartList[index].checked = payload ? false : true
        });
    }
 }