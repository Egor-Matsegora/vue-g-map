<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>

        <q-toolbar-title>
          G-MAP
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="g-map-wrapper">
        <GMap
          :markers="mapData"
          @markerClick="handleMarkerClick"
          @mapZoom="handleMapZoom"
        />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import GMap from './components/GMap.vue';
import { mapFixtures } from './fixtures';

export default {
  name: 'LayoutDefault',

  components: {
    GMap,
  },

  setup () {
    const mapData = mapFixtures;

    const handleMarkerClick = marker => console.log('maker was clicked', marker);

    const handleMapZoom = zoom => console.log('map has change zoom', zoom);

    return {
      mapData,
      handleMarkerClick,
      handleMapZoom
    }
  }
}
</script>

<style lang="sass" scoped>
  .g-map-wrapper
    height: calc( 100vh - 50px )
</style>