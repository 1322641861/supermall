<template>
  <!-- 初始状态下隐藏提示框 -->
  <div v-show="isShow">
    <div class="alert" :class="type">
      <div class="flex">{{msg}}</div>
      <!-- alert插件只显示确定按钮 -->
      <div class="space-around" v-if="type === 'alert'">
        <div class="btnCommon success" @click="close">确定</div>
      </div>
      <!-- confirm插件显示取消和确定按钮 -->
      <div class="space-around" v-else-if="type === 'confirm'">
        <div class="btnCommon cancel" @click="cancelEvent">取消</div>
        <div class="btnCommon success" @click="successEvent">确定</div>
      </div>

    </div>
    <!-- 背景遮罩 -->
    <div class="mask" @click="closeMask" v-if="type !== 'msg'"></div>
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    data() {
      return {
        timer: null
      };
    },
    props: {
      // 提示信息
      msg: {
        type: String,
        default: ''
      },
      // 是否显示提示框
      isShow: {
        type: Boolean,
        default: false
      },
      // 插件类型：alert/confirm
      type: {
        type: String,
        default: 'alert'
      },
      // confirm插件接收的确认事件
      success: {
        type: Function,
        default: () => {
          console.log('点击了success');
        }
      },
      // confirm插件接收的取消事件
      cancel: {
        type: Function,
        default: () => {
          console.log('点击了cancel');
        }
      },
      delay: {
        type: Number,
        default: 1500
      }
    },
    methods: {
      // 关闭弹窗
      close() {
        this.isShow = false
      },
      // alert 插件点击阴影区域关闭弹窗
      closeMask() {
        if (this.type === 'alert') {
          this.close();
        }
      },
      // confirm 插件点击取消触发的事件
      cancelEvent() {
        this.cancel();
        this.close();
      },
      // confirm 插件点击确定触发的事件
      successEvent() {
        this.success();
        this.close();
      }
    },
    updated() {
      var _this = this;
      if (_this.type == 'msg') {
        this.timer = setTimeout(function () { _this.close() }, this.delay);
      }
    },
    destroyed() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
</script>
<style scoped>
  .alert {
    width: 70%;
    height: auto;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -75px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 8px rgb(0 0 0 / 5%);
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(-50%);
  }

  .msg {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
  }

  .msg .flex {
    padding: 10px 35px !important;
    background-color: rgba(0, 0, 0, .7);
    border-radius: 10px;
    box-shadow: 10px 10px 18px rgb(0 0 0 / 20%);
    line-height: 20px;
    color: #fff;
    font-size: 14px;
  }

  .flex {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-all;
    line-height: 40px;
    padding: 20px;
  }

  .space-around {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-top: 1px solid #cfcfcf;
  }

  .btnCommon {
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 6px;
  }

  .btnCommon .success {
    background-color: #fff;
    color: #EC736F;
    cursor: pointer;
  }

  .btnCommon:hover {
    background-color: rgba(0, 0, 0, .05);
  }

  .btnCommon.cancel {
    width: 249px;
    color: #333;
    cursor: pointer;
    border-right: 1px solid #cfcfcf;
  }

  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 8;
  }

  .msg .mask {
    display: none;
  }
</style>