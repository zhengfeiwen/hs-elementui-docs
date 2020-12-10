<template>
  <div class="preference_container">
    <hs-navitem
      color="grey"
      :navitems="navitems"
    ></hs-navitem>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'preference',
  components: {
  }
})
export default class extends Vue {
  private navitems = [
    {
      title: '我的收藏',
      icon: 'el-icon-star-on',
      count: '0',
      handle: () => {
        alert('我的收藏')
      }
    },
    {
      title: '我关注的问题',
      icon: 'el-icon-star-on',
      count: '2',
      handle: () => {
        alert('我关注的问题')
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
.preference_container {
  width: 100%;
  padding: 5px 0;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 3px rgba(18,18,18,.1);
  -moz-box-shadow: 0 1px 3px rgba(18,18,18,.1);
  box-shadow: 0 1px 3px rgba(18,18,18,.1);
  margin: 5px;
}
</style>
