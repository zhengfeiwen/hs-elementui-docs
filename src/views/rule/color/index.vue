<template>
  <hs-row>
    <hs-row>
      <h1>Color 色彩</h1>
      <h2>为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</h2>
    </hs-row>
    <hs-row>
      <h1>场景色</h1>
      <h2>在不同的场景中使用（例如危险色表示危险的操作）。</h2>
      <div class="demo success">success</div>
      <div class="demo warning">warning</div>
      <div class="demo danger">danger</div>
      <div class="demo info">info</div>
    </hs-row>
    <hs-row>
      <h1>边框色</h1>
      <h2>提供了两种的边框颜色</h2>
      <div class="demo demo-border border-color-main">
        <div class="main-border"></div>
      </div>
      <div class="demo demo-border border-color-minor">
        <div class="minor-border"></div>
      </div>
    </hs-row>
    <hs-row>
      <h1>文字色</h1>
      <h2>提供了标题与正文的颜色。</h2>
      <header class="title-main-color"><div class="font-main"></div>标题</header>
      <article class="title-minor-color"><div class="font-minor"></div>我是一篇短文</article>
    </hs-row>
  </hs-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'hs-color',
  components: {
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
  h2{
    font-weight: 300;
  }
  .demo{
    width: 200px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color:#fff;
    display: inline-block;
    margin-right: 20px;
    font-size: 20px;
  }
  .demo-border{
    color: #000;
    padding: 10px;
  }
  .main-border{
    width: 100%;
    height: 100%;
    background-color:  #DCDFE6;
  }
  .minor-border{
    width: 100%;
    height: 100%;
    background-color:  #E4E7ED;
  }
  [class^=font-]{
    height: 15px;
    width: 15px;
    display: inline-block;
    margin-right: 10px;
  }
  .font-main{
    background-color: #303133;
  }
    .font-minor{
    background-color: #909399;
  }
  .title-main-color{
    color: #303133;
  }

  .title-minor-color{
    color: #909399;
  }
</style>
