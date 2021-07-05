<template>
  <hs-frame-column @on-query="onQuery" default-name="案例2" @on-reset="onReset" :menuName="menuName">
    <template slot="left">
      <el-tree
        class="filter-tree"
        :data="treeData"
        default-expand-all
        ref="tree"
        @node-click="handleNodeClick">
      </el-tree>
    </template>
    <template slot="query">
      <el-form ref="form" :model="form" label-width="98px" :inline="true">
        <el-form-item label="院校代码">
          <hs-input
            size="mini"
            v-model="form.schoolCode"
            placeholder="请输入院校代码"
          ></hs-input>
        </el-form-item>
        <el-form-item label="院校名称">
          <hs-input
            size="mini"
            v-model="form.schoolName"
            placeholder="请输入院校名称"
          ></hs-input>
        </el-form-item>
      </el-form>
    </template>
    <template>
      <hs-table
        :data="tableData"
        border
        style="width: 100%">
        <hs-table-column
          prop="date"
          label="日期"
          width="180">
        </hs-table-column>
        <hs-table-column
          prop="name"
          label="姓名"
          width="180">
        </hs-table-column>
        <hs-table-column
          prop="address"
          label="地址">
        </hs-table-column>
      </hs-table>
    </template>
  </hs-frame-column>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'demo2'
})
export default class Demo2 extends Vue {
  private form: any = {
  }

  private menuName = ''

  private loading = !1

  private treeData = [{
    id: 1,
    label: '一级 1',
    children: [{
      id: 4,
      label: '二级 1-1',
      children: [{
        id: 9,
        label: '三级 1-1-1'
      }, {
        id: 10,
        label: '三级 1-1-2'
      }]
    }]
  }, {
    id: 2,
    label: '一级 2',
    children: [{
      id: 5,
      label: '二级 2-1'
    }, {
      id: 6,
      label: '二级 2-2'
    }]
  }, {
    id: 3,
    label: '一级 3',
    children: [{
      id: 7,
      label: '二级 3-1'
    }, {
      id: 8,
      label: '二级 3-2'
    }]
  }]

  private handleNodeClick (node: any) {
    this.menuName = node.label
  }

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

  private pagination: any = {
    currentPage: 1,
    pageSize: 10
  }

  private async onQuery (pagination: any = null) {
    // do something
  }

  private onReset () {
    this.form = {
    }
    this.onQuery()
  }

  mounted () {
    this.onQuery()
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
