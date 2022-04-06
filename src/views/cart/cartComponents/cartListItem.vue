<template>
    <div class="cart-list-item">
        <div class="check-wrap">
            <check-box :checked="shopInfo.checked" @click.native="checkBtn"></check-box>
        </div>
        <div class="item-image">
            <img :src="shopInfo.image" alt="">
        </div>
        <div class="desc">
            <p>{{shopInfo.title}}</p>
            <p>{{shopInfo.desc}}</p>
            <div class="money-wrap">
                <div class="money">
                    <span>￥</span>
                    <span class="many-money">{{getMoney}}</span>
                </div>
                <div class="count">x{{count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import checkBox from 'components/content/checkBtn/checkBtn';

export default {
    components: {
        checkBox
    },
    name: 'cart-list-item',
    props: {
        shopInfo: {
            type: Object,
            default() {
                return {}
            }
        },
        index: {
            type: Number
        },
    },
    data() {
        return {
            currentMoney: null,
            count: 1,
        };
    },
    computed: {
        getMoney() {
            this.currentMoney = this.shopInfo.lowNowPrice;
            this.count = this.shopInfo.count;
            if (this.currentMoney) {
                try {
                    return parseFloat(this.currentMoney) * this.count;
                } catch (error) {
                    console.log(error);
                }
            } else {
                return null
            }
        }
    },
    watch: {},
    methods: {
        checkBtn() {
            this.$store.dispatch('checkButton', this.index)
        }
    },
    created() {},
    mounted() {
    },
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
    .cart-list-item {
        display: flex;
        border-bottom: 1px solid #eee;
        padding: 12px 0;
        justify-content: space-evenly;
    }
    .item-image {
        width: 25vw;
        height: 25vw;
        border-radius: 10px;
        overflow: hidden;
        /* margin: 0 12px; */
    }
    .item-image img {
        width: 100%;
        /* height: 100%; */
    }
    .desc {
        width: 55vw;
        font-size: 12px;
    }
    .desc p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .desc p:nth-of-type(1) {
        font-weight: bold;
    }
    .desc p:nth-of-type(2) {
        color: #777;
        margin-top: 10px;
    }
    .money {
        color: var(--color-higt-text);
    }
    .money .many-money {
        font-size: 22px;
    }
    .money-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px; 
    }
    .count {
        border: 1px solid #999;
        border-radius: 3px;
        padding: 3px 4px 4px;
    }

    .check-wrap {
        display: flex;
        align-items: center;
    }
</style>