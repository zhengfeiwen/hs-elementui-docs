import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/tinymce/index',
  component: () => import('@/views/components/tinymce/index.vue'),
  name: 'tinymce',
  meta: {
    title: 'tinymce',
    icon: '',
    noCache: true
  }
}

export default Route
