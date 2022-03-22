<template>
    <div class="detail-title">
        <div class="detail-title-wrap">
            <p>{{goods.title}}</p>
            <div class="title-des">
                <span v-show="goods.lowNowPrice">￥{{goods.lowNowPrice}}</span>
                <span v-show="goods.lowPrice">￥{{goods.lowPrice}}</span>
                <span v-show="goods.discountDesc" class="flag" :style="{backgroundColor: goods.discountBgColor}">{{goods.discountDesc}}</span>
            </div>
            <div class="columns">
                <span v-for="item in goods.columns">{{item}}</span>
            </div>
            <div class="services">
                <div v-for="service in goods.services">
                    <img :src="service.icon" alt="">
                    <span>{{service.name}}</span>
                </div>
            </div>
        </div>
        <div class="divide"></div>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'detail-title',
    props: {
        goods: {
            type: Object,
            default() {
                 return {}
            }
        },
    },
    data() {
        return {
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {
        
    },
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {
    },
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
}
</script>
<style scoped>
    .detail-title-wrap {
        margin: 10px 10px 0;
    }
    .detail-title .divide {
        margin-bottom: 15px;
    }
    .detail-title p {
        font-size: 19px;
        margin-bottom: 10px;
        padding-top: 5px;
    }
    .detail-title .columns {
        color: var(--color-text);
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid #eee;
    }
    .title-des span:nth-of-type(1) {
        color: var(--color-higt-text);
        font-size: 26px;
    }
    .title-des span:nth-of-type(2) {
        font-size: 14px;
        text-decoration: line-through;
        color: #888;
        padding: 0 5px;
    }
    .title-des span.flag {
        color: #fff;
        padding: 1px 5px 2px;
        font-size: 12px;
        border-radius: 9px;
        vertical-align: text-top;
    }

    .services {
        font-size: 13px;
        padding: 14px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        line-height: 18px;
    }
    .services img {
        width: 13px;
        height: 13px;
        margin-right: 3px;
    }
    .services span {
        vertical-align: top;
    }
</style>