<template>
    <div class="operation-bar">
        <div class="operate-wrap">
            <div v-for="item in operation" class="operate-btn" @click="item.operateFn">
                <img :src="item.src" alt="">
                <span>{{item.name}}</span>
            </div>
            <div class="cart-buy">
                <span class="card" @click="addToCart">加入购物车</span>
                <span class="buy" @click="buy">立即购买</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'operation-bar',
    data() {
        return {
            operation: [
                {
                    name: '店铺',
                    src: require('@/assets/images/common/shop.png'),
                    operateFn() {
                        console.log(111);
                    }
                }, {
                    name: '客服',
                    src: require('@/assets/images/common/service.png'),
                    operateFn() {
                        console.log(111);
                    }
                }, {
                    name: '收藏',
                    src: require('@/assets/images/common/collect.png'),
                    operateFn() {
                        console.log(111);
                    }
                },
            ]
        };
    },
    computed: {},
    watch: {},
    methods: {
        addToCart() {
            this.$emit('addToCart')
        },
        buy() {
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
    .operation-bar {
        position: fixed;
        bottom: 0;
        z-index: 4;
        left: 0;
        right: 0;
        background: #fff;
        box-shadow: 0 0 3px rgb(0 0 0 / 10%);
    }
    .operate-wrap {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
    }

    .operate-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 13px;
    }
    .operate-btn img {
        width: 20px;
        margin-bottom: 4px;
    }
    .cart-buy {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        font-size: 14px;
        color: #fff;
        overflow: hidden;
        background-color: #f77505;
        font-weight: bold;
    }
    .cart-buy span {
        padding: 12px 0;
        width: 100px;
        text-align: center;
    }
    .cart-buy .card {
        background-image: linear-gradient(to right, #f5d45f, #ff8d00);
    }
    .cart-buy .buy {
        background-image: linear-gradient(to right, #f77505, red);
    }
</style>