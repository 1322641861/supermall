<template>
    <div class="card-item">
        <a href="cardData.link">
            <div class="card-img">
                <img :src="cardData.show.img" alt="">
            </div>
            <div class="card-text">
                <p>{{cardData.title}}</p>
            </div>
            <div class="card-features">
                <span class="card-price"><span>￥</span>{{cardData.price}}</span>
                <span class="card-collect">
                    <img src="~assets/images/common/collect.png" alt="">
                    <!-- <img src="" alt=""> -->
                    <span>{{cardData.cfav}}</span>
                </span>
            </div>
        </a>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'card-item',
    props: {
        cardData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {},
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
    .card-item {
        background: #fff;
        border-radius: 4px;
        margin: 1px 3px 4px;
        overflow: hidden;
    }
    .card-img img {
        width: 100%;
    }
    .card-text {
        padding: 2px 5px;
        font-size: 12px;
    }
    .card-text p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .card-price {
        color: #f85757ec;
        font-size: 14px;
    }
    .card-price span,
    .card-collect span {
        font-size: 12px;
    }
    .card-features {
        padding: 4px 5px;
    }
    .card-collect {
        float: right;
    }
    .card-collect img {
        width: 18px;
        vertical-align: middle;
    }
</style>