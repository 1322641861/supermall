<template>
    <div class="tabbar-item" @click="showActive">
        <div>
            <div v-if='showActived'>
               <slot name="itemIconActive"></slot>
            </div>
            <div v-else>
                <slot name="itemIcon"></slot>
            </div>
            <div :style="activeStyle" :class="{active: active}">
               <slot name="itemName"></slot> 
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    name: 'tabbarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: '#41b883'
        }
    },
    data() {
        return {
            active: false,
        };
    },
    computed: {
        showActived() {
            // console.log(this.path, this.$route)
            this.active = this.path == this.$route.path;
            return this.active
        },
        activeStyle() {
            // console.log(this.activeColor);
            return this.active ? {color: this.activeColor} : {}
        }
    },
    watch: {},
    methods: {
        showActive() {
            if (this.path != this.$route.path) {
                this.$router.replace(this.path)
            }
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
     .tabbar-item {
        text-align: center;
        flex: 1;
        height: 49px;
    }
    .tabbar-item img{
        width: 20px;
        height: 20px;
        vertical-align: middle;
        vertical-align: -webkit-baseline-middle;
        padding-bottom: 3px;
    }
    .active {
        color: #41b883;
    }
    .active div {
        color: #41b883;
    }
</style>