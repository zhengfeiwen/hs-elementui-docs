<template>
 <hs-row>
   <h1>默认字体为13px，有加粗，辅助文字样式等</h1>
     <p class="font-bold">这是一段加粗字</p>
     <p class="font-extra">这是一段辅助文字</p>
     <h1>标题文字分为标准标题，大标题与小标题</h1>
     <p class="font-title-max">我是大标题</p>
     <p class="font-title">我是标准标题</p>
     <p class="font-title-mini">我是小标题</p>
     <h1>内容文字分为标准内容，小内容</h1>
     <p class="font-text">我是标准内容</p>
     <p class="font-text-mini">我是小内容</p>
 </hs-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'hs-font',
  components: {
  }
})
export default class extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
