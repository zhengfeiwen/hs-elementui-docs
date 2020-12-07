
import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'
import Datepicker from './datepicker'
import Navigation from './navigation'
import Progress from './progress'
import Upload from './upload'

const Components: RouteConfig = {
  path: '/components',
  component: Layout,
  redirect: 'noredirect',
  meta: {
    title: 'components',
    icon: 'component'
  },
  children: [
    Datepicker,
    Navigation,
    Progress,
    Upload
  ]
}

export default Components
