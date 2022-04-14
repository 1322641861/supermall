import axios from "axios";
import index from '@/store/index'
import Base from 'common/base'

export default function request(config) {
    const instance = axios.create({
        baseURL: Base.baseUrl[0]
    })
    
    // 请求拦截
    instance.interceptors.request.use(value => {
        // console.log('请求拦截', value)
        if (Base.reqWhiteList.indexOf(value.url) === -1) {
            index.dispatch('incLoadCount')
        }
        return value
    }, err => {
        console.log(err)
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
        // console.log('响应拦截', res)
        if (Base.reqWhiteList.indexOf(res.config.url) === -1) {
            index.dispatch('decLoadCount')
        }
        return res.data
    }, err => {
        console.log(err)
    })

    // 直接返回, 本身就是一个promise
    return instance(config)
}

// export default function request(config, success, fail) {
//     const instance = axios.create({
//         baseURL: 'http://biboniu.top'
//     })

//     instance(config)
//         .then(res => {
//             success(res)
//         })
//         .catch(rej => {
//             fail(rej)
//         })
// }

// export default function request(config) {
//     const instance = axios.create({
//         baseURL: 'http://biboniu.top'
//     })

//     return new Promise((resolve, reject) => {
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(rej => {
//                 reject(rej)
//             })
//     })
// }
