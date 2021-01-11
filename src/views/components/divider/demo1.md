```
<template>
  <hs-card style="width:400px" :shadow="shadow" :body-style ="bodyStyle">
    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">new date()</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
  </hs-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo1'
})
export default class extends Vue {
  private shadow = 'hover'
  private bodyStyle = {
    padding: '0px'
  }
}
</script>

<style lang="scss"> 
.image{
  width: 100%;
}
</style>
```