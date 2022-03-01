<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
    import tabbarItem from './tabbarItem'

    export default {
        name: 'tabbar',
        components: {
            tabbarItem
        },
        data() {
            return {

            };
        },
    }
</script>
<style scoped>
    .tabbar {
        display: flex;
        /* background: #f6f6f6; */
        background: #fff;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .15);
    }
</style>