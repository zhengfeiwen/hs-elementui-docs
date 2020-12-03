
import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'
import Datepicker from './datepicker'
import Navigation from './navigation'

const BusiDemo: RouteConfig = {
  path: '/components',
  component: Layout,
  redirect: 'noredirect',
  meta: {
    title: 'components',
    icon: 'component'
  },
  children: [
    Datepicker,
    Navigation
  ]
}

export default BusiDemo
