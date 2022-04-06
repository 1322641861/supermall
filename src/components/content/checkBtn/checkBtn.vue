<template>
    <div class="check-box">
        <img v-if="checked" src="~assets/images/common/checked.png" alt="">
        <img v-else src="~assets/images/common/unchecked.png" alt="">
    </div>
</template>

<script>

export default {
    components: {},
    props: {
        checked: {
            type: Boolean,
            default: false
        }
    },
    name: 'check-box',
    data() {
        return {
        };
    },
    computed: {},
    watch: {},
    methods: {
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
    .check-box img {
        width: 20px;
        height: 20px
    }
</style>