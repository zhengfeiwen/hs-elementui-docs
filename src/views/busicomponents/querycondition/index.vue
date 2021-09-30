<template>
  <index-md>
    <template v-slot:defalut>
      <demo-block>
        <p>该组件将常用的查询条件组件集群在一起，通过配置的方式去统一生成组件</p>
        <template v-slot:source>
          <demo-default></demo-default>
        </template>
        <template v-slot:highlight>
          <default-md></default-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:table>
      <document-table title="属性" :data="attributes"></document-table>
    </template>
  </index-md>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import indexMd from './index.md'
import defaultMd from './default.md'
import demoDefault from './default.vue'
const { attributes } = require('./attributes.js')
@Component({
  name: 'hs-card',
  components: {
    'default-md': defaultMd,
    indexMd,
    'demo-default': demoDefault
  }
})
export default class extends Vue {
  private attributes:any = attributes
  private value = !0
  private value1 = !0
}
</script>
