<template>
    <div class="detail">
        <detail-nav></detail-nav>
        <Scroll :redundantHeight="44" :probeType="3" @scroll="emitScroll" ref="detailScroll">
            <detail-swiper :imageList="imageList"></detail-swiper>
            <detail-title :goods="goods"></detail-title>
            <shop-info :shopInfo="shopInfo"></shop-info>
            <div class="divide"></div>
            <detail-goods-info :detailInfo="detailInfo" @goodsInfoLoad="goodsInfoLoad"></detail-goods-info>
            <detail-params :itemParams="itemParams" @infoImgLoad="infoImgLoad"></detail-params>
        </Scroll>
        <scroll-top :isShow="isShowBtn" @click.native="toTop"></scroll-top>
    </div>
</template>

<script>
    import detailNav from "./detailComps/detailNav"
    import detailSwiper from "./detailComps/detailSwiper"
    import detailTitle from "./detailComps/detailTitle"
    import shopInfo from "./detailComps/shopInfo"
    import detailGoodsInfo from "./detailComps/detailGoodsInfo"
    import detailParams from "./detailComps/detailParams"
    import detailComment from "./detailComps/detailComment"

    import Scroll from "components/common/scroll/Scroll"
    import scrollTop from "components/content/scroll/scrollTop"
    import { getDetail, Goods, ShopInfo } from "@/networks/detail"
    import {debounce} from "common/utils"

    export default {
        components: {
            detailNav,
            detailSwiper,
            detailTitle,
            shopInfo,
            detailGoodsInfo,
            detailParams,
            detailComment,
            Scroll,
            scrollTop
        },
        name: 'detail',
        data() {
            return {
                iid: null,
                imageList: [],
                shopInfo: {},
                goods: {}, 
                detailInfo: {}, // 穿着效果
                isShowBtn: false, 
                itemParams: {}, // 参数
                rate: {} // 评论
            };
        },
        computed: {},
        watch: {},
        methods: {
            getDetail() {
                getDetail(this.iid).then((res) => {
                    if (res && res.result) {
                        const result = res.result
                        /// 轮播图
                        this.imageList = result.itemInfo?.topImages ?? []
                        /// 获取店铺信息
                        this.shopInfo = new ShopInfo(result.shopInfo)
                        this.goods = new Goods(
                            result.itemInfo,
                            result.columns,
                            this.shopInfo.services
                        )
                        this.detailInfo = result.detailInfo
                        this.itemParams = result.itemParams
                        this.rate = result.rate
                        console.log(result, this.rate);
                    }
                })
            },
            /// detailGoodsInfo
            goodsInfoLoad() {
                this.$refs.detailScroll.refresh()
            },
            emitScroll(p) {
                this.isShowBtn = p.y < -800 ? true : false;
            },
            toTop() {
                this.$refs.detailScroll.scrollTo(0, 0)
            },
            /// detailParams
            infoImgLoad() {
                this.$refs.detailScroll.refresh()
            }
        },
        created() {
            this.iid = this.$route.params.iid

            this.getDetail()
        },
        mounted() { },
        beforeCreate() { },
        beforeMount() { },
        beforeUpdate() { },
        updated() { },
        beforeDestroy() { },
        destroyed() { },
        activated() { },
    }
</script>
<style scoped>
    .detail-nav {
        height: 44px;
        position: relative;
        width: 100vw;
        z-index: 3;
    }

    .detail {
        height: 100vh;
    }
</style>