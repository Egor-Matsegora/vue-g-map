<template>
  <div
    class="g-map"
    @click="activeMarker = null"
  >

    <div class="g-map__l-control">
      <map-layers-control @toggleLayer="handleToggleLayer" />
    </div>

    <l-map
      :zoom="zoom"
      :center="[centerLat, centerLng]"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      :options="{ zoomControl: false }"
      :key="isMobile"
      v-model="zoom"
      v-model:zoom="zoom"
      @update:zoom="emitMapZoom"
    >

      <l-control-zoom :position="computedPosition" />

      <l-tile-layer
        v-for="provider of tileProviders"
        :key="provider.id"
        :name="provider.name"
        :visible="provider.visible"
        :url="provider.url"
        :attribution="provider.attribution"
        :subdomains="provider.subdomains"
        layer-type="base"
        :detectRetina="true"
      ></l-tile-layer>

      <template
        v-for="marker of markers"
        :key="marker.id"
      >
        <l-marker
          :lat-lng="[marker.coords.latitude, marker.coords.longtitude]"
          @click="handleMarkerClick($event, marker)"
        >
          <l-icon
            :icon-anchor="staticAnchor"
            class-name="map-marker"
          >
            <div class="map-marker__text text-weight-bold">
              {{ marker.price }}&nbsp;$
            </div>
          </l-icon>
          <l-popup v-if="!isMobile">
            <map-tooltip :item="marker" />
          </l-popup>
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

    <div
      class="g-map__mobile-popup"
      v-if="isMobile && activeMarker"
    >
      <map-tooltip
        :item="activeMarker"
        :key="activeMarker.id"
      />
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  reactive,
  ref
} from "@vue/runtime-core";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPolygon,
  LPopup,
  LControlZoom,
  LIcon
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
    LIcon,
    LPolygon,
    LPopup,
    LControlZoom,
    MapLayersControl,
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
    const isMobile = ref(false);
    let tileProviders = reactive([
      {
        id: 1,
        name: 'Streets',
        visible: false,
        attribution: '',
          // '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
      },
      {
        id: 2,
        name: 'Satelite',
        visible: true,
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: '',
          // '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      },
      {
        id: 3,
        name: 'Satelite',
        visible: true,
        // for labels layer
        url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png',
        // for hybrid layer
        // https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}
        attribution: '',
        // attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
      },
    ])
    let activeMarker = ref(null);
    const minZoom = 2;
    const maxZoom = 17;
    const staticAnchor = [35, 0];

    const computedPosition = computed(() => isMobile.value ? 'bottomleft' : 'topleft');

    const getCenter = () => {
      window.navigator.geolocation.getCurrentPosition(data => {
        centerLat.value = data.coords.latitude;
        centerLng.value = data.coords.longitude;
      });
    }

    const handleMarkerClick = (event, marker) => {
      event.originalEvent.stopPropagation();
      emit('markerClick', marker);
      setTimeout(() => (activeMarker.value = marker), 100);
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

    const setIsMobile = () => {
      isMobile.value = window ? window.innerWidth <= 991 : false
    }

    const subOnWindowResize = () => {
      if(!window) return;
      window.addEventListener('resize', setIsMobile)
    }

    const unsubOnWindowResize = () => {
      if(!window) return;
      window.removeEventListener('resize', setIsMobile);
    }

    onBeforeMount(() => {
      getCenter();
      setIsMobile();
      subOnWindowResize();
    });

    onBeforeUnmount(() => {
      unsubOnWindowResize();
    })

    return {
      zoom,
      centerLat,
      centerLng,
      tileProviders,
      activeMarker,
      maxZoom,
      minZoom,
      staticAnchor,
      isMobile,
      computedPosition,
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

  +max-w($tablet)
    top: auto
    right: 20px
    bottom: 30px

.g-map__mobile-popup
  position: absolute
  bottom: 30px
  left: 50%
  transform: translateX(-50%)
  z-index: 1000
</style>

<style lang="sass">
.map-marker
  display: flex
  justify-content: center
  align-items: center
  width: auto !important
  height: 30px !important
  padding: 0 10px
  background-color: #fff
  border-radius: 100px
  border: 2px solid #000

.leaflet-left .leaflet-control
  margin-bottom: 30px
</style>
