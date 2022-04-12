<template>
    <div class="right-detail">
        <Scroll ref="scroll" :probeType="3" @scroll="emitScroll">
            <div class="right-wrap">
                <category-show :subCategory="subCategory"></category-show>
                <sub-detail :subDetail="goods"></sub-detail>
            </div>
        </Scroll>
        <scroll-top :isShow="isShowBtn" @click.native="toTop"></scroll-top>
    </div>
</template>

<script>
import categoryShow from './categoryShow'
import subDetail from './subDetail'
import Scroll from "components/common/scroll/Scroll"
import {itemListenerMixin} from 'common/mixin'

export default {
    components: {
        categoryShow,
        subDetail,
        Scroll
    },
    name: 'right-detail',
    props: {
        subCategory: {
            type: Array,
            default() {
                return []
            }
        },
        goods: {
            type: Object,
            default() {
                return {}
            }
        },
    },
    mixins: [itemListenerMixin],
    data() {
        return {
        };
    },
    computed: {},
    watch: {
        subCategory() {
            this.$refs.scroll.scrollTo(0, 0, 0)
        }
    },
    methods: {
        emitScroll(position) {
            // mixin中监听是否展示scrollTop按钮
            this.listenShowScrollTop(position.y)
        },
    },
    created() {
    },
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
    .right-detail {
        width: 75vw;
    }
    .right-wrap {
        padding: 20px 8px 20px;
    }
</style>