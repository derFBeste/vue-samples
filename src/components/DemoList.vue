<template>
  <section class="food-list">
      <ul class="w4 list bt br bl ">
        <li class="pointer hover bb tc pt1 pb1" tabindex="0" v-for="item in input" :key="item">{{item}}</li>
      </ul>
  </section>
</template>

<script>

export default {
  props: { input: { type: Array, required: true } }
}
</script>

<style scoped lang="scss">

.food-list{
  ul{
    list-style-type: none;
    overflow-wrap: break-word;
    -webkit-padding-start: 0px;
  }
}

</style>
