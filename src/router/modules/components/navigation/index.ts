import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/navigation/tabs/index',
  component: () => import('@/views/components/navigation/tabs/index.vue'),
  name: 'navigation',
  meta: {
    title: 'navigation',
    icon: '',
    noCache: true
  }
}

export default Route
