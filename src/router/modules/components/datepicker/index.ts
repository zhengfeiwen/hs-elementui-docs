import { RouteConfig } from 'vue-router'

const BusiDemo: RouteConfig = {
  path: 'datepicker/index',
  component: () => import('@/views/datepicker/index.vue'),
  name: 'datepicker',
  meta: {
    title: 'datepicker',
    icon: '',
    noCache: true
  }
}

export default BusiDemo
