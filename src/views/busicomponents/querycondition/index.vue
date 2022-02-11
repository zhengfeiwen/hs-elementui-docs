<template>
  <index-md>
    <template v-slot:defalutDemo>
      <demo-block>
        <template v-slot:source>
          <hs-querycondition
            :conditions="conditions"
            @change="changeQ"
          ></hs-querycondition>
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
  name: 'querycondition',
  components: {
    defaultDemoMd,
    indexMd
  },
  data () {
    return {
      attributes,
      events,
      conditions: {
        edu: {
          type: 'cascader',
          label: '教育中心',
          options: [
            {
              value: 'zsxt',
              name: '招生系统',
              childrenList: [
                {
                  value: 'kfbm',
                  name: '客服部门'
                }, {
                  value: 'qrzxm',
                  name: '全日制项目'
                }
              ]
            }
          ]
        },
        studytype: {
          type: 'select',
          label: '学习类型',
          placeholder: '请输入学习类型',
          list: [
            {
              text: '全日制[全日制]',
              value: 'qrz',
              name: '全日制'
            },
            {
              text: '本科项目[本科项目]',
              value: 'bkxm',
              name: '本科项目'
            },
            {
              text: '自考[自考]',
              value: 'zk',
              name: '自考'
            }
          ]
        },
        area: {
          type: 'cascader',
          label: '生源地区',
          options: [
            {
              value: 'zx',
              name: '直辖市',
              childrenList: [
                {
                  value: 'bj',
                  name: '北京'
                }, {
                  value: 'sh',
                  name: '上海'
                }
              ]
            },
            {
              value: 'fj',
              name: '福建省',
              childrenList: [
                {
                  value: 'fz',
                  name: '福州市'
                }, {
                  value: 'sm',
                  name: '三明市'
                }
              ]
            }
          ]
        },
        liststatus: {
          type: 'cascader',
          label: '名单状态',
          options: [
            {
              value: 'll ',
              name: '全部'
            },
            {
              value: 'wzp',
              name: '未指派'
            }
          ]
        },
        documnetarystatus: {
          type: 'select',
          label: '跟单状态',
          placeholder: '请输入',
          list: [
            {
              text: '全部',
              value: 'all',
              name: '全部'
            }
          ]
        },
        wanna: {
          type: 'input',
          label: '意向院校',
          placeholder: '请输入意向院校'
        },
        tel: {
          type: 'input',
          label: '联系电话',
          placeholder: '请输入'
        },
        firView: {
          type: 'input',
          label: '一访情况',
          placeholder: '请输入'
        },
        stuOrg: {
          type: 'cascader',
          label: '学生来源',
          placeholder: '请输入',
          options: [
            {
              value: 'zsxt',
              name: '网络咨询',
              childrenList: [
                {
                  value: 'kfbm',
                  name: '搜索推广'
                }, {
                  value: 'qrzxm',
                  name: '信息流推广'
                }
              ]
            }
          ]
        },
        stuWanna: {
          type: 'select',
          label: '学生意向',
          placeholder: '请输入',
          list: [
            {
              text: 'A',
              value: 'A',
              name: 'A'
            },
            {
              text: 'B',
              value: 'B',
              name: 'B'
            },
            {
              text: 'C',
              value: 'C',
              name: 'C'
            }
          ]
        },
        queryCon: {
          type: 'select',
          label: '查询条件',
          placeholder: '请输入',
          list: [
            {
              text: '按跟进',
              value: '1',
              name: '按跟进'
            }
          ]
        },
        unValidCnt: {
          type: 'select',
          label: '无效次数',
          placeholder: '请输入',
          list: [
            {
              text: '1',
              value: '1',
              name: '1'
            },
            {
              text: '2',
              value: '2',
              name: '2'
            }
          ]
        },
        order: {
          type: 'select',
          label: '排序',
          placeholder: '请输入',
          list: [
            {
              text: '按录入时间',
              value: '1',
              name: '按录入时间'
            },
            {
              text: '按指派时间',
              value: '2',
              name: '按指派时间'
            }
          ]
        },
        childNo: {
          type: 'input',
          label: '子编号',
          placeholder: '请输入'
        },
        url: {
          type: 'input',
          label: 'URL',
          placeholder: '请输入'
        },
        documentaryCnt: {
          type: 'input',
          label: '跟单次数',
          placeholder: '请输入'
        },
        note: {
          type: 'input',
          label: '备注',
          placeholder: '请输入'
        },
        name: {
          type: 'input',
          labels: ['学生姓名', '录入者', '跟进人'],
          placeholder: '请输入'
        },
        time: {
          type: 'datetime',
          labels: ['录入时间', '回访时间', '指派时间'],
          placeholder: '请输入'
        }
      }
    }
  },
  methods: {
    changeQ: function (data, key, labels) {
      // do someing
      if (!key) return
      alert(key + '|' + data[key] + '|' + (labels[key] ? labels[key] : ''))
      this.conditions[key].options = [
        {
          value: 'zsxt',
          name: '招生系统11111',
          childrenList: [
            {
              value: 'kfbm',
              name: '客服部门1111'
            }, {
              value: 'qrzxm',
              name: '全日制项目'
            }
          ]
        }
      ]
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
