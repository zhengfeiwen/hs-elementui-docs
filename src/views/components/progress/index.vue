<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
        <p>HsProgress 组件设置<code>percentage</code>属性即可，表示进度条对应的百分比，必填，必须在 0-100。通过 <code>format</code> 属性来指定进度条文字内容。</p>
        <template v-slot:source>
          <demo-default></demo-default>
        </template>
        <template v-slot:highlight>
          <default-md></default-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo1>
      <demo-block>
        <p>HsProgress 组件可通过 <code>stroke-width</code> 属性更改进度条的高度，并可通过 <code>text-inside</code> 属性来将进度条描述置于进度条内部。</p>
        <template v-slot:source>
          <demo1></demo1>
        </template>
        <template v-slot:highlight>
          <demo1-md></demo1-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo2>
      <demo-block>
        <template v-slot:source>
          <demo2></demo2>
        </template>
        <template v-slot:highlight>
          <demo2-md></demo2-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo3>
      <demo-block>
        <template v-slot:source>
          <demo3></demo3>
        </template>
        <template v-slot:highlight>
          <demo3-md></demo3-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo4>
      <demo-block>
        <p>通过<code>type</code>属性来指定使用仪表盘形进度条。</p>
        <template v-slot:source>
          <demo4></demo4>
        </template>
        <template v-slot:highlight>
          <demo4-md></demo4-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo5>
      <demo-block>
        <p>通过<code>taskChains</code>配置有序的任务链进行执行。</p>
        <template v-slot:source>
          <demo5></demo5>
        </template>
        <template v-slot:highlight>
          <demo5-md></demo5-md>
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

import demo1 from './demo1'
import demo2 from './demo2'
import demo3 from './demo3'
import demo4 from './demo4'
import demo5 from './demo5'

import demo1Md from './demo1.md'
import demo2Md from './demo2.md'
import demo3Md from './demo3.md'
import demo4Md from './demo4.md'
import demo5Md from './demo5.md'

export default {
  name: 'upload',
  components: {
    defaultMd,
    indexMd,
    'demo-default': demoDefault,
    demo1,
    demo2,
    demo3,
    demo4,
    demo5,
    demo1Md,
    demo2Md,
    demo3Md,
    demo4Md,
    demo5Md
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
