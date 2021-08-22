export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Michael Pereira',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Full Stack Engineer Portfolio' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', size: '180x180', href: '/icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'manifest', href: '/icons/site.webmanifest' },
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', content: '#5bbad5' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
