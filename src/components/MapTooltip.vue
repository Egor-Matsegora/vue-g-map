<template>
  <q-card flat bordered="false" class="map-tootltip">
    <q-img
      :src="item.imgUrl"
      spinner-color="blue"
      class="map-tooltip__img"
    />
    <q-card-section>
      <div class="text-h6 map-tootltip__text">
        {{ item.title }}
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1 map-tootltip__text">
        {{ item.price }}&nbsp;$
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="map-tootltip__text">
        {{ item.description }}
      </div>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <ul class="map-tootltip__list map-tootltip__text">
        <li v-for="option of item.options" :key="option.name">
          <span class="text-weight-bold">{{option.name}}:</span>&nbsp;{{option.value}}
        </li>
      </ul>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

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
    item: { type: Object },
  }
})
</script>

<style lang="sass" scoped>
.map-tootltip
  width: 250px

.map-tootltip__list
  margin: 0
  padding-left: 20px

.map-tootltip__text
  white-space: normal

.map-tooltip__img
  width: 100%
  height: 150px
</style>