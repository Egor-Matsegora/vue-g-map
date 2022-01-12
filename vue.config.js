module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    },
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: ['./src/assets/sass/common/index.sass'],
    }
  },
  transpileDependencies: [
    'quasar',
    'leaflet',
    '@vue-leaflet/vue-leaflet'
  ]
}
