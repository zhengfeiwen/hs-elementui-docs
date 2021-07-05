<template>
  <div class="busi-container">
    <p>busiType:{{ busiType }}</p>
    <user-info :infos="infos"></user-info>
    <component :is="busiType"></component>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserInfo from './components/userinfo.vue'
import busi1 from './busi1/index.vue'
import busi2 from './busi2/index.vue'

@Component({
  name: 'demo3',
  components: {
    UserInfo,
    busi1,
    busi2
  }
})
export default class Demo3 extends Vue {
  private busiType = this.$route.meta.busiType

  private infos = [
    {
      label: '姓名',
      value: '张三'
    },
    {
      label: '性别',
      value: '男'
    },
    {
      label: '年龄',
      value: '18'
    },
    {
      label: '毕业院校',
      value: '福州大学'
    },
    {
      label: '年级',
      value: '2021级'
    }
  ]
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
