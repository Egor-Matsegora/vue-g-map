module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-g-map/' : '/',
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
    'quasar'
  ]
}
