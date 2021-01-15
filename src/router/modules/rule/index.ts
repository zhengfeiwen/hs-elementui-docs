import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const Rule: RouteConfig = {
  path: '/rule',
  component: Layout,
  redirect: 'noredirect',
  meta: {
    title: 'rule',
    icon: 'excel'
  },
  children: [{
    path: 'color/index',
    component: () => import('@/views/rule/color/index.vue'),
    name: 'color',
    meta: {
      title: 'color',
      noCache: true
    }
  },
  {
    path: 'border/index',
    component: () => import('@/views/rule/border/index.vue'),
    name: 'border',
    meta: {
      title: 'border',
      noCache: true
    }
  },
  {
    path: 'font/index',
    component: () => import('@/views/rule/font/index.vue'),
    name: 'font',
    meta: {
      title: 'font',
      noCache: true
    }
  }
  ]
}

export default Rule
