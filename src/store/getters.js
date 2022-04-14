export default {
    cartLength(state) {
        return state.cartList.length
    },
    cartList(state) {
        return state.cartList
    },
    isCheckedAll(state) {
        let isCheckedAll = false;
        let cart = state.cartList.filter(item => !item.checked)
        isCheckedAll = (!state.cartList.length || cart.length) ? false : true;
        return isCheckedAll
    },
    getLoadStatus(state) {
        return state.loadCount > 0
    }
}