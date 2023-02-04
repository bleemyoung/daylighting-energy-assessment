import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  
    {
        path: '/menu',
        name: "menu",
        component: () => import('../views/Menu.vue')   
    },
    {
        path: '/',
        name: "main",
        component: () => import('../views/Main.vue')   
    },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
