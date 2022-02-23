<template>
    <tabbar>
        <tabbar-item path="/home" activeColor="red">
            <template #itemIcon>
                <img src="~assets/images/logo/logo.png">
            </template>
            <template #itemIconActive>
                <img src="~assets/images/logo/logo-active.png">
            </template>
            <template #itemName>首页</template>
        </tabbar-item>
        <tabbar-item path="/notice" activeColor="red">
            <template #itemIcon>
                <img src="~assets/images/logo/logo.png">
            </template>
            <template #itemIconActive>
                <img src="~assets/images/logo/logo-active.png">
            </template>
            <template #itemName>公告</template>
        </tabbar-item>
        <tabbar-item path="/category" activeColor="red">
            <template #itemIcon>
                <img src="~assets/images/logo/logo.png">
            </template>
            <template #itemIconActive>
                <img src="~assets/images/logo/logo-active.png">
            </template>
            <template #itemName>分类</template>
        </tabbar-item>
        <tabbar-item path="/profile" activeColor="red">
            <template #itemIcon>
                <img src="~assets/images/logo/logo.png">
            </template>
            <template #itemIconActive>
                <img src="~assets/images/logo/logo-active.png">
            </template>
            <template #itemName>个人</template>
        </tabbar-item>
    </tabbar>
</template>

<script>
    import tabbar from 'components/common/tabbar/tabbar'
    import tabbarItem from 'components/common/tabbar/tabbarItem'
    
    export default {
        components: {
            tabbar,
            tabbarItem
        },
        name: 'mainTabbar',
        data() {
            return {

            };
        },
        computed: {},
        watch: {},
        methods: {},
        created() { },
        mounted() { },
        beforeCreate() { },
        beforeMount() { },
        beforeUpdate() { },
        updated() { },
        beforeDestroy() { },
        destroyed() { },
        activated() { },
    }
</script>
<style scoped>
</style>