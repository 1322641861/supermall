<template>
    <div class="left-tab">
        <div class="category-tab">
            <div class="tab" v-for="(item, key) in category" @click="changeTabIndex(key)" :class="{'tab-check': tabIndex === key}">
                <span>{{item.title}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'left-tab',
    props: {
        category: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            tabIndex: 0,
        };
    },
    computed: {},
    watch: {},
    methods: {
        changeTabIndex(index) {
            if (this.tabIndex === index) return
            this.tabIndex = index
            this.$emit('changeTabIndex', index)
        }
    },
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
    .left-tab {
        flex: 1;
    }
    .category-tab {
        background-color: #f6f6f6;
        text-align: center;
        font-size: 14px;
        height: 100%;
    }
    .tab {
        padding: 13px 0;
        color: var(--color-text);
    }
    .tab-check {
        background-color: #fff;
        border-left: 3px solid #ef7714;
        color: #ef7714;
        font-weight: bold;
    }
</style>