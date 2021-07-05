import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/user'
import { RightModule } from '@/store/modules/right'
import { PermissionModule } from '@/store/modules/permission'
import i18n from '@/lang' // Internationalization
import settings from './settings'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect']

const that: any = this

const getPageTitle = (key: string) => {
  const hasKey = i18n.te(`route.${key}`)
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`)
    return `${pageName} - ${settings.title}`
  }
  return `${settings.title}`
}

router.beforeEach(async (to: Route, _: Route, next: any) => {
  // Start progress bar
  NProgress.start()

  // Determine whether the user has logged in
  if (UserModule.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // Check whether the user has obtained his permission roles
      if (RightModule.accessroutes.length === 0) {
        try {
          // 获取菜单权限
          await RightModule.getRightByUserId(UserModule.id).catch(res => {
            RightModule.ResetToken();
            that.$message.error(res.msg || 'getRightByUserId Has Error')
            next(`/login?redirect=${to.path}`)
            NProgress.done()
          })
          // 初始化菜单权限
          PermissionModule.GenerateRoutes(RightModule.accessroutes)
          // 菜单权限加入到动态路由中
          router.addRoutes(PermissionModule.dynamicRoutes)
          // 确认添加完成后 获取菜单权限
          // await RightModule.getOperaRight({ id: to.meta.id, menuId: to.meta.id }).catch(res => {
          //   RightModule.ResetToken()
          //   Message.error(res.msg || 'getOperaRight Has Error')
          //   next(`/login?redirect=${to.path}`)
          //   NProgress.done()
          // })
          // 设置 replace: true, 这样就不会留下历史记录了
          next({ ...to, replace: true })
        } catch (err) {
          // 移除token 返回到登录界面
          UserModule.ResetToken()
          RightModule.ResetToken();
          that.$message.error(err)
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        // await RightModule.getOperaRight({ id: to.meta.id, menuId: to.meta.id }).catch(res => {
        //   RightModule.ResetToken()
        //   Message.error(res.msg || 'getOperaRight Has Error')
        //   next(`/login?redirect=${to.path}`)
        //   NProgress.done()
        // })
        // 设置 replace: true, 这样就不会留下历史记录了
        next()
      }
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach((to: Route) => {
  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  NProgress.done()

  // set page title
  document.title = getPageTitle(to.meta.title)
})
