<template>
  <div class="concern_container">vip</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'home-concern',
  components: {
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.concern_container {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
