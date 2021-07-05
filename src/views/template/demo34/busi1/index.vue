<template>
  <div style="height: calc(100% - 120px); width: 100%; position: relative;">
    <hs-coverlap ref="coverlap" cover-class="zfw">
      <hs-frame-column :custom="!0">
        <template slot="left">
          <el-tabs :tab-position="tabPosition" v-model="active" style="height: 200px;">
            <el-tab-pane label="待处理" name="undeal"></el-tab-pane>
            <el-tab-pane label="已处理" name="dealed"></el-tab-pane>
          </el-tabs>
        </template>
        <component :is="active" :infos="infos" @cover="cover"></component>
      </hs-frame-column>
      <template slot="coverlap">
        <div>
          我是coverlap
        </div>
      </template>
    </hs-coverlap>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import dealed from './detail/dealed.vue'
import undeal from './detail/undeal.vue'
@Component({
  name: 'busi1',
  components: {
    undeal,
    dealed
  }
})
export default class busi1 extends Vue {
  private tabPosition = 'left'
  private active = 'undeal'
  private click (flag: any) {
    this.active = flag
  }

  private cover (flag: boolean) {
    (this.$refs.coverlap as any).cover(flag)
  }

  private infos = [
    {
      label: '姓名',
      value: '李四'
    },
    {
      label: '性别',
      value: '女'
    },
    {
      label: '年龄',
      value: '18'
    },
    {
      label: '毕业院校',
      value: '福州大学至诚学院'
    },
    {
      label: '年级',
      value: '2020级'
    }
  ]
}
</script>
<style lang="scss">
  .el-tabs--left .el-tabs__header.is-left{
    width: 100%;
  }
  .common-table{
    border: 1px solid red;
  }
  .zfw{
    background-color: #dedede;
    .coverlap_page{
    background-color: #fff;
  }
  }
</style>
