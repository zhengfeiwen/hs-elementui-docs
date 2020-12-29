<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
        <p>HsTinymce 富文本框组件</p>
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
      <document-table
        title="事件"
        type="Events"
        :data="events"
      ></document-table>
    </template>
  </index-md>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import indexMd from './index.md'
import defaultMd from './default.md'
import attributes from './attributes'
import events from './events'
import demoDefault from './default.vue'

@Component({
  name: 'hs-tinymce',
  components: {
    'default-md': defaultMd,
    indexMd,
    'demo-default': demoDefault
  }
})
export default class extends Vue {
  private events:any = events
  private attributes:any = attributes
}
</script>
