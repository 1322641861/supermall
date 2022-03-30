<template>
    <div class="detail">
        <detail-nav ref="nav" @emitTabClick="emitTabClick"></detail-nav>
        <Scroll :probeType="3" @scroll="emitScroll" ref="scroll">
            <div v-show="!notData">
                <detail-swiper :imageList="imageList"></detail-swiper>
                <detail-title :goods="goods"></detail-title>
                <shop-info :shopInfo="shopInfo"></shop-info>
                <div class="divide"></div>
                <detail-goods-info :detailInfo="detailInfo" @goodsInfoLoad="goodsInfoLoad"></detail-goods-info>
                <detail-params ref="params" :itemParams="itemParams" @infoImgLoad="infoImgLoad"></detail-params>
                <detail-comment ref="comment" :rate="rate"></detail-comment>
            </div>
            <detail-recommend ref="recommend" :recommend="recommend"></detail-recommend>
        </Scroll>
        <operation-bar @addToCart="addToCart"></operation-bar>
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
    import operationBar from "./detailComps/operationBar"

    import Scroll from "components/common/scroll/Scroll"
    import { getDetail, Goods, ShopInfo, getRecommend, Recommend } from "@/networks/detail"
    import {itemListenerMixin} from "common/mixin"
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
            detailRecommend,
            operationBar,
            Scroll,
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
                itemParams: {}, // 参数
                rate: {}, // 评论
                recommend: [],
                notData: false,
                tabClickYs: [], // 顶部导航栏对应位置高度
                tabClickYsLoad: null,
                currentIndex: 0
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
            /// detailGoodsInfo组件
            goodsInfoLoad() {
                this.$refs.scroll.refresh()

                this.tabClickYsLoad()
            },
            emitScroll(p) {
                // mixin中监听是否展示scrollTop按钮
                this.listenShowScrollTop(p.y)

                /// 导航位置联动
                this.tabClickYs.forEach((item, index) => {
                    if (this.currentIndex !== index
                        && (this.tabClickYs.length === index + 1 && item >= p.y 
                        || this.tabClickYs[index+1] < p.y && p.y <= item)
                    ) {
                        this.currentIndex = index
                        this.$refs.nav.currentIndex = index
                    }
                });
            },
            /// detailParams
            infoImgLoad() {
                /// 监听推荐图片, 这里可以不监听, 节省性能
                // this.$refs.scroll.refresh()
            },
            emitTabClick(index) {
                this.$refs.scroll.scrollTo(0, this.tabClickYs[index], 300)
            },
            /// operationBar
            addToCart() {
                const payload = Object.assign({iid: this.iid}, this.goods)
                this.$store.dispatch('addCart', payload)
            }
        },
        created() {
            this.iid = this.$route.params.iid

            this.getDetail()
            this.getRecommend()

            /// 给监听位置增加防抖
            this.tabClickYsLoad = debounce(() => {
                this.tabClickYs = this.$refs.params 
                    ? [
                        0,
                        -this.$refs.params.$el.offsetTop,
                        -this.$refs.comment.$el.offsetTop,
                        -this.$refs.recommend.$el.offsetTop
                    ] : [0, 0, 0, 0]
            }, 1000)
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