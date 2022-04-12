<template>
    <div class="cart">
        <navbar>
            <div slot="center">购物车
                <span class="title">({{cartLength}})</span>
            </div>
        </navbar>
        <Scroll :redundantHeight="144" v-if="cartLength">
            <cart-list-item v-for="(item, index) in cartList" :key="item.iid" :index="index" :shopInfo="item"></cart-list-item>
        </Scroll>
        <no-data v-else></no-data>
        <bottom-nav :total="computeTotal" :checkedNum="checkedNum" :cartLength="cartLength"></bottom-nav>
    </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import Scroll from 'components/common/scroll/Scroll'
import noData from 'components/content/noData/noData'
import bottomNav from './cartComponents/bottomNav'
import cartListItem from './cartComponents/cartListItem'
import { mapGetters } from "vuex"

export default {
    components: {
        navbar,
        Scroll,
        noData,
        bottomNav,
        cartListItem,
    },
    name: 'cart',
    data() {
        return {
            checkedNum: 0
        };
    },
    computed: {
        /// 通过vuex中的map, 自动解析computed属性
        // ...mapGetters({
        //     cartLength: 'cartLength',
        //     cartList: 'cartList'
        // })
        ...mapGetters(['cartLength', 'cartList']),
        computeTotal() {
            let total = 0
            let num = 0;
            try {
                for (const item of this.cartList) {
                    if (item.checked) {
                        total += parseFloat(item.lowNowPrice).toFixed(2) * item.count
                        num++
                    }
                }
                // state.cartList
                //     .filter(item => item.checked)
                //     .reduce((pre, item) => pre + parseFloat(item.lowNowPrice) * item.count)
            } catch (error) {
                console.log(error);
            }
            this.checkedNum = num
            return total
        },
    },
    watch: {},
    methods: {
    },
    created() {
    },
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {
    },
    beforeDestroy() {},
    destroyed() {
    },
    activated() {
    },
}
</script>
<style scoped>
    .title {
        font-weight: normal;
    }
    .no-data {
        height: calc(100vh - 144px)!important;
    }
</style>