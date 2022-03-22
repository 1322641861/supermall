<template>
    <div class="detail-params">
        <div class="info-rule detail-rule">
            <div class="info-title">{{rule.key}}</div>
            <div class="info-disclaimer">{{rule.disclaimer}}</div>
            <ul>
                <li v-for="items in table">
                    <span v-for="item in items">{{item}}</span>
                </li>
            </ul>
        </div>
        <div class="info-rule detail-info">
            <div class="info-title">{{info.key}}</div>
            <ul>
                <li v-for="set in info.set">
                    <span>{{set.key}}</span>
                    <span>{{set.value}}</span>
                </li>
            </ul>
        </div>
        <div v-show="images.length > 0" v-for="img in images" class="info-img">
            <img :src="img" @load="infoImgLoad">
        </div>
        <div class="divide"></div>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'detail-params',
    props: {
        itemParams: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            info: {},
            rule: {},
            table: [],
            images: [],
            counter: 0
        };
    },
    computed: {},
    watch: {
        itemParams() {
            this.info = this.itemParams.info
            this.rule = this.itemParams.rule,
            this.table = this.rule.tables[0],
            this.images = this.info?.images ?? []
        }
    },
    methods: {
        infoImgLoad() {
            ++this.counter;
            if (this.counter === this.images.length || this.images.length % 5 === 0) this.$emit('infoImgLoad')
        }
    },
    created() {},
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
    .info-rule {
        padding: 12px;
    }
    .info-title {
        text-align: center;
        font-weight: bold;
        padding: 12px 0;
    }
    .info-rule ul {
        font-size: 15px;
    }
    .info-rule li {
        border-bottom: 1px solid #eee;
        padding: 10px 0;
        display: flex;
    }
    .detail-info li span {
        color: var(--color-higt-text);
    }
    .detail-params li span {
        display: inline-block;
        flex: 4;
    }
    .info-rule li>span:first-of-type {
        color: #333;
        flex: 1;
    }
    .detail-rule li span {
        flex: 1;
    }
    .info-disclaimer {
        padding-bottom: 12px;
        font-size: 14px;
    }
    .info-img img {
        width: 100%;
    }
</style>