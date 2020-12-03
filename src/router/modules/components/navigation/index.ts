import { RouteConfig } from 'vue-router'

const BusiDemo: RouteConfig = {
  path: 'navigation/tabs/index',
  component: () => import('@/views/navigation/tabs/index.vue'),
  name: 'navigation',
  meta: {
    title: 'navigation',
    icon: '',
    noCache: true
  }
}

export default BusiDemo
