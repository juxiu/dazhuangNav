<script setup lang="ts">
import { NInput, NIcon, NTag } from 'naive-ui'
import { FlashOutline } from '@vicons/ionicons5'
import { ref } from "vue";

import { useHomeStore } from '@/store/modules/home.ts'
const { tags, setTags } = useHomeStore()
</script>

<template>
    <section class="h-80 flex flex-items-center p-1/4 pt-0 pb-0">
        <n-input round placeholder="搜索" size="large">
            <template #suffix>
                <n-icon :component="FlashOutline" />
            </template>
        </n-input>
    </section>
    <section class="p-1/4 pt-0 pb-0">
        <n-tag round v-for="tag in tags" :key="tag" class="mr-4" size="large"><span class="inline-block pa-1 pt-0 pb-0">{{
            tag.suffix }}&nbsp;&nbsp;{{ tag.name }}</span></n-tag>
    </section>
</template>