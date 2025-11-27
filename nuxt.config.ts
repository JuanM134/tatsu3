// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2025-10-26',
   plugins: ['~/plugins/fontawesome'],
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: 'Tatsu',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        // Bernoru (no está en Google Fonts, pero puedes usar alternativa similar)
        // Te propongo usar "Bebas Neue" como reemplazo estilístico
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' },

        // IBM Plex Mono
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap' },

        // Kokoro (sí existe en Google Fonts)
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kokoro&display=swap' },

        // Konkhmer Sleokchher
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Konkhmer+Sleokchher&display=swap' },

        // Montserrat
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap' },

        // Noto Sans KR
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap' },

        // Roboto Regular
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap' },

    ],

    }
  },
  components: [
    {
      path: '~/components/',
      pathPrefix: false, // auto-import components based only on its name
    },
  ],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/main.css'
  ],
    build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons'
    ]
  }
})
