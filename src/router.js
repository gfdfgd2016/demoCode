import { createRouter,createWebHistory ,createWebHashHistory } from 'vue-router'
//const routerHistory = createWebHistory()
const routerHash=createWebHashHistory()
const router = createRouter({
    history: routerHash,
    routes: [{
        path:'/',
        redirect:{
            name:'index'
        }
    },{
        path:'/login',
        name:'login',
        component:()=>import('./views/login.vue')
    },{
        path:'/index',
        name:'index',
        component:()=>import('./views/index.vue')
    },{
        path:'/error',
        name:'error',
        component:()=>import('./views/error.vue')
    },{
        path:'/404',
        name:'404',
        component:()=>import('./views/404.vue')
    }
        
    ],
})

export default router