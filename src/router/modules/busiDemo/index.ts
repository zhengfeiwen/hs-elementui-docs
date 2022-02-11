import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const BusiDemo: RouteConfig = {
  path: '/busidemo',
  component: Layout,
  redirect: 'noredirect',
  meta: {
    title: 'busidemo',
    icon: 'excel'
  },
  children: [{
    path: 'actionline/index',
    component: () => import('@/views/busicomponents/actionline/index.vue'),
    name: 'actionline',
    meta: {
      title: 'actionline',
      icon: 'table',
      noCache: true
    }
  },
  {
    path: 'querycondition/index',
    component: () => import('@/views/busicomponents/querycondition/index.vue'),
    name: 'querycondition',
    meta: {
      title: 'querycondition',
      icon: 'hamburger',
      noCache: true
    }
  }
  ]
}

export default BusiDemo
