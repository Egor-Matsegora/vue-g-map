module.exports = {
  publickPath: process.env.NODE_ENV === 'production' ? '/vue-g-map/' : '/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
