<script setup lang="ts">
import { FlashOutline } from "@vicons/ionicons5"
import {intersection} from 'lodash-es'

import { useHomeStore,Tag } from "@/store/modules/home.ts"
import { websiteStore } from "@/store/modules/websiteStore.ts"
const { tags } = useHomeStore()
const { websites } = websiteStore()
// 从其他网页获取Open Graph信息的函数
// function getOpenGraphData(url) {
//     // fetch('https://api.allorigins.win/get?url=' + encodeURIComponent(url))
//     fetch('http://anyorigin.com/go?url=' + encodeURIComponent(url))

//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error('Network response was not ok.');
//         })
//         .then(data => {
//             const html = data.contents;
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(html, 'text/html');
//             const ogData = {
//                 title: doc.querySelector('meta[property="og:title"]').getAttribute('content'),
//                 description: doc.querySelector('meta[property="og:description"]').getAttribute('content'),
//                 image: doc.querySelector('meta[property="og:image"]').getAttribute('content'),
//                 url: doc.querySelector('meta[property="og:url"]').getAttribute('content')
//             };
//             console.log('Open Graph data:', ogData);
//             // 在这里使用Open Graph数据，例如显示预览信息
//         })
//         .catch(error => {
//             console.error('Error fetching Open Graph data:', error);
//         });
// }
// // 调用函数并传入目标网页的URL
// const targetUrl = 'https://www.pnpm.cn';
// getOpenGraphData(targetUrl);

// for (let index = 0; index < 30; index++) {
//     data.value.push()
// }

const activeIndex = ref(0)
const activeTagId = ref('recommend')

const tagChange = (index:number,tag:any)=>{
    activeIndex.value = index
    activeTagId.value = tag.id
}
const websitesComputed = computed(()=>{
    return websites.filter((item:Tag)=>{
        return intersection([activeTagId.value],item.tags).length>0
    })
})
</script>

<template>
    <div class="w-1200px mx-auto">
        <section class="h-40 mt-30">
            <h1 class="text-center">title</h1>
            <span class="block w-1/2 mx-auto">
                <n-input round placeholder="搜索" size="large">
                    <template #suffix>
                        <n-icon :component="FlashOutline" />
                    </template>
                </n-input>
            </span>
        </section>
        <section>
            <n-button  :type="activeIndex == index ? 'primary' : 'default'" secondary round v-for="(tag, index) in tags"
                :key="tag" @click="tagChange(index,tag)" class="mr-3 mb-2" size="medium">
                <span class="inline-block pa-1 pt-0 pb-0">{{ tag.suffix }}&nbsp;{{ tag.name }}</span>
            </n-button>
        </section>
        <n-divider />
        <section class="pb-20">
            <n-grid :x-gap="40" :y-gap="30" :cols="4">
                <n-grid-item v-for="item in websitesComputed">
                    <a :href="item.url" target="_blank" class="decoration-none">
                        <n-card  class="card-custom box-shadow-custom">
                            <div class="flex justify-start flex-items-center">
                                <img    :src="`https://www.google.com/s2/favicons?domain=${item.url}&sz=128`"  class="w-15 h-15 rd-2" alt="" srcset="">
                                <div class="pl-4">
                                    <h3 class="pa-0 m-0">{{ item.title }}</h3>
                                    <div class="color-gray-500 text-sm">{{ item.des }}</div>
                                </div>
                            </div>
                        </n-card>
                </a>
                </n-grid-item>
            </n-grid>
        </section>
    </div>
</template>

<style>
.card-custom {
    cursor: pointer;
    -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: all 250ms cubic-bezier(.02, .01, .47, 1);
}

.card-custom:hover {
    box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
    transform: translate(0, -5px);
    transition-delay: 0s !important;
}

.box-shadow-custom {
    -webkit-box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
    box-shadow: 0 4px 16px rgba(48, 55, 66, 0.15);
}
</style>