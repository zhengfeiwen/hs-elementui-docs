
import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'
import Datepicker from './datepicker'
import Navigation from './navigation'
import Progress from './progress'
import Upload from './upload'
import Button from './button'
import Tinymce from './tinymce'
import Card from './card'
import Drawer from './drawer'
import Image from './image'
import Divider from './divider'

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
    Upload,
    Button,
    Tinymce,
    Card,
    Drawer,
    Image,
    Divider
  ]
}

export default Components
