<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
        下面代码<code>el-switch</code>介绍
        <template v-slot:source>
          <el-switch v-model="value" active-text="启用" inactive-text="关闭"> </el-switch>
        </template>
        <template v-slot:highlight>
          <default-md></default-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo1>
      <demo-block>
        <p>下面代码<code>el-switch</code>介绍</p>
        <template v-slot:source>
          <el-switch v-model="value1"></el-switch>
        </template>
        <template v-slot:highlight>
          <demo1-md></demo1-md>
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
import demo1Md from './demo1.md'
import attributes from './attributes'
import events from './events'

export default {
  name: 'demo',
  components: {
    defaultMd,
    demo1Md,
    indexMd
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
