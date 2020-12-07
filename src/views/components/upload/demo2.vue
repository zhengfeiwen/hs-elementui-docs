<template>
  <div>
    <hs-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
  >
    <i slot="ext" class="el-icon-plus"></i>
  </hs-upload>
  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="" />
  </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'demo2',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
