<template>
    <div class="detail-recommend">
        <div class="recommend-title">
            <span>看了又看</span>
        </div>
        <div class="recommend-card">
            <goods-card :goodsList="recommend"></goods-card>
        </div>
    </div>
</template>

<script>
import goodsCard from "components/content/goodsCard/goodsCard"

export default {
    components: {
        goodsCard
    },
    name: 'detail-recommend',
    props: {
        recommend: {
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
    .detail-recommend {
        overflow: hidden;
        background: var(--color-background);
    }
    .recommend-title {
        text-align: center;
        color: var(--color-theme);
        margin: 17px 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .recommend-title::before,
    .recommend-title::after {
        content: '';
        width: 20px;
        height: 1px;
        background: var(--color-theme);
        display: inline-block;
    }
    .recommend-title::before {
        margin-right: 10px;
    }
    .recommend-title::after {
        margin-left: 10px;
    }
    .recommend-card {
        margin: 0 2px;
    }
</style>