<template>
    <div class="category">
        <navbar>
            <div slot="center">商品分类</div>
        </navbar>
        <div class="wrap" v-if="category.length">
            <left-tab :category="category" @changeTabIndex="changeTabIndex"></left-tab>
            <right-detail :subCategory="subCategory" :goods="goods"></right-detail>
        </div>
        <no-data v-else height="calc(100vh - 94px)"></no-data>
    </div>
</template>

<script>
import {getCategory, getSubCategory, getCategoryDetail} from '@/networks/category'
import navbar from "components/common/navbar/navbar"
import noData from "components/content/noData/noData"
import leftTab from "./components/leftTab"
import rightDetail from "./components/rightDetail"

export default {
    components: {
        navbar,
        noData,
        leftTab,
        rightDetail,
    },
    name: 'category',
    data() {
        return {
            category: [],
            loading: false,
            subCategory: [],
            currentType: 'pop',
            goods: {
                'pop': [],
                'sell': [],
                'new': []
            }
        };
    },
    computed: {},
    watch: {},
    methods: {
        /*
            接口
        */
        _getCategory() {
            this.loading = true
            getCategory().then((res) => {
                this.loading = false
                if (res && res.data) {
                    this.category = res.data.category.list
                    const miniWallkey = this.category[0].miniWallkey
                    this._subcategory(this.category[0].maitKey)
                    this._getCategoryDetail(
                        miniWallkey,
                        'pop'
                    )
                    this._getCategoryDetail(
                        miniWallkey,
                        'new'
                    )
                    this._getCategoryDetail(
                        miniWallkey,
                        'sell'
                    )
                }
            })
        },
        _subcategory(maitKey) {
            this.loading = true
            getSubCategory(maitKey).then(res => {
                this.loading = false
                if (res && res.data) {
                    this.subCategory = res.data.list
                }
            })
        },
        _getCategoryDetail(miniWallkey, type) {
            this.loading = true
            getCategoryDetail(miniWallkey, type).then(res => {
                this.loading = false
                if (res) {
                    this.goods[type] = res
                }
            })
        },

        changeTabIndex(key) {
            this._subcategory(this.category[key].maitKey)
            this._getCategoryDetail(
                this.category[key].miniWallkey,
                'pop'
            )
            this._getCategoryDetail(
                this.category[key].miniWallkey,
                'new'
            )
            this._getCategoryDetail(
                this.category[key].miniWallkey,
                'sell'
            )
        },
    },
    created() {
        this._getCategory()
    },
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
    .wrap {
        display: flex;
        width: 100vw;
        height: calc(100vh - 94px);
    }
</style>