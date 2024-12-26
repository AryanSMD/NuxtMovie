<script setup lang="ts">
import HomeBtn from './Buttons/HomeBtn.vue';

const { t, locale } = useI18n();
const style = `
color: var(--primary);
font-style: italic;
font-weight: bold;
`

const title = computed(() => {
    return locale.value === 'fa' 
        ?  `<span style="${style}">Nuxt Movie</span> ${t('welcome')}`
        : `${t('welcome')} <span style="${style}">Nuxt Movie</span>`;
})
</script>


<template>
    <div 
        class="flex max-w-[95%] flex-col justify-center items-center rounded-lg py-5 xl:py-10 px-5 absolute 
            bg-black bg-opacity-80 backdrop-blur-[5px]"
    >
        <div class="title" v-html="title"></div>
        <div class="description">{{ t('description') }}</div>
        <div class="flex justify-center items-center gap-20 mt-5">
            <HomeBtn :icon="'fluent:movies-and-tv-16-regular'" :title="'Movies'" />
            <HomeBtn :icon="'fluent:filmstrip-play-32-regular'" :title="'Series'" />
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