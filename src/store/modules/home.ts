import { defineStore } from 'pinia'

import {ref} from 'vue'

export const useHomeStore = defineStore('homeStore', () => {
    

    const tags = ref([{name:'test',suffix:'😂'},{name:'test',suffix:'😂'}])

    const setTags = (newTags) => { 
        tags.value = newTags
    }
    return {tags,setTags}
})