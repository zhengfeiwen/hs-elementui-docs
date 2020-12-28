<template>
  <div class="container">
    <div v-for="(item, i) in btns" :key="i" class="link_area">
      <a target="_blank" :href="item.href">{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btns: [
        {
          title: 'hs-elementui',
          href: 'https://github.com/zhengfeiwen/hs-elementui-docs'
        },
        {
          title: 'iview-admin',
          href: 'https://panjiachen.gitee.io/vue-element-admin/#/dashboard'
        },
        {
          title: 'vue',
          href: 'https://cn.vuejs.org/v2/guide/index.html'
        },
        {
          title: 'Mock',
          href: 'http://mockjs.com/'
        },
        {
          title: 'TypeScript',
          href: 'https://www.tslang.cn/docs/home.html'
        },
        {
          title: 'Element-ui',
          href: 'https://element.eleme.cn/#/zh-CN/component/card'
        },
        {
          title: 'vue-elemrnt-admin',
          href: 'https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.link_area {
  width: calc(25% - 20px);
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  margin: 10px;
  border-radius: 5px;
  -moz-box-shadow: 10px 10px 5px #888888; /* 老的 Firefox */
  box-shadow: 10px 10px 5px #888888;
}
.link_area a {
  font-size: 22px;
  font-family: "Microsoft YaHei";
}
.link_area:hover {
  color: rgb(24, 144, 255);
  background-color: #012a50;
}
</style>
