import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Information from '../views/Information.vue'

Vue.use(VueRouter)

const routes = [{
    path: '*',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/information/:id',
    name: 'Information',
    component: Information
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: '/hotel',
  routes,
})

export default router