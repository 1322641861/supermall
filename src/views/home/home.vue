<template>
    <div class="home">
        <!-- <navbar backgroundColor="传入的颜色 "> -->
        <navbar>
            <div slot="center">supermall</div>
        </navbar>
        <tabbar-view class="tabbar-view2" :tabbarList="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"
            v-show="tabFixed">
        </tabbar-view>
        <Scroll :probeType="3" :pullUpLoad="true" :showGoods="showGoods" @scroll ="emitScroll" @pullingUp="pullingUp"
            ref="scroll">
            <swiper :banners="banners" @imageLoad="imageLoad" />
            <Recommend :recommend="recommend"></Recommend>
            <Features></Features>
            <tabbar-view :tabbarList="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl">
            </tabbar-view>
            <goods-card :goodsList="showGoods"></goods-card>
        </Scroll>
        <scroll-top :isShow="isShowBtn" @click.native="toTop"></scroll-top>
    </div>
</template>

<script>
    import navbar from 'components/common/navbar/navbar'
    import Scroll from 'components/common/scroll/Scroll'

    import tabbarView from 'components/content/homeTab/homeTabView'
    import goodsCard from 'components/content/goodsCard/goodsCard'

    import swiper from './homeComponents/homeSwiper'
    import Recommend from './homeComponents/homeRecommend'
    import Features from './homeComponents/featuresView'

    import { getHomeMultidata, getHomeGoods } from '@/networks/home'
    import {itemListenerMixin} from 'common/mixin'

    export default {
        components: {
            navbar,
            Scroll,
            tabbarView,
            goodsCard,
            swiper,
            Recommend,
            Features
        },
        name: 'home',
        data() {
            return {
                banners: [],
                recommend: [],
                goods: {
                    'pop': { page: 1, list: [] },
                    'new': { page: 1, list: [] },
                    'sell': { page: 1, list: [] },
                },
                currentType: 'pop',
                isShowBtn: false, // 回到顶部
                tabFixed: false,
                tabOffset: 0,
                saveY: 0
            };
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list
            },
        },
        mixins: [itemListenerMixin], // $bus 全局监听混和(抽取公共函数和变量)
        watch: {},
        methods: {
            /*
                事件监听
            */
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

                // 保持2个tab同步index
                this.$refs.tabControl.currentIndex = this.$refs.tabControl2.currentIndex = index

                // 切换tab时, 重新定位到第一张图片位置
                if (this.tabFixed) {
                    this.$refs.scroll.scrollTo(0, -this.tabOffset + 44, 0)
                } else {
                }
            },

            /*
             网络请求
            */
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    if (res && res.data) {
                        const data = res.data;
                        this.banners = data.banner.list;
                        this.recommend = data.recommend.list;
                    }
                })
            },
            getHomeGoods(type) {
                getHomeGoods(type, this.goods[type].page).then(res => {
                    if (res && res.data) {
                        this.goods[type].list.push(...res.data.list)
                        this.goods[type].page++
                        // 更新完成scroll上拉状态
                        this.$refs.scroll.finishPullUp()
                    }
                })
            },

            /*
            scroll组件
            */
            // scrollTop组件显示隐藏
            emitScroll(position) {
                // mixin中监听是否展示scrollTop按钮
                this.listenShowScrollTop(position.y)

                this.tabFixed = this.tabOffset < Math.abs(position.y) + 44
            },
            pullingUp() {
                this.getHomeGoods(this.currentType)
            },

            /// 监听首页轮播图
            imageLoad() {
                this.tabOffset = this.$refs.tabControl.$el?.offsetTop ?? 0
            }
        },
        created() {
            this.getHomeMultidata()

            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')
        },
        mounted() {
        },
        beforeCreate() { },
        beforeMount() { },
        beforeUpdate() { },
        updated() { },
        beforeDestroy() { },
        destroyed() {},
        /// keep-alive 专用组件
        activated() {
            /// 回到页面时保持位置不变
            // this.$refs.scroll.scrollTo(0, this.saveY, 0)
            // this.$refs.scroll.refresh()
        },
        deactivated() {
            this.saveY = this.$refs.scroll.getScrollY()
            this.$bus.$off('imgUpdated', this.itemImgLoad)
        }
    }
</script>
<style scoped>
    .home {
        padding-bottom: 50px;
        background-color: #f5f5f5;
    }

    .tabbar-view2 {
        /* position: sticky;
        top: 44px;
        z-index: 1; */
        position: fixed;
        width: 100%;
        z-index: 1;
    }
</style>