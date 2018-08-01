<template>
  <section class="flex flex-column">
    <h1 class="ml3 tc">Sample Vue Components</h1>
      <div class="bb b--black-30"></div>
    <div class="flex flex-row">

      <!-- Demo List -->
      <div class="w-50">
        <h3 class="ml3 tl">simple list with up down arrow control</h3>
        <DemoList class="ml3" :input="japaneseFood"/>
      </div>

      <!-- Demo Popover -->
      <div>
        <h3 class="ml3 tl">popover example</h3>
        <h4 class="ml5 pointer" @click="displayPopover($event)">click to show popover</h4>
        <DemoPopover
          :xCoordinate="xCoordinate"
          :yCoordinate="yCoordinate"
          :show="showPopover"
          @close="showPopover = false">
          <h3>How's it goin?</h3>
        </DemoPopover>
      </div>
    </div>
  </section>
</template>

<script>
import DemoList from './DemoList'
import DemoPopover from './DemoPopover'

export default {
  name: 'Samples',
  components: { DemoList, DemoPopover },
  data: () => ({
    japaneseFood: [ 'takoyaki', 'okonomiyaki', 'yakitori', 'yakiniku', 'taiyaki' ],
    showPopover: false,
    xCoordinate: 0,
    yCoordinate: 0
  }),

  methods: {
    displayPopover (event) {
      this.xCoordinate = event.pageX
      this.yCoordinate = event.pageY
      this.showPopover = true
    }
  }
}
</script>

<style scoped>

</style>
