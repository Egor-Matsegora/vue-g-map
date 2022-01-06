<template>
  <div class="g-map">
    <l-map
      :zoom="zoom"
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[centerLat, centerLng]"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      @update:zoom="emitMapZoom"
    >

      <l-control-layers />

      <l-tile-layer
        v-for="provider of tileProviders"
        :key="provider.name"
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
  LControlLayers,
  LTileLayer,
  LMarker,
  LPolygon,
  LTooltip
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import MapTooltip from './MapTooltip';

export default defineComponent({
  name: 'GMap',
  components: {
    LMap,
    LControlLayers,
    LTileLayer,
    LMarker,
    LPolygon,
    LTooltip,
    MapTooltip
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
    const tileProviders = reactive([
      {
        name: 'Streets',
        visible: true,
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
      },
      {
        name: 'Streets ARCGIS',
        visible: false,
        attribution:
          '&copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012 etc. etc. etc.',
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      },
      {
        name: 'Satelite',
        visible: false,
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution:
          '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      },
      // {
      //   visible: false,
      //   url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png',
      //   attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      //   subdomains: 'abcd',
      // }
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
      return plot.map(coords => [coords.latitude, coords.longtitude])
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
      modifyCoords
    };
  }
})
</script>

<style lang="sass" scoped>
  .g-map
    width: 100%
    height: 100%
</style>
