import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemDetailVue from '@/components/ItemDetail.vue'
import AxiosRequestVue from '@/components/AxiosRequest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fetchFilms',
    name: 'fetchFilms',
    component: () => import(/* webpackChunkName: "about" */ '../components/FilmsForm.vue')
  },
  {
    path: '/detailsFilm/:id',
    name: 'detailsFilm',
    component: () => import(/* webpackChunkName: "about" */ '../components/DetailsFilm.vue')
  },
  {
    path: '/searchFilm',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/SearchFilm.vue')
  },
  {
    path: '/item/:name',
    component: ItemDetailVue
  },
  {
    path: '/axios',
    component: AxiosRequestVue
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
