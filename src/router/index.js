import Vue from 'vue'
import Router from 'vue-router'
import Samples from '@/components/Samples'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Samples',
      component: Samples
    }
  ]
})
