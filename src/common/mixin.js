import { debounce } from 'common/utils'

export const itemListenerMixin = {
    data() {
        return {
            itemImgLoad: null
        }
    },
    mounted() {
        // 监听图片是否已加载完
        this.itemImgLoad = debounce(this.$refs.scroll.refresh)
        this.$bus.$on('imgUpdated', this.itemImgLoad)
    }
}