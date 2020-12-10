
import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const Components: RouteConfig = {
  path: '/components',
  component: Layout,
  redirect: 'noredirect',
  meta: {
    title: 'components',
    icon: 'component'
  },
  children: [
  ]
}

export default Components
