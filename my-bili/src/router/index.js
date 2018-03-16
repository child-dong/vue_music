import Vue from 'vue'
import Router from 'vue-router'
import ivideo from '@/components/video/video'
import ranking from '@/components/ranking/ranking'
import mv from '@/components/mv/mv'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/video',
      name: 'ivideo',
      component: ivideo
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking 
    },
    {
      path: '/mv',
      name: 'mv',
      component: mv
    }
  ]
})
