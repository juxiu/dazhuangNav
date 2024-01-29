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
    {name:'在线影视',suffix:'🎬',id:'onlineVideo'}
]

const websiteData=[
    {
        "title": "阮一峰网络日志",
        "des": "阮一峰网络日志",
        "img": "https://www.ruanyifeng.com/blog/images/person2.jpg",
        "url": "https://www.ruanyifeng.com/blog/",
        "tags": ["recommend", "wellKnownBlog"]
    }
]

export const websiteStore = defineStore('website', () =>{
    const websites = ref<WebSites>([...websiteData])
    return{websites}
})