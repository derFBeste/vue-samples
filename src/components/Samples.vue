<template>
  <section class="flex flex-column">
    <h1 class="ml3 tc">Sample Vue Components</h1>
    <div class="bb b--black-30"></div>
      <h3 class="ml3 tl">simple list with up down arrow control</h3>
      <DemoList class="ml3" :input="japaneseFood"/>
  </section>
</template>

<script>
import DemoList from './DemoList'

export default {
  name: 'Samples',
  components: {DemoList},
  data: () => ({
    japaneseFood: [ 'takoyaki', 'okonomiyaki', 'yakitori', 'yakiniku', 'taiyaki' ]
  })
}
</script>

<style scoped>

</style>
