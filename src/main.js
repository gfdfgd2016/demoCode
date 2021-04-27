import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
const app=createApp(App)
app.use(router)
app.use(ElementPlus)
//app.mount('#app')
router.isReady().then(() => app.mount('#app'))
router.beforeEach((to, from, next) => {
    if (!to.name) {
        next({
            path: '/404'
        })
    } else {
        next()
    }
})