<template>
  <section class="user-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <keep-alive :include="tabsId">
        <template v-if="tabsId === 'home'">
          <tab-home></tab-home>
        </template>
        <template v-if="tabsId === 'vip'">
          <tab-vip></tab-vip>
        </template>
        <template v-if="tabsId === 'find'">
          <tab-find></tab-find>
        </template>
        <template v-if="tabsId === 'ask'">
          <tab-ask></tab-ask>
        </template>
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TabsViewModule } from '@/store/modules/tabs-view'
import { Ask, Home, Vip, Find } from './modules/index'

@Component({
  name: 'UserMain',
  components: {
    'tab-ask': Ask,
    'tab-home': Home,
    'tab-vip': Vip,
    'tab-find': Find
  }
})
export default class extends Vue {
  get tabsId () {
    return TabsViewModule.activeTab.id
  }

  get key () {
    return this.$route.path
  }
}
</script>

<style lang="scss" scoped>
.user-main {
  /* 50= navbar  50  */
  height: calc(100% - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.user-main {
  padding-top: 50px;
  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .user-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.user-main {
    padding-top: 84px;
  }
}
</style>
