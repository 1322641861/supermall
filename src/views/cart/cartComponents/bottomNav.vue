<template>
    <div class="cart-nav">
        <div class="check-all" @click="checkAll" v-if="cartLength">
            <check-box :checked="isCheckedAll"></check-box>
            <span>全选</span>
        </div>
        <div class="right-btn">
           <div class="compute">
                <span>合计:</span>
                <span class="sign">￥</span>
                <span class="total">{{total}}</span>
            </div>
            <div class="buy deep-linear-color">结算</div> 
        </div>
        
    </div>
</template>

<script>
import checkBox from 'components/content/checkBtn/checkBtn'
import {mapGetters} from 'vuex'

export default {
    components: {checkBox},
    name: 'cart-nav',
    props: {
        total: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters({
            isCheckedAll: 'isCheckedAll',
            cartLength: 'cartLength'
        })
    },
    watch: {},
    methods: {
        checkAll() {
            this.$store.dispatch('checkAll')
        }
    },
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
}
</script>
<style scoped>
    .cart-nav {
        height: 50px;
        box-shadow: 0px -1px 3px rgb(0 0 0 / 4%);
        margin: 0 12px;
        background: #fff;
        position: relative;
    }
    .buy {
        color: #fff;
        padding: 8px 0;
        border-radius: 20px;
        width: 80px;
        text-align: center;
        margin-left: 5px;
    }
    .right-btn {
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .compute {
        font-size: 12px;
    }
    .compute .sign {
        color: var(--color-higt-text);
    }
    .compute .total {
        color: var(--color-higt-text);
        font-size: 20px;
        /* font-weight: bold; */
    }
    .check-all {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666;
        font-size: 12px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
    .check-all span {
        padding-left: 5px;
    }
</style>