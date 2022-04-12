
<template>
    <div class="no-data" :style="{height: height}">
        <div>
            <img src="~assets/images/common/noShop.png" alt="" srcset="">
            <span>{{content}}</span>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'no-data',
    props: {
        content: {
            type: String,
            default: "暂无内容"
        },
        height: {
            type: String,
            default: "100%"
        }
    },
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
    .no-data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #666;
    }
    .no-data div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .no-data img {
        width: 100px;
        margin-bottom: 5px;
    }
</style>