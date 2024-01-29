import { defineStore } from 'pinia'
import {ref} from 'vue'
import { tagsData } from './websiteStore'
export interface Tag {
    name: string,
    suffix: string,
    id: string
}
export type Tags = Tag[]

export const useHomeStore = defineStore('homeStore', () => {
   
    const tags = ref<Tags>([...tagsData])

    const setTags = (newTags:Tags) => { 
        tags.value = newTags
    }
    return {tags,setTags}
})