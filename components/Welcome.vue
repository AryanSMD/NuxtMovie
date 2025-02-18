<script setup lang="ts">
const { t, locale } = useI18n();
const style = `
color: var(--primary);
font-style: italic;
font-weight: bold;
`

const title = computed(() => {
    return locale.value === 'fa' 
        ?  `<span style="${ style }">Nuxt Movie</span> ${ t('welcome') }`
        : `${ t('welcome') } <span style="${ style }">Nuxt Movie</span>`;
})
</script>


<template>
    <div 
        class="flex w-full flex-col justify-center items-center py-5 px-5 absolute bg-gradient-to-r
        from-transparent from-[1%] via-black to-transparent to-[99%] overflow-hidden"
    >
        <div class="title" v-html="title"></div>
        <div class="description">{{ t('description') }}</div>
        <div class="w-full flex items-center justify-center gap-4">
            <nuxt-link click="btn" to="/movies">Movies</nuxt-link>
            <nuxt-link click="btn" to="/series">Series</nuxt-link>
        </div>
    </div>
</template>


<style scoped>
.title {
    @apply
    text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2rem] 2xl:text-[3.5rem] text-center
}
.description {
    @apply
    text-justify w-fit sm:w-[500px] lg:w-[700px]
}
</style>