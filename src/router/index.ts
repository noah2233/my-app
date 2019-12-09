import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Test1Layout from "../components/Layouts/Test1Layout.vue";
import Test2Layout from "../components/Layouts/Test2Layout.vue";
import Test1 from "../components/Test1.vue";
import Test2 from "../components/Test2.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Test1Layout',
    component: Test1Layout,
    children:[
      {
        path:'Test1',
        name:'Test1',
        component:Test1,
      }
    ]
  },
  {
    path: '',
    name: 'Test2Layout',
    component: Test2Layout,
    children:[
      {
        path:'Test2',
        name:'Test2',
        component:Test2,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
