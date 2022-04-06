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
        <bottom-nav :total="computeTotal"></bottom-nav>
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
        };
    },
    computed: {
        /// 通过vuex中的map, 自动解析computed属性
        // ...mapGetters({
        //     cartLength: 'cartLength',
        //     cartList: 'cartList'
        // })
        ...mapGetters(['cartLength', 'cartList', 'computeTotal']),
    },
    watch: {},
    methods: {},
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
        console.log('destroyed');
    },
    activated() {
        console.log(this.$store, this.$store.state.cartList);
        console.log('activated');
    },
}
</script>
<style scoped>
    .title {
        font-weight: normal;
    }
    .no-data {
        height: calc(100vh - 144px);
    }
</style>