import {ADD_COUNTER, PUSH_CART} from './mutations-types'

export default {
    addCart(context, payload) {                 
        const oldPayload = context.state.cartList.find(item => item.iid === payload.iid)
        
        if (oldPayload) {
            context.commit(ADD_COUNTER, oldPayload)
        } else {
            payload.count = 1
            context.commit(PUSH_CART, payload)
        }
    }
}