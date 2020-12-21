<template>
  <div class="main">
    <div :class="active">这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，</div>
    <hs-extendbutton
      :titles= "titles"
      @change="change"
    >
    </hs-extendbutton>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: {
        active: false
      },
      titles: ['展开', '收起']
    }
  },
  methods: {
    change (state) {
      this.active.active = state
    }
  }
}
</script>

<style lang="scss">
  .main{
    width:50%;
    height:auto;
    div{
      width:50%;
      height: 30px;
      overflow: hidden;
    }
    .active{
      height:100px;
    }
  }
</style>
