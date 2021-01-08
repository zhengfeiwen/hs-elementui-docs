import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/image/index',
  component: () => import('@/views/components/image/index.vue'),
  name: 'image',
  meta: {
    title: 'image',
    icon: '',
    noCache: true
  }
}

export default Route
