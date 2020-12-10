export default [
  {
    prop: 'actionFunc',
    desc: '操作按钮组',
    type: 'Array<Object>',
    enum: '-',
    default: '-',
    config: true
  },
  {
    prop: 'actionQuery',
    desc: '查询按钮组',
    type: 'Array<Object>',
    enum: '-',
    default: '-',
    config: true
  },
  {
    prop: '[actionFunc/actionQuery].text',
    desc: '按钮名称',
    type: 'String',
    enum: '-',
    default: '-'
  },
  {
    prop: '[actionFunc/actionQuery].iclass',
    desc: '按钮样式表',
    type: 'String',
    enum: '-',
    default: 'primaty'
  },
  {
    prop: '[actionFunc/actionQuery].handle',
    desc: '按钮点击事件',
    type: 'Function',
    enum: '-',
    default: '-'
  }
]
