<template>
    <div class="tabbar-view">
        <ul class="tabbar-view-ul">
            <li class="tabbar-item"
                v-for="(item, index) in tabbarList"
                @click="changeIndex(index)">
                <span :class="{activated: index === currentIndex}">{{item}}</span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'tabbar-view',
    props: {
        tabbarList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        };
    },
    computed: {},
    watch: {},
    methods: {
        changeIndex(index) {
            this.currentIndex = index;
            this.$emit('tabClick', index)
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
    .tabbar-view-ul {
        display: flex;
        justify-content: center;
        text-align: center;
        background-color: #fff;
    }
    .tabbar-item {
        flex: 1;
        height: 40px;
        line-height: 40px;
    }
    .tabbar-item span {
        padding: 3px;
    }
    .activated {
        color: var(--color-theme);
        border-bottom: 2px solid var(--color-theme);
    }
</style>