<template>
  <div class="navbar">
      <div class="navbar_body">
        <div class="left-menu">
          <div class="logo">知否</div>
          <div class="tabs">
             <hs-tabs
              tabType="toptab"
              :tabs="navTabs"
              :defaultTab="0"
              @change="tabChange"
            ></hs-tabs>
          </div>
          <div class="search">
            <div class="txt-search">
              <input type="text" id="txt-search" >
              <div class="btn-search">
                <svg class="Zi Zi--Search SearchBar-searchIcon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z" fill-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <el-button id="btn-question" type="primary">提问</el-button>
          </div>
        </div>
        <div class="right-menu">
        <el-dropdown
          class="avatar-container right-menu-item hover-effect"
          trigger="click"
        >
          <div class="avatar-wrapper">
            <span class="user-name">{{ userinfo.name }}</span>
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/profile/">
              <el-dropdown-item>
                {{ $t("navbar.profile") }}
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click.native="logout">
              <span style="display: block">
                {{ $t("navbar.logOut") }}
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import { UserModule } from '@/store/modules/user'
import { TabsViewModule } from '@/store/modules/tabs-view'

@Component({
  name: 'Navbar',
  components: {
  }
})
export default class extends Vue {
  private navTabs:object[] = [
    {
      id: 'home',
      name: '首页'
    },
    {
      id: 'vip',
      name: '会员'
    },
    {
      id: 'find',
      name: '发现'
    },
    {
      id: 'ask',
      name: '等你来答'
    }
  ]

  private tabClass:any;
  get sidebar () {
    return AppModule.sidebar
  }

  get device () {
    return AppModule.device.toString()
  }

  get avatar () {
    return UserModule.avatar
  }

  get userinfo () {
    return UserModule.context.state
  }

  private toggleSideBar () {
    AppModule.ToggleSideBar(false)
  }

  private async logout () {
    await UserModule.LogOut()
    this.$router
      .push(`/login?redirect=${this.$route.fullPath}`)
      .catch((err) => {
        console.warn(err)
      })
  }

  private mounted () {
    TabsViewModule.updateTabActiveView({
      id: 'home',
      name: ''
    })
  }

  private tabChange (key: string) {
    // change
    TabsViewModule.updateTabActiveView({
      id: key,
      name: ''
    })
  }
}
</script>

<style lang="scss" scoped>
.user-name {
  font-size: 14px;
}
.navbar {
  height: 50px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
.navbar_body{
    width: 1000px;
    height: 50px;
    line-height:50px;
    margin: auto auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left-menu {
      display: flex;
      flex-direction: row;
      align-items:center;
      user-select: none;
      .logo{
        font-size: 26px;
        color: #1791FF;
        margin-right: 10px;
      }
      .search{
        display: flex;
        flex-direction: row;
        height: 32px;
        line-height: 32px;
        .txt-search{
          width: 200px;
          display: flex;
          flex-direction: row;
          border: 1px solid rgb(235, 235, 235);
          background-color: #f6f6f6;
          border-radius: 4px;
          outline: none;
          font-size: 14px;
          color: #121212;
          margin-right: 10px;
          .btn-search{
            width: 40px;
            height: 100%;
            padding: 4px 12px;
            // background-color: #1791FF;
          }
        }
        #txt-search{
          outline: none;
          border: none;
          background-color: #f6f6f6;
          padding-left: 10px;
        }

        #btn-question{
          height:32px;
          line-height:10px;
        }
      }
    }
    .right-menu {
      height: 100%;
      line-height: 50px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background 0.3s;

          &:hover {
            background: rgba(0, 0, 0, 0.025);
          }
        }
      }

      .avatar-container {
        margin-right: 30px;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
