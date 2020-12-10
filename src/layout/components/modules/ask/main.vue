<template>
  <div class="ask_container">ask</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'tab-ask',
  components: {
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.ask_container {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
