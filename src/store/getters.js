export default {
    cartLength(state) {
        return state.cartList.length
    },
    cartList(state) {
        return state.cartList
    },
    computeTotal(state) {
        let total = 0;
        try {
            for (const item of state.cartList) {
                if (item.checked) {
                    total += parseFloat(item.lowNowPrice) * item.count
                }
            }
            // state.cartList
            //     .filter(item => item.checked)
            //     .reduce((pre, item) => pre + parseFloat(item.lowNowPrice) * item.count)
        } catch (error) {
            console.log(error);
        }
        return total
    },
    isCheckedAll(state) {
        let isCheckedAll = false;
        let cart = state.cartList.filter(item => !item.checked)
        isCheckedAll = !state.cartList.length || cart.length ? false : true;
        return isCheckedAll
    }
}