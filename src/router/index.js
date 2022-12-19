import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/counter',
        name: 'counter',
        component: () => import(/* webpackChunkName: "about" */ '../views/CounterView.vue')
    },
    {
        path: '/users',
        name: 'users',
        component: () => import(/* webpackChunkName: "users" */ '../views/UsersView')
    },
    {
        path: '/pokemon-search',
        name: 'pokemon-search',
        component: () => import(/* webpackChunkName: "pokemon-search" */ '../views/PokemonSearch')
    },
    {
        path: '/pokemon-search/:id',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "pokemon" */ '../views/PokemonView')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
