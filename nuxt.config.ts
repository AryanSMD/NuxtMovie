import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/main.css'],
  image: {
    domains: ['image.tmdb.org'],
    alias: {
      '/img': process.env.ImageURL!
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: false,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      {
        name: 'English',
        code: 'en',
        file: 'en.json'
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
    '@pinia/nuxt',
  ],
  router: {
    options: {
      linkActiveClass: "link-active",
      linkExactActiveClass: "link-exact-active"
    }
  },
  runtimeConfig: {
    APIKey: process.env.APIKey,
    public: {
      BaseURL: process.env.BaseURL,
      ImageURL: process.env.ImageURL,
    }
  },
  icon: {
    clientBundle: {
      scan: true
    }
  }
})