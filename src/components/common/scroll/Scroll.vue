<template>
  <div class="wrapper" ref="wrapper" :style="getHeight">
    <!-- wrapper里面只能有一个dom, bscroll才会生效 -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      showGoods: {
        type: Array,
        default() {
          return []
        }
      },
      redundantHeight: {
        type: Number,
        default: 94
      }
    },
    data() {
      return {
        scroll: null,
        message: '哈哈哈'
      }
    },
    computed: {
      getHeight() {
        return {height: `calc(100vh - ${this.redundantHeight}px)`};
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scrollInit()
      })
    },
    methods: {
      scrollInit() {
        // 1.创建BScroll对象
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
            // wheel: true,
            // scrollbar: true
          })
        }

        // 2.监听滚动的位置
        if (this.probeType === 2 || this.probeType === 3) {
          this.refresh()
          this.scroll.on('scroll', (position) => {
            this.$emit('scroll', position)
          })
        }

        // 3.监听scroll滚动到底部
        if (this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
          })
        }
      },
      scrollTo(x, y, time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      },
    },
    updated() {
      this.refresh()
    },
    activated() {
      this.refresh()
    }
  }
</script>

<style scoped>
  .wrapper {
    /* height: 100vh; */
    /* position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 50px; */
    /* height: calc(100vh - 94px); */
    /* margin-top: 44px; */
  }
</style>