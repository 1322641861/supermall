import request from "./request";

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.price = itemInfo.price,
        this.lowPrice = itemInfo.lowPrice,
        this.discountDesc = itemInfo.discountDesc
        this.columns = columns ?? {},
        this.services = services ?? {}
        this.lowNowPrice = itemInfo.lowNowPrice
        this.discountBgColor = itemInfo.discountBgColor
    }
}

export class ShopInfo {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.cSells = shopInfo.cSells
        this.cGoods = shopInfo.cGoods
        this.score = shopInfo.score
        this.cFans = shopInfo.cFans
        this.shopUrl = shopInfo.shopUrl
        this.services = shopInfo.services
    }
}