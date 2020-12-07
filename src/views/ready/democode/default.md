```
<template>
   <el-switch v-model="value" active-text="启用" inactive-text="关闭"> </el-switch>
</template>
<script>
  export default {
    data() {
      return {
        value: true,
      },
    }
  }
</script>
```