<template>
  <router-view />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Button'
})
export default class extends Vue {}
</script>
