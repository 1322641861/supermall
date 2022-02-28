<template>
    <div class="home">
        <!-- <navbar backgroundColor="传入的颜色 "> -->
        <navbar>
            <div slot="center">supermall</div>
        </navbar>
        <swiper :banners="banners"/>
    </div>
</template> 

<script>
import navbar from 'components/common/navbar/navbar'
import swiper from './homeComponents/homeSwiper'

import { getHomeMultidata } from '@/networks/home'


export default {
    components: {
        navbar,
        swiper
    },
    name: 'home',
    data() {
        return {
            banners: [],
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
        getHomeMultidata().then(res => {
            console.log(res)
            this.banners = res.data.banner.list;
            console.log(this.banners)
        })
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