<template>
  <div class="recommend_container">
    <hs-shortstory
    :shortstorys = "shortstorys">
    </hs-shortstory>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'home-recommend',
  components: {
  }
})
export default class extends Vue {
  private shortstorys = [
    {
      titlepic: 'https://pic1.zhimg.com/50/v2-503d00f436b6d18889003a6d28388b6a_400x224.jpg',
      links: 'https://zhuanlan.zhihu.com/p/203501602',
      title: '雍正的四大首府宠臣中，谁才是最厉害的呢',
      story: '纵观历史，雍正的四大首府宠臣中，李卫才是最精明能干的，田文镜太过于守旧，思想不够开放，做事情容易固步自封，虽然兢兢业业。但始终达不到雍正的期望，主要原因是他只会把问题都揽在自己身上，不找雍正去协助解决问题。',
      handleClick: () => {
        alert('sss')
      }
    },
    {
      titlepic: 'https://pic1.zhimg.com/50/v2-503d00f436b6d18889003a6d28388b6a_400x224.jpg',
      links: 'https://zhuanlan.zhihu.com/p/203501602',
      title: '雍正的四大首府宠臣中，谁才是最厉害的呢',
      story: '纵观历史，雍正的四大首府宠臣中，李卫才是最精明能干的，田文镜太过于守旧，思想不够开放，做事情容易固步自封，虽然兢兢业业。但始终达不到雍正的期望，主要原因是他只会把问题都揽在自己身上，不找雍正去协助解决问题。',
      handleClick: () => {
        alert('Liddsdasve')
      }
    }
  ];
}
</script>

<style lang="scss" scoped>
.recommend_container {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
