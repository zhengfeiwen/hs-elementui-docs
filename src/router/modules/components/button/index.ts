import { RouteConfig } from 'vue-router'

const Button: RouteConfig = {
  path: '/button/',
  component: () => import('@/views/components/button/index.vue'),
  redirect: 'extendbutton',
  meta: {
    title: 'button'
  },
  children: [{
    path: 'extendbutton/index',
    component: () => import('@/views/components/button/extendbutton/index.vue'),
    name: 'extendbutton',
    meta: {
      title: 'extendbutton',
      noCache: true
    }
  },
  {
    path: 'iconbutton/index',
    component: () => import('@/views/components/button/iconbutton/index.vue'),
    name: 'iconbutton',
    meta: {
      title: 'iconbutton',
      noCache: true
    }
  },
  {
    path: 'logobutton/index',
    component: () => import('@/views/components/button/logobutton/index.vue'),
    name: 'logobutton',
    meta: {
      title: 'logobutton',
      noCache: true
    }
  }]
}

export default Button
