<template>
    <tabbar>
        <tabbar-item path="/home" :activeColor="activeColor">
            <template #itemIcon>
                <img src="~assets/images/home.png">
            </template>
            <template #itemIconActive>
                <img src="~assets/images/home-active.png">
            </template>
            <template #itemName>首页</template>
        </tabbar-item>
        <tabbar-item path="/category" :activeColor="activeColor">
            <template #itemIcon>
                <img src="~assets/images/category.png">
            </template>
            <template #itemIconActive>
                <img src="~assets/images/category-active.png">
            </template>
            <template #itemName>分类</template>
        </tabbar-item>
        <tabbar-item path="/cart" :activeColor="activeColor">
            <template #itemIcon>
                <img src="~assets/images/cart.png">
            </template>
            <template #itemIconActive>
                <img src="~assets/images/cart-active.png">
            </template>
            <template #itemName>购物车</template>
        </tabbar-item>
        <tabbar-item path="/profile" :activeColor="activeColor">
            <template #itemIcon>
                <img src="~assets/images/user.png">
            </template>
            <template #itemIconActive>
                <img src="~assets/images/user-active.png">
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
                activeColor: '#f08600'
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