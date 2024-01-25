import { defineStore } from 'pinia'

import {ref} from 'vue'

export const useHomeStore = defineStore('homeStore', () => {
    

    const tags = ref([{name:'test',suffix:'😂'}])
    for (let index = 0; index < 20; index++) {
        tags.value.push({name:'test'+index,suffix:'😂'})
    }

    const setTags = (newTags) => { 
        tags.value = newTags
    }
    return {tags,setTags}
})