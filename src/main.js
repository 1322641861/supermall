import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from "@/store/index"
import alert from '@/modules/alert'

Vue.config.productionTip = false // 阻止启动生产消息，常用作指令
Vue.use(alert) // 挂载自定义组件
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
