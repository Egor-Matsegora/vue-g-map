<template>
  <div class="g-map">

    <div class="g-map__l-control">
      <map-layers-control @toggleLayer="handleToggleLayer" />
    </div>

    <l-map
      :zoom="zoom"
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[centerLat, centerLng]"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      @update:zoom="emitMapZoom"
    >

      <l-tile-layer
        v-for="provider of tileProviders"
        :key="provider.id"
        :name="provider.name"
        :visible="provider.visible"
        :url="provider.url"
        :attribution="provider.attribution"
        :subdomains="provider.subdomains"
        layer-type="base"
      ></l-tile-layer>

      <template
        v-for="marker of markers"
        :key="marker.id"
      >
        <l-marker
          :lat-lng="[marker.coords.latitude, marker.coords.longtitude]"
          @click="handleMarkerClick(marker)"
        >
          <l-tooltip>
            <map-tooltip :item="marker" />
          </l-tooltip>
        </l-marker>
        <l-polygon
          v-if="marker.plot"
          :lat-lngs="modifyCoords(marker.plot)"
          :fill="true"
          fillColor="green"
          color="green"
        ></l-polygon>
      </template>

    </l-map>
  </div>
</template>

<script>
import {
  defineComponent,
  onBeforeMount,
  reactive,
  ref
} from "@vue/runtime-core";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPolygon,
  LTooltip
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import MapTooltip from './MapTooltip';
import MapLayersControl from './MapLayersControl';

export default defineComponent({
  name: 'GMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolygon,
    LTooltip,
    MapTooltip,
    MapLayersControl
  },
  emits: ['mapZoom', 'markerClick'],
  props: {
    markers: {
      type: Array,
    },
    defaultZoom: {
      type: Number,
      default: 10
    }
  },
  setup(props, { emit }) {
    const zoom = ref(props.defaultZoom);
    const centerLat = ref(13.765744606439108);
    const centerLng = ref(100.49043622905579);
    let tileProviders = reactive([
      {
        id: 1,
        name: 'Streets',
        visible: true,
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
      },
      {
        id: 2,
        name: 'Satelite',
        visible: false,
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution:
          '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      },
      {
        id: 3,
        name: 'Satelite',
        visible: false,
        // for labels layer
        url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png',
        // for hybrid layer
        // https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
      }
    ])
    const minZoom = 2;
    const maxZoom = 17;

    const getCenter = () => {
      window.navigator.geolocation.getCurrentPosition(data => {
        centerLat.value = data.coords.latitude;
        centerLng.value = data.coords.longitude;
      });
    }

    const handleMarkerClick = (marker) => {
      emit('markerClick', marker);
      // remove if dont need to centered and zoom marker place on click
      zoom.value = maxZoom;
      setTimeout(() => {
        centerLng.value = marker.coords.longtitude;
        centerLat.value = marker.coords.latitude;
      }, 100);
    };

    const emitMapZoom = zoom => emit('mapZoom', zoom);

    const modifyCoords = plot => {
      return plot.map(coords => [coords.latitude, coords.longtitude]);
    };

    const handleToggleLayer = () => {
      tileProviders = tileProviders.map(layer => {
        layer.visible = !layer.visible;
        return layer;
      });
    };

    onBeforeMount(() => getCenter());

    return {
      zoom,
      centerLat,
      centerLng,
      tileProviders,
      maxZoom,
      minZoom,
      handleMarkerClick,
      emitMapZoom,
      modifyCoords,
      handleToggleLayer
    };
  }
})
</script>

<style lang="sass" scoped>
  .g-map
    width: 100%
    height: 100%
    position: relative
    z-index: 1

  .g-map__l-control
    position: absolute
    top: 30px
    right: 30px
    z-index: 1000
</style>
