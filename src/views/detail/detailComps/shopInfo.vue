<template>
    <div class="shop-info" v-if="Object.keys(shopInfo).length">
        <div class="shop-img">
            <img :src="shopInfo.shopLogo" alt="">
            <span>{{shopInfo.name}}</span>
        </div>
        <div class="shop-des">
            <div class="des-left">
                <div>
                    <div>{{shopInfo.cSells}}</div>
                    <div>总销量</div>
                </div>
                <div>
                    <div>{{shopInfo.cGoods}}</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="des-right">
                <table class="des-table">
                    <tr v-for="item in score">
                        <td class="s-name">{{item.name}}</td>
                        <td class="s-score" :style="getBetterColor(item.isBetter)">{{item.score}}</td>
                        <td class="is-better">
                            <span :style="getBetterBgColor(item.isBetter)">{{item.isBetter ? "高" : "低"}}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="btn">
            <button @click="goShop">进店逛逛</button>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'shop-info',
    props: {
        shopInfo: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            score: [],
            isBetterColor: "#f53232",
            notBetterColor: "#18b518"
        };
    },
    computed: {},
    watch: {
        shopInfo() {
            this.score = this.shopInfo.score
        }
    },
    methods: {
        goShop() {
            window.location.href = this.shopInfo.shopUrl
        },
        getBetterColor(isBetter) {
            return {color: isBetter ? this.isBetterColor : this.notBetterColor}
        },
        getBetterBgColor(isBetter) {
            return {backgroundColor: isBetter ? this.isBetterColor : this.notBetterColor}
        }
    },
    created() {
    },
    mounted() {
    },
    beforeCreate() {
    },
    beforeMount() {
    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeDestroy() {},
    destroyed() {},
    activated() {
    },
}
</script>
<style scoped>
    .shop-info {
        padding: 6px 0 24px;
        border-bottom: 1px solid #EEE;
        margin: 0 10px;
    }
    .shop-img {
        display: flex;
        justify-content: left;
        align-items: center;
    }
    .shop-img img {
        width: 50px;
        background: #eee;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-right: 10px;
    }
    .shop-img span {
        color: #444;
        font-size: 18px;
        font-weight: bold;
    }

    .shop-info .btn {
        text-align: center;
        margin-top: 12px;
    }
    .shop-info .btn button {
        padding: 8px 28px;
        border: none;
        border-radius: 6px;
        font-size: 15px;
        color: #777;
        background: #f0f2f7;
    }

    .shop-des {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 24px;
    }
    .des-left {
        display: flex;
        justify-content: space-around;
        border-right: 1px solid #ddd;
        width: 50%;
        box-sizing: border-box;
        text-align: center;
    }
    .des-right {
        text-align: center;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
    }
    .des-right div {
        display: flex;
        justify-content: space-between;
    }

    .des-table {
        box-sizing: content-box;
    }
    .des-table td {
        padding: 0 3px;
    }
    .s-score {
        text-align: left;
    }
    .is-better {
        color: #fff;
    }
    .is-better span {
        padding: 0 1px;
    }
</style>