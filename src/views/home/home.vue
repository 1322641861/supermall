<template>
    <div class="home">
        <!-- <navbar backgroundColor="传入的颜色 "> -->
        <navbar>
            <div slot="center">supermall</div>
        </navbar>
        <swiper :banners="banners"/>
        <Recommend :recommend="recommend"></Recommend>
        <Features></Features>
        <tabbar-view class="tabbar-view"
            :tabbarList="['流行', '新款', '精选']"
            @tabClick="tabClick">
        </tabbar-view>
        <goods-card :goodsList="showGoods"></goods-card>
    </div>
</template> 

<script>
import navbar from 'components/common/navbar/navbar'
import tabbarView from 'components/content/homeTab/homeTabView'
import goodsCard from 'components/content/goodsCard/goodsCard'

import swiper from './homeComponents/homeSwiper'
import Recommend from './homeComponents/homeRecommend'
import Features from './homeComponents/featuresView'

import { getHomeMultidata, getHomeGoods } from '@/networks/home'


export default {
    components: {
        navbar,
        tabbarView,
        goodsCard,
        swiper,
        Recommend,
        Features,
    },
    name: 'home',
    data() {
        return {
            banners: [],
            recommend: [],
            goods: {
                'pop': {  page: 1, list: [] },
                'new': {  page: 1, list: [] },
                'sell': {  page: 1, list: [] },
            },
            currentType: 'pop',
        };
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list
        }
    },
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
        },



        /*
         网络请求
        */
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                // console.log(res)
                if (res && res.data) {
                    const data = res.data;
                    this.banners = data.banner.list;
                    this.recommend = data.recommend.list;
                }
            })
        },
        getHomeGoods(type) {
            getHomeGoods(type, this.goods[type].page).then(res => {
                console.log(res)
                if (res && res.data) {
                   this.goods[type].list.push(...res.data.list)
                   this.goods[type].page++
                }
            })
        }
    },
    created() {
        this.getHomeMultidata()

        this.getHomeGoods('pop')
        this.getHomeGoods('new') 
        this.getHomeGoods('sell')
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
    .home {
        padding-bottom: 50px;
        padding-top: 44px;
        background-color: #f5f5f5;
    }
    .tabbar-view {
        position: sticky;
        top: 44px;
    }
</style>