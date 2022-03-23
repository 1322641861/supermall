<template>
    <div class="detail">
        <detail-nav></detail-nav>
        <Scroll :redundantHeight="44" :probeType="3" @scroll="emitScroll" ref="scroll">
            <div v-show="!notData">
                <detail-swiper :imageList="imageList"></detail-swiper>
                <detail-title :goods="goods"></detail-title>
                <shop-info :shopInfo="shopInfo"></shop-info>
                <div class="divide"></div>
                <detail-goods-info :detailInfo="detailInfo" @goodsInfoLoad="goodsInfoLoad"></detail-goods-info>
                <detail-params :itemParams="itemParams" @infoImgLoad="infoImgLoad"></detail-params>
                <detail-comment :rate="rate"></detail-comment>
            </div>
            <detail-recommend :recommend="recommend"></detail-recommend>
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
    import detailRecommend from "./detailComps/detailRecommend"

    import Scroll from "components/common/scroll/Scroll"
    import scrollTop from "components/content/scroll/scrollTop"
    import { getDetail, Goods, ShopInfo, getRecommend, Recommend } from "@/networks/detail"
    import {itemListenerMixin} from "common/mixin"

    export default {
        components: {
            detailNav,
            detailSwiper,
            detailTitle,
            shopInfo,
            detailGoodsInfo,
            detailParams,
            detailComment,
            detailRecommend,
            Scroll,
            scrollTop
        },
        name: 'detail',
        mixins: [itemListenerMixin],
        data() {
            return {
                iid: null,
                imageList: [],
                shopInfo: {},
                goods: {}, 
                detailInfo: {}, // 穿着效果
                isShowBtn: false, 
                itemParams: {}, // 参数
                rate: {}, // 评论
                recommend: [],
                notData: false,
            };
        },
        computed: {},
        watch: {},
        methods: {
            getDetail() {
                getDetail(this.iid).then((res, req) => {
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
                        this.notData = false
                    } else {
                        this.notData = true
                    }
                })
            },
            getRecommend() {
                getRecommend().then(res => {
                    if (res && res.data) {
                        res.data.list.forEach(item => {
                            this.recommend.push(new Recommend(item))
                        });
                    }
                })
            },
            /// detailGoodsInfo
            goodsInfoLoad() {
                this.$refs.scroll.refresh()
            },
            emitScroll(p) {
                this.isShowBtn = p.y < -800 ? true : false;
            },
            toTop() {
                this.$refs.scroll.scrollTo(0, 0)
            },
            /// detailParams
            infoImgLoad() {
                /// 监听推荐图片, 这里可以不监听, 节省性能
                // this.$refs.scroll.refresh()
            }
        },
        created() {
            this.iid = this.$route.params.iid

            this.getDetail()
            this.getRecommend()
        },
        mounted() {
        },
        beforeCreate() { },
        beforeMount() { },
        beforeUpdate() { },
        updated() { },
        beforeDestroy() { },
        destroyed() {
            // 关闭全局监听
            this.$bus.$off('imgUpdated', this.itemImgLoad)
        },
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