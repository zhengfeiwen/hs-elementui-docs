import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { getRightByUserId, getOperaRightByUserId } from '@/api/right'
import { setToken, getToken, removeToken } from '@/utils/cookies'
import { RightRoute, UserInfo } from '@/utils/types'
import { createToken } from '@/utils/common'
import store from '@/store'

export interface IRightInfo {
  token: string
  accessroutes: RightRoute[]
  rpcUser: object
  userInfo: UserInfo
}

@Module({ dynamic: true, store, name: 'right' })
class Right extends VuexModule implements IRightInfo {
  token = getToken() || ''
  accessroutes: RightRoute[] = []
  rpcUser: object = {}
  userInfo: UserInfo = {
    token: '',
    id: -1,
    name: '',
    avatar: '',
    introduction: '',
    email: ''
  }

  get userinfo () {
    return this.userInfo
  }

  @Mutation
  private SET_TOKEN (token: string) {
    this.token = token
  }

  @Mutation
  private SET_ACCESSROUTES (accessroutes: RightRoute[]) {
    this.accessroutes = accessroutes
  }

  @Mutation
  private SET_RPCUSER (rpcUser: object) {
    this.rpcUser = rpcUser
  }

  @Mutation
  private SET_USERINFO (userInfo: UserInfo) {
    this.userInfo = userInfo
  }

  @Action
  public async getRightByUserId (id: number) {
    // 获取token
    const token = createToken()
    this.SET_TOKEN(token)
    setToken(token)
    const { data } = await getRightByUserId({
      id: id
    })
    this.SET_ACCESSROUTES(data.accessRoutes)
    this.SET_RPCUSER(data.rpcUser)
    this.SET_USERINFO(data.userInfo)
    // UserModule.SetUserInfo(data.userInfo)
    // 重置路由
    // resetRouter()
    // 基于权限动态生成可访问的动态路由
    // PermissionModule.GenerateRoutes(data.accessRoutes)
    // 添加动态路由
    // router.addRoutes(PermissionModule.dynamicRoutes)
    // 重置访问的视图和缓存的视图
    // TagsViewModule.delAllViews()
  }

  @Action
  public ResetToken () {
    removeToken()
    removeToken()
    this.SET_TOKEN('')
    this.SET_ACCESSROUTES([])
  }
}

export const RightModule = getModule(Right)
