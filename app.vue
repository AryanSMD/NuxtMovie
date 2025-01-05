<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  charset: 'utf-8',
  title: 'Nuxt Movie',
  meta: [
    { name: 'description', content: 'A TMDB client built with Nuxt Image to show the potential of it ✨' },
  ],
  link: [
    { rel: 'icon', type: 'image/webp', href: 'icon.png' }
  ]
})
</script>


<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>