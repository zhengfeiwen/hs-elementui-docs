import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface ITabView {
  id?: string
  name?:string
}

export interface ITabsViewState {
  activeTab: ITabView
}

@Module({ dynamic: true, store, name: 'tabsView' })
class TabsView extends VuexModule implements ITabsViewState {
  public activeTab: ITabView = {}

  @Mutation
  private UPDATE_TAB_ACTIVE_VIEW (view: ITabView) {
    this.activeTab = view
  }

  @Action
  public updateTabActiveView (view: ITabView) {
    this.UPDATE_TAB_ACTIVE_VIEW(view)
  }
}

export const TabsViewModule = getModule(TabsView)
