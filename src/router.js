import Vue from 'vue'
import Router from 'vue-router'

// View and Component Imports 
import Home from './components/Home.vue'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import ProductListParentChild from './components/ProductListParentChild'
import ProductListVuex from './components/ProductListVuex'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/productList',
      name: 'productlist',
      component: ProductList
    },
    {
      path: '/productDetail/:productId',
      name: 'productDetail',
      component: ProductDetail
    },
    {
      path: '/ProductListVuex',
      name: 'ProductListVuex',
      component: ProductListVuex
    },
    {
      path: '/ProductListParentChild',
      name: 'ProductListParentChild',
      component: ProductListParentChild
    }
  ]
})
