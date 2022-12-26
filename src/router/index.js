import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '@/vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

// /=> home
// /about => about
// /about/a => [about, a]
// /about/b => [about, b]

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    children: [
      {
        path: 'a',
        component: {
          render: (h) => <h1>about a</h1>
        }
      },
      {
        path: 'b',
        component: {
          render: (h) => <h1>about b</h1>
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
