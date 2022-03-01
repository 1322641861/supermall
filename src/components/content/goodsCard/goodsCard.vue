<template>
    <div class="goods-card">
       <div class="card-wrap" v-for="(item, index) in goodsList">
           <card-item :cardData="item"></card-item>
       </div>
    </div>
</template>

<script>
import cardItem from './goodsCardItem'

export default {
    components: {cardItem},
    name: 'goods-card',
    props: {
        goodsList: {
            type: Array,
            default() {
                return []
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
    .goods-card {
        padding: 5px;
    }
    .card-wrap {
        display: inline-block;
        width: 50%;
    }
</style>