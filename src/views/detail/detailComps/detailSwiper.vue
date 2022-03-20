<template>
    <Swiper class="detail-swiper">
        <Swiper-item v-for="(item, key) in imageList" :key="key">
            <div class="detail-img">
                <img class="detail-swiper-item" :src="item">
                <!-- <div class="detail-swiper-item" :style="bgImg(item)"></div> -->
            </div> 
        </Swiper-item>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index"

export default {
    components: {
        Swiper, SwiperItem
    },
    name: 'detail-swiper',
    props: {
        imageList: {
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
    computed: {
        
    },
    watch: {},
    methods: {
        bgImg(url) {
            return {background: `url(${url}) 0 center/cover`} 
        }
    },
    created() {
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
    .detail-img {
        height: 100vw;
        background: #f7f7f7;
        margin-top: 44px;
    }
    /* .detail-img .detail-swiper-item {
        height: 100%;
    } */
</style>