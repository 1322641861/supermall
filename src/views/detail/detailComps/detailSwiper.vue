<template>
    <div class="detail-swiper">
        <Swiper>
            <Swiper-item v-for="(item, key) in imageList" :key="key">
                <img :src="item" alt="">
            </Swiper-item>
        </Swiper>
    </div>
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
            default: []
        }
    },
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
        console.log(this.imageList);
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