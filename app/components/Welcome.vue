<script setup lang="ts">
const { t, locale } = useI18n();
</script>


<template>
    <div class="label">
        <div class="title" :dir="locale === 'fa' ? 'rtl': 'ltr'">
            {{ t('welcome') }}
            <span class="text-primary italic font-bold">Nuxt Movie</span>
        </div>
        <div class="description" :dir="locale === 'fa' ? 'rtl': 'ltr'">{{ t('description') }}</div>
        <div class="w-full flex items-center justify-center gap-[60px] lg:gap-[80px] mt-3 mb-4 lg:mb-[30px]">
            <ButtonNeon 
                :path="'/movie'"
                :title="t('movies')"
            />
            <ButtonNeon 
                :path="'/tv'"
                :title="t('series')"
            />
        </div>
    </div>
</template>


<style scoped>
@reference '~/assets/css/main.css';

.label {
    background-color: rgb(0, 0, 0, .8);
    @apply
    flex w-full flex-col justify-center items-center py-5 px-5 absolute overflow-hidden backdrop-blur-[2px]
}
.title {
    @apply
    text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] 2xl:text-[3.5rem] text-center
}
.description {
    @apply
    text-justify w-fit sm:w-[500px] lg:w-[700px] text-[.8rem] sm:text-[1rem] md:text-[1.2rem] 
    lg:text-[1.3rem] 2xl:text-[1.5rem]
}
</style>