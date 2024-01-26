<script setup lang="ts">
import { NInput, NIcon, NButton, NDivider, NGrid, NGridItem, NCard, NAvatar } from "naive-ui"
import { FlashOutline } from "@vicons/ionicons5"
import { ref } from "vue"

import { useHomeStore } from "@/store/modules/home.ts"
const { tags, setTags } = useHomeStore()


// const getTitle = (url) => {
//     return fetch(`https://api.embed.ly/1/oembed?url=${url}`)
//         .then((response) => response.text())
//         .then((html) => {
//             const doc = new DOMParser().parseFromString(html, "text/html");
//             const title = doc.querySelectorAll('title')[0];
//             return title.innerText;
//         });
// };

// // 你可以传入一个网页的URL数组，然后获取它们的标题
// const urls = [
//     'https://www.pnpm.cn',
//     'https://pinia.web3doc.top'
// ];

// Promise.all(urls.map((url) => getTitle(url)))
//     .then((titles) => {
//         console.log(titles);
//     });

// import ogs from 'open-graph-scraper';
// const options = { url: 'https://www.pnpm.cn' };
// ogs(options)
//     .then((data) => {
//         const { error, html, result, response } = data;
//         console.log('error:', error);  // This returns true or false. True if there was an error. The error itself is inside the result object.
//         console.log('html:', html); // This contains the HTML of page
//         console.log('result:', result); // This contains all of the Open Graph results
//         console.log('response:', response); // This contains response from the Fetch API
//     })

// 从其他网页获取Open Graph信息的函数
function getOpenGraphData(url) {
    // fetch('https://api.allorigins.win/get?url=' + encodeURIComponent(url))
    fetch('http://anyorigin.com/go?url=' + encodeURIComponent(url))

        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            const html = data.contents;
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const ogData = {
                title: doc.querySelector('meta[property="og:title"]').getAttribute('content'),
                description: doc.querySelector('meta[property="og:description"]').getAttribute('content'),
                image: doc.querySelector('meta[property="og:image"]').getAttribute('content'),
                url: doc.querySelector('meta[property="og:url"]').getAttribute('content')
            };
            console.log('Open Graph data:', ogData);
            // 在这里使用Open Graph数据，例如显示预览信息
        })
        .catch(error => {
            console.error('Error fetching Open Graph data:', error);
        });
}
// 调用函数并传入目标网页的URL
const targetUrl = 'https://www.pnpm.cn';
getOpenGraphData(targetUrl);

const data = [

]

for (let index = 0; index < 30; index++) {
    data.push({
        "title": "xxx",
        "des": "xxx",
        "img": "xxx",
        "url": "xxx",
        "tags": ["xxx", "xxx"]
    })

}

const activeIndex = ref(0)
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
            <n-button :type="activeIndex == index ? 'primary' : 'default'" secondary round v-for="(tag, index) in tags"
                :key="tag" @click="activeIndex = index" class="mr-3 mb-2" size="medium">
                <span class="inline-block pa-1 pt-0 pb-0">{{ tag.suffix }}&nbsp;{{ tag.name }}</span>
            </n-button>
        </section>
        <n-divider />
        <section class="pb-20">
            <n-grid :x-gap="40" :y-gap="30" :cols="4">
                <n-grid-item v-for="item in data">
                    <n-card :title="item.title" class="card-custom box-shadow-custom">
                        <template #header-extra>
                            <n-avatar :size="48" round
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                        </template>
                        {{ item.des }}
                    </n-card>
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