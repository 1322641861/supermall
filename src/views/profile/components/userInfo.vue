<template>
    <div class="user-info">
        <div class="user">
            <div class="user-left">
                <div class="avatar">
                    <img v-if="!avatar" src="~assets/images/user/avatar.png" alt="">
                    <img v-else :src="avatar" alt="">
                </div>
                <div class="name">
                    <span>{{userName ? userName : '登录/注册'}}</span>
                    <div class="phone">
                        <img src="~assets/images/user/phone.png" alt="">
                        <span>{{phone ? phone : '暂未绑定手机号'}}</span>
                    </div>
                </div>
            </div>
            <img class="more2" src="~assets/images/user/more2.png" alt="">
        </div>
        <div class="info">
            <div class="info-item" v-for="item in infoList">
                <div>
                    <span class="info-value">{{item.value}}</span>
                    <span>{{item.tag}}</span>
                </div>
                <div>{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'user-info',
    props: {
        phone: null,
        userName: '',
        avatar: ''
    },
    data() {
        return {
            infoList: [
                {
                    'name': '我的余额',
                    'value': 0,
                    'tag': '元'
                }, {
                    'name': '我的优惠',
                    'value': 0,
                    'tag': '个'
                }, {
                    'name': '我的积分',
                    'value': 0,
                    'tag': '分'
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
    .user {
        background: var(--color-theme);
        margin-top: -2px;
        display: flex;
        justify-content: space-between;
        padding: 13px;
        align-items: center;
    }
    .user-left {
        display: flex;
        align-items: center;
        color: #fff;
    }
    .avatar {
        background: #fff;
        border-radius: 50%;
        margin-right: 10px;
    }
    .avatar img {
        vertical-align: middle;
        width: 70px;
        height: 70px;
    }
    .more2 {
        width: 35px;
        height: 35px;
    }
    .phone {
        margin-top: 4px;
    }
    .phone span {
        font-size: 13px;
    }
    .phone img {
        width: 18px;
        height: 18px;
        vertical-align: middle;
    }
    .info {
        background-color: #fff;
        color: var(--color-text);
        font-size: 13px;
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
    .info .info-item:nth-child(2) {
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
    }
    .info-value {
        font-size: 24px;
        font-weight: bold;
        color: #ff5f3e;
    }
    .info-item {
        flex: 1;
        padding: 15px 0;
    }
    .info-item div:nth-of-type(2) {
        margin-top: 5px;
    }
</style>