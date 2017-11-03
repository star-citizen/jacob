import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      redirect: {
      name: 'portfolio',
    },
    },
  ]
})
