(function(e){function t(t){for(var i,r,l=t[0],c=t[1],s=t[2],u=0,p=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],i=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=o[0]))}return e}var i={},n={app:0},a=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c9189":"c81458cc","chunk-2d0cf391":"020c75ea","chunk-2d0da8f3":"c8c3e7e8","chunk-2d2248b6":"d84473c1","chunk-2d22523a":"4b710d99"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,i){o=n[e]=[t,i]}));t.push(o[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=r(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var o=n[e];if(0!==o){if(o){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}n[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(o,i,function(t){return e[t]}.bind(null,i));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-g-map/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0a95":function(e,t,o){},"0bf4":function(e,t,o){"use strict";o("14ba")},1245:function(e,t,o){},"14ba":function(e,t,o){},"19e9":function(e,t,o){"use strict";o("9f75")},"3a03":function(e,t,o){"use strict";o("0a95")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("7a23"),n=Object(i["i"])(" G-MAP "),a={class:"g-map-wrapper"};function r(e,t,o,r,l,c){var s=Object(i["D"])("q-toolbar-title"),u=Object(i["D"])("q-toolbar"),d=Object(i["D"])("q-header"),p=Object(i["D"])("g-map"),m=Object(i["D"])("q-page-container"),b=Object(i["D"])("q-layout");return Object(i["v"])(),Object(i["e"])(b,{view:"lHh Lpr lFf"},{default:Object(i["G"])((function(){return[Object(i["j"])(d,{elevated:"",class:"glossy"},{default:Object(i["G"])((function(){return[Object(i["j"])(u,null,{default:Object(i["G"])((function(){return[Object(i["j"])(s,null,{default:Object(i["G"])((function(){return[n]})),_:1}),Object(i["h"])("div",null,"Quasar v"+Object(i["E"])(e.$q.version),1)]})),_:1})]})),_:1}),Object(i["j"])(m,null,{default:Object(i["G"])((function(){return[Object(i["h"])("div",a,[Object(i["j"])(p,{markers:r.mapData,onMarkerClick:r.handleMarkerClick,onMapZoom:r.handleMapZoom},null,8,["markers","onMarkerClick","onMapZoom"])])]})),_:1})]})),_:1})}o("b0c0");var l={class:"g-map__l-control"},c={class:"map-marker__text text-weight-bold"},s={key:0,class:"g-map__mobile-popup"};function u(e,t,o,n,a,r){var u=Object(i["D"])("map-layers-control"),d=Object(i["D"])("l-control-zoom"),p=Object(i["D"])("l-tile-layer"),m=Object(i["D"])("l-icon"),b=Object(i["D"])("map-tooltip"),g=Object(i["D"])("l-popup"),j=Object(i["D"])("l-marker"),f=Object(i["D"])("l-polygon"),v=Object(i["D"])("l-map");return Object(i["v"])(),Object(i["g"])("div",{class:"g-map",onClick:t[2]||(t[2]=function(t){return e.activeMarker=null})},[Object(i["h"])("div",l,[Object(i["j"])(u,{onToggleLayer:e.handleToggleLayer},null,8,["onToggleLayer"])]),(Object(i["v"])(),Object(i["e"])(v,{zoom:e.zoom,center:[e.centerLat,e.centerLng],"min-zoom":e.minZoom,"max-zoom":e.maxZoom,options:{zoomControl:!1},key:e.isMobile,modelValue:e.zoom,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.zoom=t}),"onUpdate:zoom":[t[1]||(t[1]=function(t){return e.zoom=t}),e.emitMapZoom]},{default:Object(i["G"])((function(){return[Object(i["j"])(d,{position:e.computedPosition},null,8,["position"]),(Object(i["v"])(!0),Object(i["g"])(i["a"],null,Object(i["C"])(e.tileProviders,(function(e){return Object(i["v"])(),Object(i["e"])(p,{key:e.id,name:e.name,visible:e.visible,url:e.url,attribution:e.attribution,subdomains:e.subdomains,"layer-type":"base",detectRetina:!0},null,8,["name","visible","url","attribution","subdomains"])})),128)),(Object(i["v"])(!0),Object(i["g"])(i["a"],null,Object(i["C"])(e.markers,(function(t){return Object(i["v"])(),Object(i["g"])(i["a"],{key:t.id},[Object(i["j"])(j,{"lat-lng":[t.coords.latitude,t.coords.longtitude],onClick:function(o){return e.handleMarkerClick(o,t)}},{default:Object(i["G"])((function(){return[Object(i["j"])(m,{"icon-anchor":e.staticAnchor,"class-name":"map-marker"},{default:Object(i["G"])((function(){return[Object(i["h"])("div",c,Object(i["E"])(t.price)+" $ ",1)]})),_:2},1032,["icon-anchor"]),e.isMobile?Object(i["f"])("",!0):(Object(i["v"])(),Object(i["e"])(g,{key:0},{default:Object(i["G"])((function(){return[Object(i["j"])(b,{item:t},null,8,["item"])]})),_:2},1024))]})),_:2},1032,["lat-lng","onClick"]),t.plot?(Object(i["v"])(),Object(i["e"])(f,{key:0,"lat-lngs":e.modifyCoords(t.plot),fill:!0,fillColor:"green",color:"green"},null,8,["lat-lngs"])):Object(i["f"])("",!0)],64)})),128))]})),_:1},8,["zoom","center","min-zoom","max-zoom","modelValue","onUpdate:zoom"])),e.isMobile&&e.activeMarker?(Object(i["v"])(),Object(i["g"])("div",s,[(Object(i["v"])(),Object(i["e"])(b,{item:e.activeMarker,key:e.activeMarker.id},null,8,["item"]))])):Object(i["f"])("",!0)])}o("a9e3"),o("d81d");var d=o("5c40"),p=o("a1e9"),m=o("5afd"),b=(o("6cc5"),o("a4d3"),o("e01a"),{class:"map-tooltip__main-info"}),g={class:"map-tooltip__image-wrapper"},j={class:"map-tootltip__link",href:"/"},f={class:"map-tootltip__link",href:"/"},v={class:"text-h6 map-tootltip__text"},O={class:"text-subtitle1 map-tootltip__text"},_={class:"map-tootltip__text map-tootltip__desc-text"},h={class:"map-tootltip__list map-tootltip__text"},y={class:"text-weight-bold"};function w(e,t,o,n,a,r){var l=Object(i["D"])("q-img"),c=Object(i["D"])("q-card-section"),s=Object(i["D"])("q-separator"),u=Object(i["D"])("q-card");return Object(i["v"])(),Object(i["e"])(u,{flat:"",class:"map-tootltip"},{default:Object(i["G"])((function(){return[Object(i["h"])("div",b,[Object(i["h"])("div",g,[Object(i["h"])("a",j,[Object(i["j"])(l,{src:e.item.imgUrl,"spinner-color":"blue",class:"map-tooltip__img"},null,8,["src"])])]),Object(i["j"])(c,{class:"q-pt-none"},{default:Object(i["G"])((function(){return[Object(i["h"])("a",f,[Object(i["h"])("div",v,Object(i["E"])(e.item.title),1)]),Object(i["h"])("div",O,Object(i["E"])(e.item.price)+" $ ",1)]})),_:1})]),Object(i["j"])(c,{class:"q-pt-none"},{default:Object(i["G"])((function(){return[Object(i["h"])("div",_,Object(i["E"])(e.item.description),1)]})),_:1}),Object(i["h"])("div",{class:Object(i["r"])(["map-tooltip__description",{"map-tooltip__description--open":e.isDescOpen}])},[Object(i["j"])(s,{inset:""}),Object(i["j"])(c,null,{default:Object(i["G"])((function(){return[Object(i["h"])("ul",h,[(Object(i["v"])(!0),Object(i["g"])(i["a"],null,Object(i["C"])(e.item.options,(function(e){return Object(i["v"])(),Object(i["g"])("li",{key:e.name},[Object(i["h"])("span",y,Object(i["E"])(e.name)+":",1),Object(i["i"])(" "+Object(i["E"])(e.value),1)])})),128))])]})),_:1})],2),Object(i["h"])("div",{class:"map-tooltip__toggler",onClick:t[0]||(t[0]=function(){return e.toggleDesc&&e.toggleDesc.apply(e,arguments)})},Object(i["E"])(e.isDescOpen?"close":"more..."),1)]})),_:1})}var k=Object(d["n"])({name:"MapTooltip",props:{item:{type:Object}},setup:function(){var e=Object(p["l"])(!1),t=function(t){t.stopPropagation(),e.value=!e.value};return{isDescOpen:e,toggleDesc:t}}}),L=(o("0bf4"),o("d959")),M=o.n(L),C=o("f09f"),D=o("068f"),q=o("a370"),x=o("eb85"),z=o("93dc"),P=o.n(z);const G=M()(k,[["render",w],["__scopeId","data-v-67b48392"]]);var T=G;P()(k,"components",{QCard:C["a"],QImg:D["a"],QCardSection:q["a"],QSeparator:x["a"]});var Z={class:"layers-control"};function E(e,t,o,n,a,r){return Object(i["v"])(),Object(i["g"])("div",Z,[Object(i["h"])("button",{class:Object(i["r"])(["layers-control__icon",{"layers-control__icon--toggled":e.isToggled}]),onClick:t[0]||(t[0]=function(){return e.toggleLayers&&e.toggleLayers.apply(e,arguments)})},null,2)])}var U=Object(d["n"])({name:"MapLayersControl",emits:["toggleLayer"],setup:function(e,t){var o=t.emit,i=Object(p["l"])(!1),n=function(){i.value=!i.value,o("toggleLayer")};return{isToggled:i,toggleLayers:n}}});o("a775");const S=M()(U,[["render",E],["__scopeId","data-v-7935c254"]]);var N=S,Q=Object(d["n"])({name:"GMap",components:{LMap:m["c"],LTileLayer:m["g"],LMarker:m["d"],LIcon:m["b"],LPolygon:m["e"],LPopup:m["f"],LControlZoom:m["a"],MapLayersControl:N,MapTooltip:T},emits:["mapZoom","markerClick"],props:{markers:{type:Array},defaultZoom:{type:Number,default:10}},setup:function(e,t){var o=t.emit,i=Object(p["l"])(e.defaultZoom),n=Object(p["l"])(13.765744606439108),a=Object(p["l"])(100.49043622905579),r=Object(p["l"])(!1),l=Object(p["k"])([{id:1,name:"Streets",visible:!1,attribution:"",url:"https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"},{id:2,name:"Satelite",visible:!0,url:"http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",attribution:""},{id:3,name:"Satelite",visible:!0,url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png",attribution:"",subdomains:"abcd"}]),c=Object(p["l"])(null),s=2,u=17,m=[35,0],b=Object(p["c"])((function(){return r.value?"bottomleft":"topleft"})),g=function(){window.navigator.geolocation.getCurrentPosition((function(e){n.value=e.coords.latitude,a.value=e.coords.longitude}))},j=function(e,t){e.originalEvent.stopPropagation(),o("markerClick",t),setTimeout((function(){return c.value=t}),100)},f=function(e){return o("mapZoom",e)},v=function(e){return e.map((function(e){return[e.latitude,e.longtitude]}))},O=function(){l=l.map((function(e){return e.visible=!e.visible,e}))},_=function(){r.value=!!window&&window.innerWidth<=991},h=function(){window&&window.addEventListener("resize",_)},y=function(){window&&window.removeEventListener("resize",_)};return Object(d["y"])((function(){g(),_(),h()})),Object(d["z"])((function(){y()})),{zoom:i,centerLat:n,centerLng:a,tileProviders:l,activeMarker:c,maxZoom:u,minZoom:s,staticAnchor:m,isMobile:r,computedPosition:b,handleMarkerClick:j,emitMapZoom:f,modifyCoords:v,handleToggleLayer:O}}});o("6af0"),o("19e9");const I=M()(Q,[["render",u],["__scopeId","data-v-544487f6"]]);var A=I,V=[{id:1,coords:{latitude:13.79002604404013,longtitude:100.65473040647144},imgUrl:"https://villas-dream.com/wp-content/uploads/2018/04/villas_13_srgb_low_res_4_web-1.jpg",title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, alias!",price:"10.000",options:[{name:"badrooms",value:"4"},{name:"square",value:2e3}],plot:null},{id:2,coords:{latitude:13.51060421345529,longtitude:100.4335870804875},imgUrl:"https://villas-dream.com/wp-content/uploads/2018/04/villas_13_srgb_low_res_4_web-1.jpg",title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, alias!",price:"10.000",options:[{name:"badrooms",value:"4"},{name:"square",value:2e3}],plot:null},{id:3,coords:{latitude:13.535305379500866,longtitude:100.6535756110355},imgUrl:"https://villas-dream.com/wp-content/uploads/2018/04/villas_13_srgb_low_res_4_web-1.jpg",title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, alias!",price:"10.000",options:[{name:"badrooms",value:"4"},{name:"square",value:2e3}],plot:null},{id:4,coords:{latitude:13.497673514847987,longtitude:100.80884410808468},imgUrl:"https://villas-dream.com/wp-content/uploads/2018/04/villas_13_srgb_low_res_4_web-1.jpg",title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, alias!",price:"10.000",options:[{name:"badrooms",value:"4"},{name:"square",value:2e3}],plot:null},{id:5,coords:{latitude:13.432555850667166,longtitude:100.0772030475417},imgUrl:"https://villas-dream.com/wp-content/uploads/2018/04/villas_13_srgb_low_res_4_web-1.jpg",title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, alias!",price:"10.000",options:[{name:"badrooms",value:"4"},{name:"square",value:2e3}],plot:null},{id:6,coords:{latitude:13.818270417413805,longtitude:100.85952499178235},imgUrl:"https://villas-dream.com/wp-content/uploads/2018/04/villas_13_srgb_low_res_4_web-1.jpg",title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, alias!",price:"10.000",options:[{name:"badrooms",value:"4"},{name:"square",value:2e3}],plot:null},{id:7,coords:{latitude:13.861902381111307,longtitude:100.422373430496},imgUrl:"https://villas-dream.com/wp-content/uploads/2018/04/villas_13_srgb_low_res_4_web-1.jpg",title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, alias!",price:"10.000",options:[{name:"badrooms",value:"4"},{name:"square",value:2e3}],plot:null},{id:8,coords:{latitude:13.514153122013058,longtitude:100.39903792772813},imgUrl:"https://villas-dream.com/wp-content/uploads/2018/04/villas_13_srgb_low_res_4_web-1.jpg",title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, alias!",price:"10.000",options:[{name:"badrooms",value:"4"},{name:"square",value:2e3}],plot:[{latitude:13.514267455893446,longtitude:100.39871929755627},{latitude:13.514383633812518,longtitude:100.39913844796091},{latitude:13.51436334878311,longtitude:100.39952914924305},{latitude:13.514038788077839,longtitude:100.39959363392069},{latitude:13.513810120042876,longtitude:100.39880274831557}]},{id:9,coords:{latitude:13.524713807684924,longtitude:100.27077735303047},imgUrl:"https://villas-dream.com/wp-content/uploads/2018/04/villas_13_srgb_low_res_4_web-1.jpg",title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, alias!",price:"10.000",options:[{name:"badrooms",value:"4"},{name:"square",value:2e3}],plot:[{latitude:13.524893626569177,longtitude:100.2691173345256},{latitude:13.52600762346085,longtitude:100.27150361112636},{latitude:13.524990114695035,longtitude:100.27223889106193},{latitude:13.523713836778999,longtitude:100.27005109493459}]},{id:10,coords:{latitude:13.49251939119778,longtitude:100.98214427872045},imgUrl:"https://villas-dream.com/wp-content/uploads/2018/04/villas_13_srgb_low_res_4_web-1.jpg",title:"Lorem",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, alias!",price:"10.000",options:[{name:"badrooms",value:"4"},{name:"square",value:2e3}],plot:[{latitude:13.492861062670123,longtitude:100.98137180253119},{latitude:13.492986255148283,longtitude:100.98249296588922},{latitude:13.492096865494796,longtitude:100.98214696092944}]}],$={name:"LayoutDefault",components:{GMap:A},setup:function(){var e=V,t=function(e){return console.log("maker was clicked",e)},o=function(e){return console.log("map has change zoom",e)};return{mapData:e,handleMarkerClick:t,handleMapZoom:o}}},H=(o("3a03"),o("4d5a")),J=o("e359"),W=o("65c6"),F=o("6ac5"),R=o("09e3");const B=M()($,[["render",r],["__scopeId","data-v-adac3ab8"]]);var K=B;P()($,"components",{QLayout:H["a"],QHeader:J["a"],QToolbar:W["a"],QToolbarTitle:F["a"],QPageContainer:R["a"]});var X=o("b05d"),Y=(o("c867"),o("e54f"),{config:{},plugins:{}});Object(i["d"])(K).use(X["a"],Y).mount("#app")},"5a46":function(e,t,o){},"6af0":function(e,t,o){"use strict";o("1245")},"9f75":function(e,t,o){},a775:function(e,t,o){"use strict";o("5a46")},c867:function(e,t,o){}});
//# sourceMappingURL=app.eb6e23e0.js.map