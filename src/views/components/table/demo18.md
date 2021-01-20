```
<template>
  <div>
    <hs-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <hs-table-column
        prop="id"
        label="ID"
        width="180">
      </hs-table-column>
      <hs-table-column
        prop="name"
        label="姓名">
      </hs-table-column>
      <hs-table-column
        prop="amount1"
        sortable
        label="数值 1">
      </hs-table-column>
      <hs-table-column
        prop="amount2"
        sortable
        label="数值 2">
      </hs-table-column>
      <hs-table-column
        prop="amount3"
        sortable
        label="数值 3">
      </hs-table-column>
    </hs-table>

    <hs-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <hs-table-column
        prop="id"
        label="ID"
        width="180">
      </hs-table-column>
      <hs-table-column
        prop="name"
        label="姓名">
      </hs-table-column>
      <hs-table-column
        prop="amount1"
        label="数值 1（元）">
      </hs-table-column>
      <hs-table-column
        prop="amount2"
        label="数值 2（元）">
      </hs-table-column>
      <hs-table-column
        prop="amount3"
        label="数值 3（元）">
      </hs-table-column>
    </hs-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo18'
})
export default class extends Vue {
  private tableData = [{
    id: '12987122',
    name: '王小虎',
    amount1: '234',
    amount2: '3.2',
    amount3: 10
  }, {
    id: '12987123',
    name: '王小虎',
    amount1: '165',
    amount2: '4.43',
    amount3: 12
  }, {
    id: '12987124',
    name: '王小虎',
    amount1: '324',
    amount2: '1.9',
    amount3: 9
  }, {
    id: '12987125',
    name: '王小虎',
    amount1: '621',
    amount2: '2.2',
    amount3: 17
  }, {
    id: '12987126',
    name: '王小虎',
    amount1: '539',
    amount2: '4.1',
    amount3: 15
  }]

  private arraySpanMethod (table: any) {
    const { row, column, rowIndex, columnIndex } = table
    if (rowIndex % 2 === 0) {
      if (columnIndex === 0) {
        return [1, 2]
      } else if (columnIndex === 1) {
        return [0, 0]
      }
    }
  }

  private objectSpanMethod (table: any) {
    const { row, column, rowIndex, columnIndex } = table
    if (columnIndex === 0) {
      if (rowIndex % 2 === 0) {
        return {
          rowspan: 2,
          colspan: 1
        }
      } else {
        return {
          rowspan: 0,
          colspan: 0
        }
      }
    }
  }
}
</script>

<style lang="scss">
</style>
```