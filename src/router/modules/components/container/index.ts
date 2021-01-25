import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/container/index',
  component: () => import('@/views/components/container/index.vue'),
  name: 'container',
  meta: {
    title: 'container',
    icon: '',
    noCache: true
  }
}

export default Route
