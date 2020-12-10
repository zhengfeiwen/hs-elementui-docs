<template>
  <div class="home_container">
    <div class="home_body">
      <div class="left_body">
        <div class="left_tab">
          <hs-tabs
            tabType="btntab"
            :tabs="leftTabs"
            :defaultTab="0"
            @change="tabChange"
          ></hs-tabs>
        </div>
        <div class="left_main">
          <transition
            name="fade-transform"
            mode="out-in"
          >
            <home-recommend v-if="curTab === 'recommend'"></home-recommend>
            <home-concern v-if="curTab === 'concern'"></home-concern>
            <home-hottop v-if="curTab === 'hottop'"></home-hottop>
          </transition>
        </div>
      </div>
      <div class="right_body">
        <write></write>
        <cerator></cerator>
        <category></category>
        <advertisement></advertisement>
        <preference></preference>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Recommend, Concern, Hottop } from './modules/index'
import { Preference, Category, Cerator, Write, Advertisement } from '../modules/index'

@Component({
  name: 'tab-home',
  components: {
    'home-recommend': Recommend,
    'home-concern': Concern,
    'home-hottop': Hottop,
    preference: Preference,
    category: Category,
    cerator: Cerator,
    write: Write,
    advertisement: Advertisement
  }
})
export default class extends Vue {
  private leftTabs:object[] = [
    {
      id: 'recommend',
      name: '推荐'
    },
    {
      id: 'concern',
      name: '关注'
    },
    {
      id: 'hottop',
      name: '热榜'
    }
  ]

  private curTab = 'recommend'

  private tabChange (id: string) {
    this.curTab = id
  }
}
</script>

<style lang="scss" scoped>
.home_container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  .home_body{
    width: 100%;
    overflow: overlay;
    height: 100%;
    background-color: transparent;
    padding: 10px calc(50% - 500px) 0;
    display: flex;
    flex-direction: row;
    .left_body{
      width: 694px;
      height: auto;
      background-color: #fff;
      -webkit-box-shadow: 0 1px 3px rgba(18,18,18,.1);
      -moz-box-shadow: 0 1px 3px rgba(18,18,18,.1);
      box-shadow: 0 1px 3px rgba(18,18,18,.1);
      margin: 5px;
      .left_tab{
        padding: 10px;
        border-bottom: #e3e3e3 1px solid;
      }
      .left_main{
        padding: 10px 12px;
      }
    }
    .right_body{
      width: calc(100% - 704px);
      height: 100%;
      padding-bottom: 10px;
    }
  }
}
</style>
