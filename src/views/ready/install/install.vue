<template>
  <ea-view center>
    <install-md></install-md>
  </ea-view>
</template>
<script>
import installMd from './install.md'

export default {
  name: 'install',
  components: { installMd },
  props: {},
  watch: {},
  data () {
    return {
      loading: false
    }
  },
  computed: {},
  methods: {}
}
</script>
