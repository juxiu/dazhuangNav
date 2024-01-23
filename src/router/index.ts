import { createRouter,createWebHashHistory } from "vue-router"


const routes = [
    {
        path: '/',
        component:()=>import('../views/home/index.vue')
    }
]


export default createRouter({
    history: createWebHashHistory(),
    routes
})


