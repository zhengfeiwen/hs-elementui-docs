import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { getRightByUserId, getOperaRight } from '@/api/right'
import { setToken, getToken, removeToken } from '@/utils/cookies'
import { SessionStorage } from '@/utils/storage'
import { RightRoute, UserInfo, OpType } from '@/utils/types'
import { createToken } from '@/utils/common'
import store from '@/store'

export interface IRightInfo {
  token: string
  accessroutes: RightRoute[]
  rpcUser: object
  userInfo: UserInfo
  opRight: OpType
}

@Module({ dynamic: true, store, name: 'right' })
class Right extends VuexModule implements IRightInfo {
  KEYS = {
    ROUTE: 'route_key',
    RPC_USER: 'rpc_key',
    USER_INFO: 'user_info_key',
    OP_RIGHT: 'op_right'
  }

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

  opRight = {
    opType: '',
    opCode: ''
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

  @Mutation
  private SET_OPRIGHT (opRight: OpType) {
    this.opRight = opRight
  }

  @Action
  public async getRightByUserId (id: number) {
    // 判断是否已经获取过权限了
    const routes = SessionStorage.get(this.KEYS.ROUTE, 'array')
    if (!routes || routes.length === 0) {
      const { data } = await getRightByUserId({
        id: id
      })
      // 获取token
      const token = createToken()
      this.SET_TOKEN(token)
      setToken(token)
      this.SET_ACCESSROUTES(data.accessRoutes)
      this.SET_RPCUSER(data.rpcUser)
      this.SET_USERINFO(data.userInfo)
      // 路由权限存入session中
      SessionStorage.set(this.KEYS.ROUTE, JSON.stringify(data.accessRoutes))
      SessionStorage.set(this.KEYS.RPC_USER, JSON.stringify(data.rpcUser))
      SessionStorage.set(this.KEYS.USER_INFO, JSON.stringify(data.userInfo))
    } else {
      const token = createToken()
      this.SET_TOKEN(token)
      setToken(token)
      this.SET_ACCESSROUTES(routes)
      this.SET_RPCUSER(SessionStorage.get(this.KEYS.RPC_USER, 'object'))
      this.SET_USERINFO(SessionStorage.get(this.KEYS.USER_INFO, 'object'))
    }
  }

  @Action
  public async getOperaRight (opData: { id: number, menuId: number }) {
    // 判断是否已经获取过权限了
    if (opData.menuId === -1) {
      return
    }
    const opRight = SessionStorage.get(this.KEYS.OP_RIGHT, 'object')
    if (!opRight || !opRight['op_' + opData.menuId]) {
      const { data } = await getOperaRight({
        id: opData.id,
        menuId: opData.menuId
      })
      // 缓存权限信息
      opRight['op_' + opData.menuId] = {
        opType: data.opType,
        opCode: data.opCode
      }
      this.SET_OPRIGHT(opRight)
      // 路由权限存入session中
      SessionStorage.set(this.KEYS.OP_RIGHT, JSON.stringify(opRight))
    } else {
      this.SET_OPRIGHT(opRight)
      SessionStorage.set(this.KEYS.OP_RIGHT, JSON.stringify(opRight))
    }
    console.log(this.opRight)
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
