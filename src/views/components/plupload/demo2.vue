<template>
  <div>
    <hs-plupload
        browse_button="browse_button"
        :url="server_config.url+'/BigFile/'"
        chunk_size="2MB"
        :filters="{prevent_duplicates:true}"
        :FilesAdded="filesAdded"
        :BeforeUpload="beforeUpload"
        @inputUploader="inputUploader"
    />
    <hs-button type="primary" id="browse_button">选择多个文件</hs-button>
    <br/>
    <hs-table
      :data="tableData"
      style="width: 100%; margin: 10px 10px;">
      <hs-table-column
        label="文件名">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </hs-table-column>
      <hs-table-column
        label="大小">
        <template slot-scope="scope">
          <span>{{scope.row.size}}</span>
        </template>
      </hs-table-column>
      <hs-table-column
        label="状态">
        <template slot-scope="scope">
          <span v-if="scope.row.status === -1">正在计算MD5</span>
          <span v-if="scope.row.status === 1">MD5计算完成，准备上传</span>
          <span v-if="scope.row.status === 4" style="color: brown">上传失败</span>
          <span v-if="scope.row.status === 5" style="color: chartreuse">已上传</span>
          <hs-progress v-if="scope.row.status === 2" :text-inside="true" :stroke-width="20" :percentage="scope.row.percent"></hs-progress>
        </template>
      </hs-table-column>
      <hs-table-column
        label="操作">
        <template slot-scope="scope">
          <hs-button type="danger" @click="deleteFile(scope.row.id)">删除</hs-button>
        </template>
      </hs-table-column>
    </hs-table>
    <br/>
    <hs-button type="danger" @click="up.start()">开始上传</hs-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator'
import { FileMd5 } from 'hs-elementui/src/utils/commons'

@Component({
  name: 'demo2'
})
export default class extends Vue {
  private serverConfigUrl = ''
  private files = []
  private up: any = {}
  private dialogTableVisible = !1
  get status () {
    const files = this.files.length > 0 ? this.files[0] : null
    return files ? (files as any).status : null
  }

  @Watch('status')
  private changeStatus () {
    if (this.status === 5) {
      this.$confirm('文件上传成功', '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      }).then(() => {
        this.dialogTableVisible = false
      })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private filesAdded (up: any, files: any) {
    if (up.files.length > 1) {
      files.forEach((f: any) => {
        f.status = -1
        FileMd5(f.getNative(), (e: any, md5: any) => {
          f.md5 = md5
          f.status = 1
        })
      })
    }
  }

  private inputUploader (up: any) {
    this.up = up
    this.files = up.files
  }

  private uploadStart () {
    this.dialogTableVisible = true
    this.up.start()
  }

  private deleteFile (id: any) {
    const file = this.up.getFile(id)
    this.up.removeFile(file)
  }

  private beforeUpload (up: any, file: any) {
    up.setOption('multipart_params', { size: file.size, md5: file.md5 })
  }
}
</script>
