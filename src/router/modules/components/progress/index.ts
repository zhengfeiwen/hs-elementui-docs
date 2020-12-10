import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/progress/index',
  component: () => import('@/views/components/progress/index.vue'),
  name: 'progress',
  meta: {
    title: 'progress',
    icon: '',
    noCache: true
  }
}

export default Route
