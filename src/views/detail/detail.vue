<template>
    <div class="detail">
        <detail-nav></detail-nav>
        <detail-swiper :imageList="imageList"></detail-swiper>
        <detail-title :goods="goods"></detail-title>
        <shop-info :shopInfo="shopInfo"></shop-info>
    </div>
</template>

<script>
import detailNav from "./detailComps/detailNav"
import detailSwiper from "./detailComps/detailSwiper"
import detailTitle from "./detailComps/detailTitle"
import shopInfo from "./detailComps/shopInfo"

import { getDetail, Goods, ShopInfo } from "@/networks/detail"

export default {
    components: {
        detailNav,
        detailSwiper,
        detailTitle,
        shopInfo
    },
    name: 'detail',
    data() {
        return {
            iid: null,
            imageList: [],
            shopInfo: {},
            goods: {}
        };
    },
    computed: {},
    watch: {},
    methods: {
        getDetail() {
            getDetail(this.iid).then((res) => {
                if (res && res.result) {
                    /// 轮播图
                    this.imageList = res.result.itemInfo?.topImages ?? []
                    /// 获取店铺信息
                    this.shopInfo = new ShopInfo(res.result.shopInfo)
                    this.goods = new Goods(
                        res.result.itemInfo,
                        res.result.columns,
                        this.shopInfo.services
                    )
                    console.log(this.shopInfo, res.result, this.goods);
                }
            })
        }
    },
    created() {
        this.iid = this.$route.params.iid
        
        this.getDetail()
    },
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
</style>