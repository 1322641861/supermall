<template>
    <div class="detail">
        <detail-nav></detail-nav>
        <detail-swiper :imageList="imageList"></detail-swiper>
    </div>
</template>

<script>
import detailNav from "./detailComps/detailNav"
import detailSwiper from "./detailComps/detailSwiper"
import { getDetail } from "@/networks/detail"

export default {
    components: {
        detailNav,
        detailSwiper
    },
    name: 'detail',
    data() {
        return {
            iid: null,
            itemInfo: {},
            imageList: []
        };
    },
    computed: {},
    watch: {},
    methods: {
        getDetail() {
            getDetail(this.iid).then((res) => {
                console.log(res);
                if (res && res.result) {
                    this.itemInfo = res.result.itemInfo
                    this.imageList = this.itemInfo?.topImages ?? []
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