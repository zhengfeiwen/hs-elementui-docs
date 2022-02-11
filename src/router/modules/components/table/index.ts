import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/table/index',
  component: () => import('@/views/components/table/index.vue'),
  name: 'table',
  meta: {
    title: 'table',
    icon: '',
    noCache: true
  }
}

export default Route
