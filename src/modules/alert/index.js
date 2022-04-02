/**
 * Created by ZD on 2020/11/3.
 */
 import AlertComponent from './alert';

 const Alert = {}
 
 // Vue暴露了一个install方法，用于自定义插件
 Alert.install = function (Vue) {
   // 创建一个子类
   const AlertConstructor = Vue.extend(AlertComponent);
   // 实例化这个子类
   const instance = new AlertConstructor();
   // 创建一个div元素，并把实例挂载到div元素上
   instance.$mount(document.createElement('div'));
   // 将el插入到body元素中
   document.body.appendChild(instance.$el);
 
   // 添加实例方法
   // msg插件的实例方法：接收提示信息msg
   // delay 延迟时间 ms
   Vue.prototype.$msg = (msg, delay) => {
     instance.type = 'msg';
     instance.msg = msg;
     instance.isShow = true;
     instance.delay = delay ?? 1500;
   };
   // alert插件的实例方法：只接收提示信息msg
   Vue.prototype.$alert = msg => {
     instance.type = 'alert';
     instance.msg = msg;
     instance.isShow = true;
   };
   // confirm插件的实例方法，可以接收三个参数
   // msg：提示信息
   // success：点击确定执行的函数
   // cancel：点击取消执行的函数
   Vue.prototype.$confirm = (msg, success, cancel) => {
     instance.type = 'confirm';
     instance.msg = msg;
     instance.isShow = true;
     if(typeof success !== 'undefined') {
       instance.success = success;
     }
     if(typeof cancel !== 'undefined') {
       instance.cancel = cancel;
     }
   }
 }
 
 export default Alert;