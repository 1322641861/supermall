import {ADD_COUNTER, PUSH_CART, CHECK_BUTTON, CHECK_ALL} from './mutations-types'

export default {
    addCart(context, payload) { 
        return new Promise((res) => {
            const oldPayload = context.state.cartList.find(item => item.iid === payload.iid)
        
            if (oldPayload) {
                context.commit(ADD_COUNTER, oldPayload)
            } else {
                payload.count = 1
                context.commit(PUSH_CART, payload)
            }
            res()
        }) 
    },
    checkButton(context, payload) {
        context.commit(CHECK_BUTTON, payload)
    },
    checkAll(context) {
        context.commit(CHECK_ALL, context.getters.isCheckedAll);
    },
}