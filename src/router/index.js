import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HengTai from '@/components/HengTai'
import List from '@/page/List'
import Search from '../components/Search'
import Head from '../components/Head'
import Footer from '../components/Footer'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HengTai',
      component: HengTai
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Head',
      name: 'Head',
      component: Head
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    }
  ]
})
