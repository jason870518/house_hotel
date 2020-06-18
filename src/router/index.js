import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Information from '../views/Information.vue'
import Booking from '../components/booking.vue'

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
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
  },
]

const router = new VueRouter({
  routes,
})

export default router