import {
    ADD_COUNTER, PUSH_CART, CHECK_BUTTON, CHECK_ALL,
    REDUCE_COUNTER, INC_LOAD_COUNT, DEC_LOAD_COUNT
} from './mutations-types'

export default {
    addCart(context, payload) { 
        return new Promise((res) => {
            const oldPayload = context.state.cartList.find(item => item.iid === payload.iid)
        
            if (oldPayload) {
                context.commit(ADD_COUNTER, oldPayload)
            } else {
                context.commit(PUSH_CART, payload)
            }
            res()
        }) 
    },
    reduceCart(context, payload) {
        return new Promise(res => {
            const oldPayload = context.state.cartList.find(item => item.iid === payload.iid)
            context.commit(REDUCE_COUNTER, oldPayload)
            res()
        })
    },
    checkButton(context, payload) {
        context.commit(CHECK_BUTTON, payload)
    },
    checkAll(context) {
        context.commit(CHECK_ALL, context.getters.isCheckedAll);
    },
    incLoadCount(context) {
        context.commit(INC_LOAD_COUNT)
    },
    decLoadCount(context) {
        context.commit(DEC_LOAD_COUNT)
    }
}