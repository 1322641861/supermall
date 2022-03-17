<template>
    <Swiper :showIndicator="banners.length > 0">
        <Swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" @load="imgLoad">
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
            loaded: false
        };
    },
    computed: {},
    watch: {},
    methods: {
        imgLoad() {
            if (!this.loaded) {
                this.$emit('imageLoad')
                this.loaded = true
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