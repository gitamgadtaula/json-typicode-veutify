import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import createView from '../views/CreateView.vue'
import EditView from '../views/EditView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: createView

  },
  { path: '/post/:id', component: EditView },
]

const router = new VueRouter({
  routes
})

export default router
