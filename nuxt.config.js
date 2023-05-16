/* eslint-disable */
export default {
    target: 'static',
    head: {
        title: 'Michael Pereira',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Full Stack Developer Portfolio' },
            {
                hid: 'keywords',
                name: 'keywords',
                content:
                    'michael, pereira, michaelpereira, mwpereira, portfolio, full-stack, developer, vuejs, nuxt, typescript, development, software',
            },
            { hid: 'og:title', property: 'og:title', content: 'Michael Pereira' },
            { hid: 'og:description', property: 'og:description', content: 'Full Stack Developer Portfolio' },
            { hid: 'og:image', property: 'og:image', content: 'https://mwpereira.ca/site.PNG' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'Michael Pereira' },
            { hid: 'article:author', property: 'article:author', content: 'https://mwpereira.ca/' },
            { hid: 'article:publisher', property: 'article:publisher', content: 'https://mwpereira.ca/' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'msapplication', content: '#da532c' },
            { name: 'theme-color', content: '#ffffff' },
        ],
        link: [
            { rel: 'apple-touch-icon', size: '180x180', href: '/icons/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', size: '32x32', href: '/icons/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', size: '16x16', href: '/icons/favicon-16x16.png' },
            { rel: 'manifest', href: '/icons/site.webmanifest' },
            { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', content: '#5bbad5' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap',
            },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css' },
        ],
    },
    css: ['assets/scss/main.scss'],
    plugins: [],
    components: true,
    buildModules: ['@nuxt/typescript-build'],
    modules: ['nuxt-buefy', '@nuxtjs/google-gtag', '@nuxtjs/style-resources'],
    'google-gtag': {
        id: 'G-S57CPLRGK6',
        config: {
            anonymize_ip: true,
            send_page_view: false,
            linker: {
                domains: ['mwpereira.ca', 'michaelpereira.dev'],
            },
        },
    },
    build: {
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                preserveLineBreaks: false,
                collapseWhitespace: true,
            },
        },
        optimizeCSS: true,
    },
    server: {
        port: 8080,
    },
}
