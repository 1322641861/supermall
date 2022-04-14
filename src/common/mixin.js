import { debounce } from 'common/utils'
import scrollTop from "components/content/scroll/scrollTop"

export const itemListenerMixin = {
    data() {
        return {
            itemImgLoad: null,
            isShowBtn: false, 
        }
    },
    mounted() {
        // 监听图片是否已加载完
        this.itemImgLoad = debounce(this.$refs.scroll.refresh)
        this.$bus.$on('imgUpdated', this.itemImgLoad)
    },
    components: {
        scrollTop,
    },
    methods: {
        // 调用scroll组件回到顶部
        toTop() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        listenShowScrollTop(sizeY) {
            this.isShowBtn = sizeY < -800 ? true : false;      
        },
    },
    destory() {
        // 关闭全局监听
        this.$bus.$off('imgUpdated', this.itemImgLoad)
    }
}