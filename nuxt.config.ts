// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  css: ['./assets/css/style.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    format: ['webp']
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: false,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    lazy: true,
    defaultLocale: 'en',
    locales: [
      {
        name: 'English',
        code: 'en',
        file: 'en.json'
      },
      {
        name: 'French',
        code: 'fr',
        file: 'fr.json'
      },
      {
        name: 'Persian',
        code: 'fa',
        dir: 'rtl',
        file: 'fa.json'
      },
    ],
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
  ],
  router: {
    options: {
      linkActiveClass: "link-active",
      linkExactActiveClass: "link-exact-active"
    }
  },
})