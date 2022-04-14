<template>
    <div class="c-loading" v-show="show">
        <div class="load-div">
            <img src="~assets/images/common/loading.gif" alt="" srcset="">
        </div>
    </div>
</template>

<script>

export default {
    name: 'c-loading',
    props: {
        delay: {
            type: Number,
            default: 30000
        },
        show: {
            type: Boolean,
            default: false
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
    mounted() {
    }
}
</script>
<style scoped>
    .c-loading {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        /* background: rgba(0,0,0,.2); */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .load-div {
        width: 18vw;
        height: 18vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #323232;
        border-radius: 8px;
    }
    .load-div img {
        width: 65%;
    }
</style>