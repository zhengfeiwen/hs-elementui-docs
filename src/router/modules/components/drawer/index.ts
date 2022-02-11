import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/drawer/index',
  component: () => import('@/views/components/drawer/index.vue'),
  name: 'drawer',
  meta: {
    title: 'drawer',
    icon: '',
    noCache: true
  }
}

export default Route
