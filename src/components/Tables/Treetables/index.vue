<template>
  <vxe-table
    v-loading="loading"
    headerAlign="center"
    size="small"
    highlight-current-row
    show-overflow
    resizable
    border
    round
    ref="xTree"
    :data="rosterData"
    :tree-config="{
      trigger: isAddMark,
      lazy: true,
      children: 'children',
      hasChild: 'hasChild',
      iconOpen: 'fa fa-minus-square-o',
      iconClose: 'fa fa-plus-square-o',
      loadMethod: loadChildrenMethod,
    }"
    :span-method="mergeRowMethod"
    :cell-class-name="cellClassName"
    headerCellClassName="header-cell-style"
    @cell-dblclick="cellDblclick"
    @cell-click="cellClick"
  >
    <vxe-table-column
      v-for="(item, index) in column"
      :key="index"
      :field="item.field"
      :type="item.type"
      :title="item.title"
      :width="item.width"
      :tree-node="item.treeNode"
      :align="item.align"
      :visible="item.visible"
      :fixed="item.fixed"
      :formatter="item.formatter ? formatterTime : ''"
      :min-width="item.minWidth"
    >
    </vxe-table-column>
  </vxe-table>
</template>

<script>
import {
  loadChildren
} from '@/api/common/table'
export default {
  name: 'hs-treetable',
  props: {
    column: {
      type: Array
    },
    loadChildrenApi: {
      type: String
    },
    rosterData: {
      type: Array
    }
  },
  data () {
    return {
      isAddMark: 'row',
      parentscolumn: 'snid',
      rowspanShow: -1,
      loading: '',
      tableSessionMing: JSON.parse(sessionStorage.getItem('tableSession')) || {}
    }
  },
  methods: {
    cellDblclick: function ({ row, column }) {
      this.$emit('celldblclick', row, column)
    },
    cellClick: function ({ row, column }) {
      this.$emit('cellclick', row, column)
    },
    async loadChildrenMethod ({ row }) {
      this.isAddMark = 'noExpand'
      // let _self = this
      const childDataObject = await loadChildren(this.loadChildrenApi, { parentId: row.id })
      const childData = childDataObject.object.datas.map(item => {
        item.snid = '<span class="el-button--text">' + item.orderNo + '</span>'
        item.studentSourceId = item.id
        return item
      })
      this.isAddMark = 'row'
      return Promise.resolve(childData.length ? childData : [{ snid: '暂无数据' }])
    },
    // 显示列数
    columnNum () {
      let num = 0
      for (var key in this.column) {
        if (this.column[key].visible === false) {
        } else {
          num++
        }
      }
      num--
      this.rowspanShow = num
    },
    // 合并父元素列
    mergeRowMethod ({ row, column }) {
      if (row.hasChild) {
        if (column.property === this.parentscolumn) {
          return { rowspan: 1, colspan: this.rowspanShow }
        } else if (column.property === 'checkbox') {
          return { rowspan: 1, colspan: 1 }
        } else {
          return { rowspan: 0, colspan: 0 }
        }
      } else {
        return { rowspan: 1, colspan: 1 }
      }
    },
    cellClassName ({ row }) {
      if (row.hasChild) {
        return 'col-parents'
      } else {
        if (this.tableSessionMing['resourcePoolMing'] && this.tableSessionMing['resourcePoolMing'].indexOf(row.id) !== -1) {
          return 'col-chlid col-chlid-title'
        } else {
          return 'col-chlid-title'
        }
      }
    }
  }
}
</script>

<style>
</style>
