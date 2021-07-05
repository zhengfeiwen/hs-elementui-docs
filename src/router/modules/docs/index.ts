import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const Rule: RouteConfig = {
  path: '/docs',
  component: Layout,
  redirect: 'noredirect',
  meta: {
    hidden: true,
    title: 'docs'
  },
  children: [
    {
      path: 'structure-algorithm/structure/index',
      component: () => import('@/views/ready/docs/structure-algorithm/structure/index.vue'),
      name: 'structure',
      meta: {
        title: 'structure',
        noCache: true
      }
    },
    {
      path: 'structure-algorithm/algorithm/index',
      component: () => import('@/views/ready/docs/structure-algorithm/algorithm/index.vue'),
      name: 'algorithm',
      meta: {
        title: 'algorithm',
        noCache: true
      }
    },
    {
      path: 'performance-optimization/index',
      component: () => import('@/views/ready/docs/performance-optimization/index.vue'),
      name: 'performance-optimization',
      meta: {
        title: 'performance-optimization',
        noCache: true
      }
    },
    {
      path: 'code-rule/code/index',
      component: () => import('@/views/ready/docs/code-rule/code/index.vue'),
      name: 'code',
      meta: {
        title: 'code',
        noCache: true
      }
    },
    {
      path: 'code-rule/logic/index',
      component: () => import('@/views/ready/docs/code-rule/logic/index.vue'),
      name: 'logic',
      meta: {
        title: 'logic',
        noCache: true
      }
    },
    {
      path: 'otherrule/index',
      component: () => import('@/views/ready/docs/otherrule/index.vue'),
      name: 'otherrule',
      meta: {
        title: 'otherrule',
        noCache: true
      }
    }
  ]
}

export default Rule
