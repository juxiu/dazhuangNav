import { defineStore } from 'pinia'
import {ref} from 'vue'
import { tagsData } from './websiteStore'


export const useHomeStore = defineStore('homeStore', () => {
    interface Tag {
        name: string,
        suffix: string,
        id: string
    }
    type Tags = Tag[]
    const tags = ref<Tags>([...tagsData])

    const setTags = (newTags:Tags) => { 
        tags.value = newTags
    }
    return {tags,setTags}
})