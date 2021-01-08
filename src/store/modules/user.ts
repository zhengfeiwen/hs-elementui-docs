import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login, logout, getUserInfo } from '@/api/users'
import { getCookie, setCookie, removeCookie } from '@/utils/cookies'
import { resetRouter } from '@/router'
import { TagsViewModule } from './tags-view'
import { RightModule } from './right'
import store from '@/store'

export interface IUserState {
  token: string
  id: number
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  private tokenKey = 'user_token'
  private userIdKey = 'user_id_token'
  public token = getCookie(this.tokenKey) || ''
  public name = ''
  public id = +(getCookie(this.userIdKey) || -1)
  public avatar = ''
  public introduction = ''
  public roles: string[] = []
  public email = ''

  @Mutation
  private SET_ID (id: number) {
    this.id = id
  }

  @Mutation
  private SET_TOKEN (token: string) {
    this.token = token
  }

  @Mutation
  private SET_NAME (name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR (avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_INTRODUCTION (introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_ROLES (roles: string[]) {
    this.roles = roles
  }

  @Mutation
  private SET_EMAIL (email: string) {
    this.email = email
  }

  @Action
  public async Login (userInfo: { username: string, password: string }) {
    let { username, password } = userInfo
    username = username.trim()
    const { data } = await login({ username, password })
    setCookie(this.tokenKey, data.accessToken)
    this.SET_TOKEN(data.accessToken)
    setCookie(this.userIdKey, data.id)
    this.SET_ID(data.id)
  }

  @Action
  public ResetToken () {
    removeCookie(this.tokenKey)
    removeCookie(this.userIdKey)
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }

  @Action
  public async GetUserInfo () {
    if (this.token === '') {
      throw Error('获取用户信息失败：token为定义')
    }
    const { data } = await getUserInfo({
      id: this.id
    })
    if (!data) {
      throw Error('验证失败，请重新登录')
    }
    const { id, name, avatar, introduction, email } = data.user
    this.SET_ID(id)
    this.SET_NAME(name)
    this.SET_AVATAR(avatar)
    this.SET_INTRODUCTION(introduction)
    this.SET_EMAIL(email)
  }

  @Action
  public async SetUserInfo (user: IUserState) {
    if (!user) {
      return
    }
    const { id, name, avatar, introduction, email } = user
    this.SET_ID(id)
    this.SET_NAME(name)
    this.SET_AVATAR(avatar)
    this.SET_INTRODUCTION(introduction)
    this.SET_EMAIL(email)
  }

  @Action
  public async LogOut () {
    if (this.token === '') {
      throw Error('登出失败：token为定义')
    }
    await logout()
    removeCookie(this.tokenKey)
    removeCookie(this.userIdKey)
    resetRouter()

    // 重置访问的视图和缓存的视图
    TagsViewModule.delAllViews()
    this.SET_TOKEN('')
    this.SET_ROLES([])
    RightModule.ResetToken()
  }
}

export const UserModule = getModule(User)
