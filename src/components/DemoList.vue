<template>
  <div class="food-list">
      <h4 class="mt2">Japanese food:</h4>
      <ul class="w4 list bt br bl">
        <li class="pointer hover bb tc pt1 pb1" tabindex="0"
        v-for="(item, index) in input"
        :key="item"
        :id="'item_' + index"
        @keydown.prevent="select($event.key, index)">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  props: { input: { type: Array, required: true } },
  data: () => ({
    selection: 0
  }),
  methods: {
    select (key, index) {
      if (key === 'ArrowDown') {
        if (index === this.input.length - 1) {
          return
        }
        let next = index + 1
        document.getElementById('item_' + next).focus()
      }
      if (key === 'ArrowUp') {
        if (index <= 0) {
          return
        }
        let prev = index - 1
        document.getElementById('item_' + prev).focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.food-list {
  ul {
    list-style-type: none;
    overflow-wrap: break-word;
    -webkit-padding-start: 0px;
  }
}
</style>
