import axios from 'axios'
export default {
    state: {
        // mall页面 轮播图请求链接
        mall_banner: 'http://localhost:3000/api/mall_banner',
        // mall页面 分类标签内容链接
        mall_category: 'https://api.ddky.com/cms/rest.htm?sign=93359E5FAE5720FCA018E6D4432E3FE0&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&loginToken=46997443576320445e34a6cf726ffe3a&method=com.ddky.mall.ueug.query&plat=H5&platform=H5&t=2019-3-19%209:23:22&uDate=58927020190314&userId=1016718971&v=1.0&versionName=4.9.0&callback=Zepto1552958601914',
        //home 轮播图页面请求
        home_banner: "https://api.ddky.com/cms/rest.htm?sign=5AF0C4015C6CCBAE5277E4D1CCB1046D&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&loginToken=46997443576320445e34a6cf726ffe3a&method=ddky.cms.h5.o2o.homepage.get&plat=H5&platform=H5&shopId=202132&t=2019-3-19%209:29:25&uDate=58927020190314&userId=1016718971&v=1.0&versionName=4.6.0&callback=Zepto1552958965198",

        //home 商品数据请求
        home_goods: "https://api.ddky.com/cms/rest.htm?sign=BD3AD60B432F5AD96138E32D3454D89C&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&loginToken=46997443576320445e34a6cf726ffe3a&method=ddky.cms.package.get&plat=H5&platform=H5&shopId=202132&t=2019-3-19%209:29:25&uDate=58927020190314&userId=1016718971&v=1.0&versionName=4.6.0&callback=Zepto1552958965200",
        //搜索页面 热门搜索
        popularSearches: "https://search.ddky.com/search?sign=F84377A1C2A85891D8AF3606A553E34D&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&lat=&lng=&loginToken=46997443576320445e34a6cf726ffe3a&method=searchhot&plat=H5&platform=H5&t=2019-3-19%209:30:48&uDate=58927020190314&userId=1016718971&v=1.0&versionName=4.9.0&callback=Zepto1552959048069"
            // 商品列表页 标签数据
            ,
        shoplisttab: "https://api.ddky.com/cms/rest.htm?sign=F0FE2EE51837375FBF22858B3F0BFAEE&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&compositeId=3&idfa=9CCAB4199C500F48660E8616CFAA0E68&lat=23.1200491&lng=113.30764968&method=ddky.cms.search.cate.get&plat=H5&platform=H5&shopId=202132&suite=1&t=2019-3-19%2010:33:18&userId=&v=1.0&versionName=4.9.0&versionType=2&callback=Zepto1552962798818"
            //商品列表 列表数据
            ,
        shoplists: "https://api.ddky.com/cms/rest.htm?sign=3E48A7C299C47777208C50D182D72ECC&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&compositeId=3&idfa=9CCAB4199C500F48660E8616CFAA0E68&lat=23.1200491&lng=113.30764968&method=ddky.cms.search.cate.list&orderTypeId=0&pageNo=1&pageSize=20&plat=H5&platform=H5&shopId=202132&suite=1&t=2019-3-19%2010:33:18&userId=&v=1.0&versionName=4.9.0&wd=&callback=Zepto1552962798819",
        shop: "https://api.ddky.com/cms/rest.htm?sign=5101335AD08F2E2EC77D334DF38908A0&city=%E5%B9%BF%E5%B7%9E%E5%B8%82&lat=23.1200491&lng=113.30764968&loginToken=46997443576320445e34a6cf726ffe3a&method=ddky.cms.product.detailfps.get&plat=H5&platform=H5&skuId=10649801&suite=1&t=2019-3-19%2010:54:37&uDate=58927020190314&userId=1016718971&v=1.0&versionName=4.9.0&callback=Zepto1552964077347"

    }
}