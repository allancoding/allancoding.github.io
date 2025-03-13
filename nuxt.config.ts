export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/png', href: '/logos/allancoding.png' }],
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Allan Coding!' },
        { property: 'og:description', content: 'Allancoding the cool coder!' },
        { property: 'og:url', content: 'https://allancoding.dev/' },
        { property: 'og:image', content: 'https://allancoding.dev/logos/allancoding.png' },
        { property: 'description', content: 'Allancoding the cool coder!' },
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
    '~/assets/css/main.css'
  ],
  
  modules: ["nuxt-typedjs", "@nuxt/icon"],
  plugins: [
    '~/plugins/matrixEffect.client.js',
    '~/plugins/title.js'
  ],
})