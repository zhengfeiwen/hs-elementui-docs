import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/checkbox/index',
  component: () => import('@/views/form/checkbox/index.vue'),
  name: 'checkbox',
  meta: {
    title: 'checkbox',
    icon: '',
    noCache: true
  }
}

export default Route
