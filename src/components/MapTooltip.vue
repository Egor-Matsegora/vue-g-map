<template>
  <q-card flat class="map-tootltip">
    <div class="map-tooltip__main-info">
      <div class="map-tooltip__image-wrapper">
        <a class="map-tootltip__link" href="/">
          <q-img
            :src="item.imgUrl"
            spinner-color="blue"
            class="map-tooltip__img"
          />
        </a>
      </div>
      <q-card-section class="q-pt-none">
        <a class="map-tootltip__link" href="/">
          <div class="text-h6 map-tootltip__text">
            {{ item.title }}
          </div>
        </a>
        <div class="text-subtitle1 map-tootltip__text">
          {{ item.price }}&nbsp;$
        </div>
      </q-card-section>
    </div>

    <q-card-section class="q-pt-none">
      <div class="map-tootltip__text map-tootltip__desc-text">
        {{ item.description }}
      </div>
    </q-card-section>

    <div :class="['map-tooltip__description', { 'map-tooltip__description--open': isDescOpen }]">
      <q-separator inset />

      <q-card-section>
        <ul class="map-tootltip__list map-tootltip__text">
          <li v-for="option of item.options" :key="option.name">
            <span class="text-weight-bold">{{option.name}}:</span>&nbsp;{{option.value}}
          </li>
        </ul>
      </q-card-section>
    </div>

    <div class="map-tooltip__toggler" @click="toggleDesc">
      {{ isDescOpen ? 'close' : 'more...' }}
    </div>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: 'MapTooltip',
  props: {
    /**
     * title: string,
     * description: string,
     * price: string,
     * imgUrl: string,
     * options: { name: string, value: string }[]
     */
    item: { type: Object }
  },
  setup() {
    const isDescOpen = ref(false);
    const toggleDesc = (event) => {
      event.stopPropagation();
      isDescOpen.value = !isDescOpen.value;
    };

    return { isDescOpen, toggleDesc };
  }
})
</script>

<style lang="sass" scoped>
.map-tootltip
  width: 250px

  +max-w($tablet)
    width: calc(100vw - 100px)
    max-width: 400px
    padding-bottom: 10px

.map-tootltip__list
  margin: 0
  padding-left: 20px

.map-tootltip__text
  white-space: normal

.map-tootltip__desc-text
  +max-w($tablet)
    text-align: justify
    line-height: 1.3

.map-tooltip__image-wrapper
  +max-w($tablet)
    flex: 0 0 50%

.map-tooltip__img
  width: 100%
  height: 150px

  +max-w($tablet)
    height: 100px

.map-tooltip__main-info
  +max-w($tablet)
    display: flex
    margin-bottom: 10px

.map-tootltip__link
  text-decoration: none
  color: #000

.map-tooltip__description
  overflow: hidden
  transition: height 200ms linear

  +max-w($tablet)
    height: 0

    &--open
      height: auto

.map-tooltip__toggler
  display: none

  +max-w($tablet)
    display: block
    text-align: center
    cursor: pointer
</style>