<template>
    <div class="recommend">
        <ul class="recommend-wrap">
            <li v-for="(item, index) in recommend" :key="index" :style="widthRatio">
                <a :href="item.link">
                    <img class="recommend-img" :src="item.image" alt="">
                </a>
                <p>{{item.title}}</p>
            </li>
        </ul>
        <div class="divide"></div>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'recommend',
    props: {
        recommend: {
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
        widthRatio() {
            return this.recommend.length > 0 
                ? {width: 100 / this.recommend.length + 'vw'}
                : {};
        }
    },
    watch: {},
    methods: {
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
    .recommend-wrap {
        display: flex;
        overflow: hidden;
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: #fff;
    }
    .recommend-wrap li {
        text-align: center;
        min-height: 25vw;
    }
    .recommend-wrap li a {
        width: 80%;
        height: 80%;
        background-color: #eeeeee;
        border-radius: 50%;
        display: inline-block;
    }
    .recommend-img {
        width: 100%;
        height: 100%;
    }
    .recommend-wrap li p {
        font-size: 12px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        padding-top: 5px;
    }
</style>