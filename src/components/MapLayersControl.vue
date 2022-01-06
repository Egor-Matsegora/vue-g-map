<template>
  <div class="layers-control">
    <button
      :class="['layers-control__icon', {'layers-control__icon--toggled': isToggled}]"
      @click="toggleLayers"
    ></button>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: 'MapLayersControl',
  emits: ['toggleLayer'],
  setup(props, { emit }) {
    const isToggled = ref(false);

    const toggleLayers = () => {
      isToggled.value = !isToggled.value;
      emit('toggleLayer');
    }

    return { isToggled, toggleLayers };
  }
})
</script>

<style lang="sass" scoped>
.layers-control
  position: relative
  width: 30px
  height: 30px

.layers-control__icon
  width: 100%
  height: 100%
  border-radius: 3px
  background: url('../assets/map-gps-svgrepo-com.svg') center no-repeat, #fff
  background-size: 70%
  cursor: pointer
  opacity: 0.7
  transition: all 200ms linear
  border: 0
  outline: none

  &:hover
    opacity: 1

.layers-control__icon--toggled
  background: url('../assets/ground-satelite-dish-svgrepo-com.svg') center no-repeat, #fff
  background-size: 70%

</style>