<template>
    <div class="sub-detail">
        <tab-view  :tabbarList="['综合', '新品', '销量']" @tabClick="tabClick" ref="tabControl"></tab-view>
        <goods-card :goodsList="subDetail[currentType]"></goods-card>
        <div v-if="showBottomLine" class="bottom-line">我是有底线的哦</div>
    </div>
</template>

<script>
import tabView from 'components/content/homeTab/homeTabView'
import goodsCard from 'components/content/goodsCard/goodsCard'

export default {
    components: {
        tabView,
        goodsCard
    },
    name: 'sub-detail',
    props: {
        subDetail: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            currentType: 'pop',
            showGoods: []
        };
    },
    computed: {
        showBottomLine() {
            return this.subDetail[this.currentType].length > 8
        }
    },
    watch: {
    },
    methods: {
        tabClick(index) {
            switch (index) {
                case 1:
                    this.currentType = 'new'
                    break;
                case 2:
                    this.currentType = 'sell'
                    break;
                default:
                    this.currentType = 'pop'
                    break;
            }
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
</style>