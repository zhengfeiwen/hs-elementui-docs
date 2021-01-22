import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/plupload/index',
  component: () => import('@/views/components/plupload/index.vue'),
  name: 'plupload',
  meta: {
    title: 'plupload',
    icon: '',
    noCache: true
  }
}

export default Route
