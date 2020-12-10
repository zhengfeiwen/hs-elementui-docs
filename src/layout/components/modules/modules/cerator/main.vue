<template>
  <div class="cerator_container">
    <div>
      <svg class="Zi Zi--Creator CreatorEntrance-creatorIcon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M15.075 15.388l-3.024 3.024a4.041 4.041 0 0 0-1.014 1.697l-.26.868C7.844 20.986 4.91 21 2 21c.026-3.325 0-3.304.59-3.956 1.237-1.368 6.251-.68 6.44-2.976.043-.518-.36-1.06-.725-1.69C6.285 8.87 5.512 2 11.5 2c5.988 0 5.15 7.072 3.246 10.378-.357.62-.795 1.217-.724 1.77.073.571.477.958 1.053 1.24zm5.402 1.672c.523.55.523.646.523 3.94a535.11 535.11 0 0 0-4.434-.028l3.911-3.912zm-7.88 2.699c.111-.37.312-.705.584-.978l4.76-4.76a.291.291 0 0 1 .412 0l1.626 1.626a.291.291 0 0 1 0 .411l-4.76 4.76c-.272.273-.608.474-.978.585l-1.96.588a.219.219 0 0 1-.272-.272l.589-1.96zm9.157-6.742a.839.839 0 0 1 0 1.187l-.94.94a.28.28 0 0 1-.395 0l-1.563-1.563a.28.28 0 0 1 0-.395l.94-.94a.839.839 0 0 1 1.187 0l.771.771z" fill-rule="evenodd"></path></svg>
      <span>创作中心</span>
    </div>
    <a href="#">去开通</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'cerator',
  components: {
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.cerator_container {
  width: 296px;
  height:52px;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 3px rgba(18,18,18,.1);
  -moz-box-shadow: 0 1px 3px rgba(18,18,18,.1);
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
  margin: 5px;
  padding: 10px 20px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div{
    display: flex;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    svg{
      color: #8590a6;
    }
    span{
      line-height: 1.4;
      color: #444;
      padding-left: 6px;
      margin-top: 1px;
      font-size: 14px;
      font-weight:500;
      cursor: pointer;
    }
  }
  a{
    color:rgb(0, 132, 255);
    font-size: 14px;
    font-weight:500;
    line-height: 2.4;
    &:after{
      content: '>';
      color: #444;
      margin-left: 10px;
    }
  }
}
</style>
