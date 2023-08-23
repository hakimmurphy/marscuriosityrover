import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/fhaz', name: 'FHAZ', component: ()=>import('../views/FHAZ.vue')},
    {path: '/navcam', name: 'NAVCAM', component: ()=>import('../views/NAVCAM.vue')},
    {path: '/mast', name: 'MAST', component: ()=>import('../views/MAST.vue')},
    {path: '/chemcam', name: 'CHEMCAM', component: ()=>import('../views/CHEMCAM.vue')},
    {path: '/mahli', name: 'MAHLI', component: ()=>import('../views/MAHLI.vue')},
    {path: '/rhaz', name: 'RHAZ', component: ()=>import('../views/RHAZ.vue')},
    {path: '/marscuriosityrover', name: 'marscuriosityrover', component: ()=>import('../views/RoverShow.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'highlight-active-link' 
}) 

export default router