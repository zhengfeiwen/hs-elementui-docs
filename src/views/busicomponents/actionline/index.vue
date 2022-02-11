<template>
  <index-md>
    <template v-slot:defalutDemo>
      <demo-block>
        <template v-slot:source>
          <hs-actionline
            :actionFunc="actionFunc"
            :actionQuery="actionQuery"
          ></hs-actionline>
        </template>
        <template v-slot:highlight>
          <defaultDemo-md></defaultDemo-md>
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
import defaultDemoMd from './defaultDemo.md'
const attributes = require('./attributes.js')
const events = require('./events.js')

export default {
  name: 'actionline',
  components: {
    defaultDemoMd,
    indexMd
  },
  data () {
    return {
      attributes,
      events,
      actionFunc: [
        {
          text: '查询',
          iclass: 'el-icon-search',
          handle: () => {
            this.handle('查询')
          }
        }
      ],
      actionQuery: [
        {
          text: '新增',
          handle: () => {
            this.handle('新增')
          }
        },
        {
          text: '删除',
          type: 'danger',
          handle: () => {
            this.handle('删除')
          }
        }
      ]
    }
  },
  methods: {
    handle: function (text) {
      alert(text)
    }
  }
}
</script>

<style>
.resourcepool {
  display: none;
  width: 100%;
  height: 100px;
  padding: auto;
  text-align: center;
  border: 1px #d9d9d9 solid;
}
.resourcepool.active {
  display: block;
}

.el-picker-panel__body
  .el-date-range-picker__time-header
  .el-date-range-picker__editors-wrap
  .el-date-range-picker__time-picker-wrap
  .el-date-range-picker__editor {
  width: 107px;
}
</style>
