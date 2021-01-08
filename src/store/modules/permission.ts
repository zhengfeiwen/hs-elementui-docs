import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { RouteConfig } from 'vue-router'
import { asyncRoutes, constantRoutes } from '@/router'
import { RightRoute } from '@/utils/types'
import store from '@/store'

const hasPermission = (rights: RightRoute[], route: RouteConfig) => {
  if (route.meta && route.meta.id) {
    return rights.some(right => route.meta.id === right.menuId)
  } else {
    return true
  }
}

export const filterAsyncRoutes = (routes: RouteConfig[], rights: RightRoute[]) => {
  const res: RouteConfig[] = []
  routes.forEach(route => {
    const r = { ...route }
    if (hasPermission(rights, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, rights)
      }
      res.push(r)
    }
  })
  return res
}

export interface IPermissionState {
  routes: RouteConfig[]
  dynamicRoutes: RouteConfig[]
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
  public routes: RouteConfig[] = []
  public dynamicRoutes: RouteConfig[] = []

  @Mutation
  private SET_ROUTES (routes: RouteConfig[]) {
    this.routes = constantRoutes.concat(routes)
    this.dynamicRoutes = routes
  }

  @Action
  public GenerateRoutes (rights: RightRoute[]) {
    const accessedRoutes = filterAsyncRoutes(asyncRoutes, rights)
    this.SET_ROUTES(accessedRoutes)
  }
}

export const PermissionModule = getModule(Permission)
