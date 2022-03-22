<template>
    <div class="detail-goods-info">
        <p class="goods-key">{{detailImage.key}}</p>
        <ul class="goods-img">
            <li v-for="item in detailImage.list">
                <img :src="item" @load="goodsInfoLoad">
            </li>
        </ul>
        <!-- <div class="goods-des">
            <p>具体描述</p>
            <p>{{detailInfo.desc}}</p>
        </div> -->
    </div>
</template>

<script>

export default {
    components: {},
    name: 'detail-goods-info',
    props: {
        detailInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            detailImage: {},
            counter: 0,
            imageLength: 0
        };
    },
    computed: {
    },
    watch: {
        detailInfo() {
            this.detailImage = this.detailInfo.detailImage && this.detailInfo.detailImage[0]
            this.imageLength = this.detailImage.list.length
        }
    },
    methods: {
        goodsInfoLoad() {
            ++this.counter
            if (this.counter % 6 === 0 || this.counter === this.imageLength) this.$emit('goodsInfoLoad')
        }
    },
    created() {
    },
    mounted() {
    },
    beforeCreate() {},
    beforeMount() {
    },
    beforeUpdate() {
        
    },
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
    .goods-img img {
        width: 100%;
    }
    .goods-key {
        margin: 15px 10px 10px;
        text-align: center;
        font-weight: bold;
    }
</style>