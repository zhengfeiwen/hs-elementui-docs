import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/card/index',
  component: () => import('@/views/components/card/index.vue'),
  name: 'card',
  meta: {
    title: 'card',
    icon: '',
    noCache: true
  }
}

export default Route
