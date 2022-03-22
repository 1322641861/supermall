<template>
    <div class="nav-bar" :style="{backgroundColor: backgroundColor}">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'navbar',
    props: {
        path: String,
        backgroundColor: {
            type: String
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
    .nav-bar {
        display: flex;
        line-height: 44px;
        height: 44px;
        background-color: var(--color-theme);
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        /* position: fixed; */
        position: relative;
        z-index: 1;
        left: 0;
        top: 0;
        right: 0;
    }
    .left, .right {
        width: 60px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .center {
        flex: 1;
        color: #fff;
        text-align: center;
    }
</style>