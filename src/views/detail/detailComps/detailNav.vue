<template>
    <div class="detail-nav">
        <navbar backgroundColor="#fff">
            <a slot="left" class="go-back" @click="goBack">
                <img src="~assets/images/common/back.png" alt="">
            </a>
            <div slot="center">
                <div class="titles">
                    <div class="titles-item" @click="tabClick(key)" :class="actived(key)" v-for="(item, key) in titles">{{item}}</div>
                </div>
            </div>
        </navbar>
    </div>
</template>

<script>
import navbar from "components/common/navbar/navbar"

export default {
    components: {
        navbar
    },
    name: 'detail-nav',
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0,
        };
    },
    computed: {
    },
    watch: {},
    methods: {
        actived(index) {
            return {"actived": index == this.currentIndex}
        },
        tabClick(index) {
            this.currentIndex = index
            this.$emit('emitTabClick', index)
        },
        goBack() {
            this.$router.back()
            // this.$router.go(-1)
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
    .titles {
        color: #333;
        display: flex;
        justify-content: space-evenly;
    }
    .actived {
        color: var(--color-theme);
    }
    .titles-item {
        font-size: 14px;
    }
    .go-back {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .go-back img {
        height: 70%;
    }
</style>