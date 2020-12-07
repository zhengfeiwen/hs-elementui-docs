import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'
import BusiDemo from './modules/busiDemo'
import Components from './modules/components'
/* Router modules */

Vue.use(VueRouter)

/*
  Note: sub-menu only appear when children.length>=1
  Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
*/

/*
  name:'router-name'             the name field is required when using <keep-alive>, it should also match its component's name property
                                 detail see : https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    roles: ['admin', 'editor']   will control the page roles (allow setting multiple roles)
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    hidden: true                 if true, this route will not show in the sidebar (default is false)
    alwaysShow: true             if true, will always show the root menu (default is false)
                                 if false, hide the root menu when has less or equal than one children route
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    noCache: true                if true, the page will not be cached (default is false)
    affix: true                  if true, the tag will affix in the tags-view
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
*/

/**
  ConstantRoutes
  a base page that does not have permission requirements
  all roles can be accessed
*/
export const constantRoutes: RouteConfig[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect.vue'),
    meta: { hidden: true }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation',
    children: [
      {
        path: 'index',
        component: () => import('@/views/ready/documentation.vue'),
        name: 'documentation',
        meta: {
          title: 'documentation',
          icon: 'documentation',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/install',
    component: Layout,
    redirect: '/install',
    children: [
      {
        path: 'index',
        component: () => import('@/views/ready/install/install.vue'),
        name: 'install',
        meta: {
          title: 'install',
          icon: 'guide',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/updatelog',
    component: Layout,
    redirect: '/updatelog',
    children: [
      {
        path: 'index',
        component: () => import('@/views/ready/update.vue'),
        name: 'updatelog',
        meta: {
          title: 'updatelog',
          icon: 'list',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index.vue'),
        name: 'Icons',
        meta: {
          title: 'icons',
          icon: 'icon',
          noCache: true
        }
      }
    ]
  },
  Components,
  BusiDemo,
  {
    path: '/democode',
    component: Layout,
    redirect: '/democode',
    children: [
      {
        path: 'index',
        component: () => import('@/views/ready/democode/index.vue'),
        name: 'democode',
        meta: {
          title: 'democode',
          icon: 'guide',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/resourcepool',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'resourcepool',
        component: () => import('@/views/modules/studentmanage/resourcepool/index.vue'),
        name: 'resourcepool',
        meta: {
          title: 'resourcepool',
          icon: 'guide',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    meta: { hidden: true },
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index.vue'),
        name: 'Profile',
        meta: {
          title: 'profile',
          icon: 'user',
          noCache: true
        }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
*/
export const asyncRoutes: RouteConfig[] = [
  /** when your routing map is too long, you can split it into small modules **/
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: 'errorPages',
      icon: 'bug'
    },
    children: [
      {
        path: '401',
        component: () => import(/* webpackChunkName: "error-page-401" */ '@/views/error-page/401.vue'),
        name: 'Page401',
        meta: {
          title: 'page401',
          noCache: true
        }
      },
      {
        path: '404',
        component: () => import(/* webpackChunkName: "error-page-404" */ '@/views/error-page/404.vue'),
        name: 'Page404',
        meta: {
          title: 'page404',
          noCache: true
        }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  // mode: 'history', // Disabled due to Github Pages doesn't support this, enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
