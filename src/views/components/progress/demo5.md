```
<template>
  <div>
    <hs-progress :stroke-width="26" :taskChains="taskChains" :percentage="percentage" @finished="finished"></hs-progress>
    <button @click="btnFinished">finished</button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import progress from '@/packages/progress/main.vue'

@Component({
  name: 'hs-progress-demoe',
  components: {
    'hs-progress': progress
  }
})

export default class ProgressDemo extends Vue {
  public percentage = 0;
  public taskChains = {
    task0: {
      status: 'doing'
    },
    task1: {
      status: 'init',
      task: () => {
        setTimeout(() => {
          this.taskChains.task1.status = 'finished'
        }, 5 * 1000)
      }
    },
    task2: {
      status: 'init'
    }
  }

  public btnFinished () {
    this.taskChains.task1.status = 'finished'
  }

  public finished () {
    alert('结束任务')
  }
}
</script>
```