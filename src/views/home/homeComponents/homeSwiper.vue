<template>
    <Swiper :showIndicator="banners.length > 0">
        <Swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </Swiper-item>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    name: 'homeSwiper',
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
</style>