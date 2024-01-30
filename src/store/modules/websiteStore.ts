import {defineStore} from 'pinia'
import {ref} from 'vue'

export interface WebSite {
    title: string,
    des: string,
    img: string,
    url: string,
    tags: string[]
}
export type WebSites = WebSite[]

export const tagsData = [
    {name:'推荐',suffix:'🔥',id:'recommend'},
    {name:'前端',suffix:'👷',id:'frontEnd'},
    {name:'知名博客',suffix:'📑',id:'wellKnownBlog'},
    {name:'在线影视',suffix:'🎬',id:'onlineVideo'},
    {name:'静态网页构建',suffix:'🔨',id:'staticWebTools'},
    // {name:'收藏',suffix:'💎',id:'mark'},
]

const websiteData=[
    {
        "title": "阮一峰网络日志",
        "des": "阮一峰网络日志",
        "remarks":"",
        "img": "https://www.ruanyifeng.com/blog/images/person2.jpg",
        "url": "https://www.ruanyifeng.com/blog/",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend", "wellKnownBlog"]
    },
    {
        "title": "Docusaurus",
        "des": "快速构建以内容为核心的最佳网站",
        "remarks":"",
        "img": "https://docusaurus.io/zh-CN/img/docusaurus_keytar.svg",
        "url": "https://docusaurus.io/zh-CN/showcase?tags=personal",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend", "staticWebTools"]
    },
    {
        "title": "github同步到gitee",
        "des": "同步vitepress+github action+gitee pages",
        "remarks":"",
        "img": "",
        "url": "https://blog.csdn.net/qq_31647491/article/details/134006896",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "share.aitimi",
        "des": "代码块美化",
        "remarks":"",
        "img": "https://share.aitimi.cn/maskable-icon.png",
        "url": "https://share.aitimi.cn/editor",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "solo",
        "des": "独立开发者社区",
        "remarks":"",
        "img": "https://icon-spirit.oss-cn-beijing.aliyuncs.com/solo/logo4.png",
        "url": "https://solo.xin",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "undraw",
        "des": "插画库",
        "remarks":"",
        "img": "https://undraw.co/favicon.ico",
        "url": "https://undraw.co/illustrations",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "devv.ai",
        "des": "编程搜索(目前需要科学访问)",
        "remarks":"",
        "img": "",
        "url": "https://devv.ai/zh",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "职得简历",
        "des": "用ai辅助写简历",
        "remarks":"",
        "img": "https://ai.zhidejianli.com/favicon.ico",
        "url": "https://ai.zhidejianli.com/login?redirect=/index",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "ai简历",
        "des": "ai简历",
        "remarks":"",
        "img": "https://www.elegantresume.pro/favicon.ico",
        "url": "https://www.elegantresume.pro/",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "算法通关手册",
        "des": "算法知识以及leetcode题解",
        "remarks":"",
        "img": "https://algo.itcharge.cn/logo.svg",
        "url": "https://algo.itcharge.cn/Solutions/",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "趣站研究所",
        "des": "导航网站",
        "remarks":"",
        "img": "https://share.hsmy.fun/logo.png",
        "url": "https://share.hsmy.fun/category/read",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "趣导航",
        "des": "导航网站",
        "remarks":"",
        "img": "",
        "url": "https://qssily.com/",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "趣乐兔",
        "des": "资源站",
        "remarks":"",
        "img": "https://i1.funletu.com/img/cropped-BE13fn-32x32.png",
        "url": "https://funletu.com",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "喜欢书签",
        "des": "导航网站",
        "remarks":"",
        "img": "https://www.likebookmark.com/favicon.ico",
        "url": "https://www.likebookmark.com/#category-205",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "闪击工作台snakki",
        "des": "导航网站",
        "remarks":"",
        "img": "",
        "url": "https://nav.sankki.com/#/index",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "闲着导航",
        "des": "导航网站",
        "remarks":"",
        "img": "https://nav.justmyfreedom.com/favicon.ico",
        "url": "https://nav.justmyfreedom.com",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
    {
        "title": "",
        "des": "AI SEO标题生成器",
        "remarks":"",
        "img": "https://aitdk.com/favicon.ico",
        "url": "https://aitdk.com/zh-CN",
        "rankingIndex": 0,
        "setTop":false,
        "tags": ["recommend"]
    },
]

export const websiteStore = defineStore('website', () =>{
    const websites = ref<WebSites>([...websiteData])
    return{websites}
})