<template>
    <div class="detail-comment">
        <div class="comment-title">
            <span>宝贝评价({{rate.cRate}})</span>
            <a>
                <span>查看更多</span>
                <img src="~assets/images/common/more.png" alt="">
            </a>
        </div>
        <div v-if="rate.cRate !== 0" class="comment" v-for="list in rate.list">
            <!-- <div class="comment-flag">
                <span v-for="flag in list.extraInfo">{{flag}}</span>
            </div> -->
            <div class="comment-user">
                <img :src="list.user.avatar" alt="" srcset="">
                <div class="comment-name">
                    <span>{{list.user.uname}}</span>
                    <span>{{getFromNowTime(list.created)}}</span>
                </div>
            </div>
            <div class="comment-style">
                <p>{{list.style}}</p>
            </div>
            <p class="comment-des">{{list.content}}</p>
            <div class="comment-extra">
                <span>其他信息: </span>
                <span v-for="flag in list.extraInfo">{{flag}} </span>
            </div>
            <div class="comment-img">
                <div v-for="img in list.images">
                    <img :class="onlyImgClass(list.images.length)" :src="img" alt="" srcset="">
                </div>
            </div>
        </div>
        <div v-else class="no-comment">暂无评论</div>
    </div>
</template>

<script>
import {fromNow} from "common/utils"

export default {
    components: {},
    name: 'detail-comment',
    props: {
        rate: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {

        };
    },
    computed: {
        getCommentLen() {
            const len = this.rate.cRate ? this.rate.cRate : 0
            return len >= 10000 ? `${len / 10000}万+` : len
        },
    },
    watch: {},
    methods: {
        getFromNowTime(createdTime) {
            if (typeof createdTime === "number") {
                const oldTime = createdTime * 1000;
                return fromNow(oldTime);
            }
        },
        onlyImgClass(imagesLen) {
            return {'only': imagesLen === 1}
        }
    },
    created() {},
    mounted() {
    },
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {
    },
    beforeDestroy() {},
    destroyed() {},
    activated() {},
}
</script>
<style scoped>
    .detail-comment {
        margin: 12px;
    }
    .comment-title {
        font-weight: bold;
        padding-bottom: 10px;
        padding-top: 10px;
        border-bottom: 1px solid #eee;
    }
    .comment-title a {
        font-size: 12px;
        color: var(--color-theme);
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .comment-title a img {
        width: 16px;
        vertical-align: text-top;
    }
    .comment-flag span {
        padding: 4px 10px 4px;
        background: #f5d0c4;
        color: #444;
        font-size: 12px;
        border-radius: 20px;
        display: inline-block;
        margin-bottom: 5px;
        margin-right: 5px;
    }
    .comment-user {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 12px;
        display: flex;
    }
    .comment-user img {
        width: 30px;
        border-radius: 50%;
        border: 1px solid #eee;
        height: 30px;
        margin-right: 6px;
    }
    .comment-name {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .comment-name span:last-child {
        color: var(--color-text);
    }
    .comment-des {
        font-size: 12px;
    }
    .comment-img {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }
    .comment-img img {
        width: 100%;
    }
    .comment-img div {
        width: 25%;
        box-sizing: border-box;
        padding-right: 1px;
        margin-bottom: 1px;
    }
    .comment-img div:first-child img {
        border-radius: 6px 0 0 6px;
    }
    .comment-img div:nth-of-type(5n) img {
        border-radius: 6px 0 0 6px;
    }
    .comment-img div:last-child img {
        border-radius: 0 6px 6px 0;
    }
    .comment-img div:nth-of-type(4n) img {
        border-radius: 0 6px 6px 0;
    }
    .comment-img div img.only {
        border-radius: 6px;
    }
    .comment-style {
        color: var(--color-text);
        font-size: 12px;
        margin-bottom: 8px;
    }
    .comment-style p {
        border-left: 1px solid #ddd;
        padding-left: 5px;
    }
    .comment-extra {
        font-size: 12px;
    }
    .comment-extra span:first-child {
        color: var(--color-text);
    }

    .no-comment {
        font-size: 12px;
        color: var(--color-text);
        text-align: center;
        padding: 9px 0;
    }
</style>