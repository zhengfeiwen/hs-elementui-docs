import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/upload/index',
  component: () => import('@/views/components/upload/index.vue'),
  name: 'upload',
  meta: {
    title: 'upload',
    icon: '',
    noCache: true
  }
}

export default Route
