<template>
    <div class="list-view">
        <ul class="list-wrap">
            <li v-for="item in userList">
                <img class="left-icon" :src="item.icon" alt="">
                <div class="right-title">
                    <span>{{item.name}}</span>
                    <img src="~assets/images/user/more1.png" alt="">
                </div>
            </li>
        </ul>
        <ul class="list-wrap">
            <li v-for="item in appList">
                <img class="left-icon" :src="item.icon" alt="">
                <div class="right-title">
                    <span>{{item.name}}</span>
                    <img src="~assets/images/user/more1.png" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'list-view',
    data() {
        return {
           userList: [
               {
                   name: '我的消息',
                   href: '',
                   icon: require('assets/images/user/message.png')
               },{
                   name: '积分商城',
                   href: '',
                   icon: require('assets/images/user/shop.png')
               },{
                   name: '会员卡',
                   href: '',
                   icon: require('assets/images/user/vip.png')
               }
           ],
           appList: [
               {
                   name: '我的购物车',
                   href: '',
                   icon: require('assets/images/user/cart.png')
               },{
                   name: '下载购物APP',
                   href: '',
                   icon: require('assets/images/user/download.png')
               }
           ]
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
    .list-wrap {
        border-top: 12px solid #eee;
    }
    li {
        display: flex;
        align-items: center;
    }
    li img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
    li span {
        font-size: 15px;
    }
    .right-title {
        flex: 1;
        padding: 12px 12px 12px 0;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    li:last-child .right-title {
        border: none;
    }
    .right-title img {
        width: 16px;
        height: 16px;
    }
    .left-icon {
        margin: 0 12px;
    }
</style>