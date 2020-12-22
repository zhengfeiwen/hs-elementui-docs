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
<script>
import indexMd from './index.md'
import defaultMd from './default.md'
import attributes from './attributes'
import events from './events'
import demoDefault from './default'

export default {
  name: 'tinymce',
  components: {
    defaultMd,
    indexMd,
    'demo-default': demoDefault
  },
  data () {
    return {
      attributes,
      events,
      value: true,
      value1: true
    }
  }
}
</script>
