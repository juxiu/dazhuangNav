<script setup lang="ts">
import { NInput, NIcon, NButton, NDivider, NGrid, NGridItem, NCard } from "naive-ui"
import { FlashOutline } from "@vicons/ionicons5"
import { ref } from "vue"

import { useHomeStore } from "@/store/modules/home.ts"
const { tags, setTags } = useHomeStore()

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
        <section class="">
            <n-grid :x-gap="12" :y-gap="8" :cols="6">
                <n-grid-item v-for="item in 16">
                    <n-card title="卡片">
                        卡片内容
                    </n-card>
                </n-grid-item>
            </n-grid>
        </section>
    </div>
</template>