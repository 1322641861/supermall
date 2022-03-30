import {ADD_COUNTER, PUSH_CART} from './mutations-types'

export default {
    [ADD_COUNTER](state, payload) {
         console.log('payload', payload);
    },
    [PUSH_CART](state, payload) {
        state.cartList.push(payload)
    }
 }