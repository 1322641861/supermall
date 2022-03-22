import Vue from 'vue'
import Router from 'vue-router'
// import {createRouter, createWebHistory} from 'vue-router'

Vue.use(Router)

const home = () => import('views/home/home')
const cart = () => import('views/cart/cart')
const category = () => import('views/category/category')
const profile = () => import('views/profile/profile')
const detail = () => import("views/detail/detail")

const routes = [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: home,
        meta: {
            show: true, // tabbar显示隐藏
        }
    }, {
        path: '/cart',
        component: cart,
        meta: {
            show: true,
        }
    }, {
        path: '/category',
        component: category,
        meta: {
            show: true,
        }
    }, {
        path: '/profile',
        component: profile,
        meta: {
            show: true,
        }
    }, {
        path: '/detail/:iid',
        component: detail,
    }
]

const router = new Router({
    routes,
    mode: 'history'
})
// const router = new createRouter({
//     history: createWebHistory(),
//     routes
// })

export default router