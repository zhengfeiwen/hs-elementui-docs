<template>
  <hs-frame @on-query="onQuery" default-name="案例1" @on-reset="onReset" :more="!1">
    <template slot="query">
      <el-form ref="form" :model="form" label-width="98px" :inline="true">
        <el-form-item label="所属中心代码">
          <hs-input size="mini" v-model="form.centerCode" placeholder="请输入所属中心代码" ></hs-input>
        </el-form-item>
        <el-form-item label="所属中心名称">
          <hs-input size="mini" v-model="form.centerName" placeholder="请输入所属中心名称" ></hs-input>
        </el-form-item>
        <el-form-item label="所属中心状态">
          <hs-input size="mini" v-model="form.centerStatus" placeholder="请输入所属中心状态" ></hs-input>
        </el-form-item>
        <el-form-item label="业务类型">
          <hs-input size="mini" v-model="form.business" placeholder="请输入业务类型" ></hs-input>
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
  </hs-frame>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'demo1'
})
export default class Demo1 extends Vue {
  private form = {
    status: 1,
    centerCode: '',
    centerName: '',
    business: ''
  }

  private loading = !1

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

  private async onQuery (pagination: any = null) {
    //
  }

  private onReset () {
    this.form = {
      status: 1,
      centerCode: '',
      centerName: '',
      business: ''
    }
    this.onQuery()
  }

  private currentPage = 1

  private visible = !1

  private detailData = {}

  private async showDetail (row: any) {
    // await baseApi('centerDetail', { id: row.id }).then((res: any) => {
    //   if (res.code === 10000) {
    //     this.visible = !0
    //     this.detailData = {
    //       centerCode: res.object.info.centerCode,
    //       centerName: res.object.info.centerName,
    //       provinceName: res.object.info.provinceName,
    //       cityName: res.object.info.cityName,
    //       businessName: res.object.info.businessName
    //     }
    //   }
    // })
  }

  mounted () {
    this.onQuery()
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
