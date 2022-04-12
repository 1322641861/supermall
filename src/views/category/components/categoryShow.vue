<template>
    <div class="category-show">
        <div class="show" v-for="item in subCategory" @click="goSubDetail(item)">
            <img :src="item.image" alt="">
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    name: 'category-show',
    props: {
        subCategory: {
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
    computed: {},
    watch: {},
    methods: {
        goSubDetail(item) {
            window.location.href = item.link
        }
    },
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
    .category-show {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }
    .show {
        width: 30%;
        font-size: 12px;
        color: var(--color-text);
        text-align: center;
        margin-left: 3%;
    }
    .show img {
        width: 90%;
    }
    .show p {
        margin: 10px 0px;
    }
</style>