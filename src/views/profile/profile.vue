<template>
    <div class="profile">
        <navbar :isShowShadow="false">
            <div slot="center">个人中心</div>
        </navbar>
        <user-info></user-info>
        <list-view></list-view>
    </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import userInfo from "./components/userInfo"
import listView from "./components/listView"

export default {
    components: {
        navbar,
        userInfo,
        listView
    },
    name: 'profile',
    data() {
        return {

        };
    },
    computed: {
    },
    watch: {},
    methods: {},
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