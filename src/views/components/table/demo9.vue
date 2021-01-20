<template>
  <div>
    <hs-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <hs-table-column
      type="index"
      width="50">
    </hs-table-column>
    <hs-table-column
      prop="date"
      label="日期"
      width="120">
    </hs-table-column>
    <hs-table-column
      prop="name"
      label="姓名"
      width="120">
    </hs-table-column>
    <hs-table-column
      prop="address"
      label="地址">
    </hs-table-column>
  </hs-table>
  <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Table } from 'element-ui'
@Component({
  name: 'demo9'
})
export default class extends Vue {
  private tableData = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }]

  private currentRow = null

  private setCurrent (row: any) {
    (this.$refs.singleTable as Table).setCurrentRow(row)
  }

  private handleCurrentChange (val: any) {
    this.currentRow = val
  }
}
</script>

<style lang="scss">
</style>
