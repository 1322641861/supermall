import axios from "axios";

export default function request(config) {
    const instance = axios.create({
        baseURL: 'http://biboniu.top'
    })
    
    // 请求拦截
    instance.interceptors.request.use(value => {
        // console.log(value)
        return value
    }, err => {
        console.log(err)
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res)
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
