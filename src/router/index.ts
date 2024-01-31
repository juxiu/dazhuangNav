import { createRouter,createWebHashHistory } from "vue-router"


const routes = [
    {
        path: '/',
        component:()=>import('../views/home/index.vue')
    },
    {
        path: '/admin',
        component:()=>import('../views/admin/admin.vue')
    }
]


export default createRouter({
    history: createWebHashHistory(),
    routes
})


