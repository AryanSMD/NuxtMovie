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
        from-transparent from-[1%] via-black to-transparent to-[99%] overflow-hidden backdrop-blur-[2px]"
    >
        <div class="title" v-html="title"></div>
        <div class="description">{{ t('description') }}</div>
        <div class="w-full flex items-center justify-center gap-[80px] my-[40px]">
            <nuxt-link class="btn" to="/movies">{{ t('movies') }}</nuxt-link>
            <nuxt-link class="btn" to="/series">{{ t('series') }}</nuxt-link>
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
.btn {
    box-shadow: 
        1px 1px 5px var(--primary),
        .5px .5px 10px var(--primary),
        -1px -1px 5px var(--primary),
        -.5px -.5px 10px var(--primary),
        2.5px 2.5px 10px var(--primary) inset,
        -2.5px -2.5px 10px var(--primary) inset;
    text-shadow: 
        0 0 15px var(--primary);
    @apply
    bg-transparent hover:bg-primary hover:text-black text-primary border-[3px] border-primary w-[100px] 
    h-[60px] flex justify-center items-center rounded-md cursor-pointer transition-all duration-300 
    relative font-medium hover:animate-none text-[1.2rem]
}
.btn::after {
    content: '';
    transform: 
        perspective(.3em)
        rotateX(5deg)
        scale(1.3, .5);
    filter: blur(10px);
    @apply
    absolute left-0 bg-primary bottom-[-50px] h-[40px] w-[100px] opacity-40 pointer-events-none
    transition-opacity duration-300
}
.btn:hover::after {
    opacity: .7;
}
</style>