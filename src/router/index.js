import Vue from 'vue'
import VueRouter from 'vue-router'
import AdvertGary from '../views/advert/advertList/AdvertGary.vue'
import AdvertList from '../views/advert/advertList/AdvertList.vue'
import Advert from '../views/advert/AdvertView.vue'
import HomeView from '../views/layout/home/HomeView.vue'
import Layout from '../views/layout/LayoutPage.vue'
import Login from '../views/login/LoginPage.vue'
import OrderGary from '../views/order/orderlist/OrderGary.vue'
import OrderList from '../views/order/orderlist/OrderList.vue'
import Order from '../views/order/OrderView.vue'
import List from '../views/product/pChildern/PcOne.vue'
import Categary from '../views/product/pChildern/PcTwo.vue'
import Product from '../views/product/ProductView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      children: [{
        path: 'list',
        name: 'list',
        component: List
      },
      {
        path: 'category',
        name: 'category',
        component: Categary
      }]
    },
    {
      path:'/order',
      name:'order',
      component:Order,
      children:[{
        path:'orderlist',
        name:'orderlist',
        component:OrderList
      },
    {
      path:'ordergary',
      name:'ordergary',
      component:OrderGary
    }]
    },
    {
      path:'/advert',
      name:'advert',
      component:Advert,
      children:[{
        path:'advertlist',
        name:'advertlist',
        component:AdvertList
      },
    {
      path:'advertgary',
      name:'advertgary',
      component:AdvertGary
    }]
    }
  ]
    
  },
  {
    path: '/login',
    name: 'login',
    component: Login,

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
