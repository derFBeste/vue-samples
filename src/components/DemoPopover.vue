<template>
  <div
    class="popover"
    :style="position"
    v-if="show"
    @click="$emit('close')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, required: true, default: false },
    xCoordinate: { type: Number, required: true },
    yCoordinate: { type: Number, required: true }
  },
  computed: {
    position () {
      return {
        left: `${this.xCoordinate}px`,
        top: `${this.yCoordinate}px`
      }
    }
  },
  methods: {
    close: function () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
  .popover {
    background-color: hsla(0,0%,100%,0.95);
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    padding: .5rem;
    position: absolute;
    transition: all .3s ease;
    z-index: 999;
  }
</style>
