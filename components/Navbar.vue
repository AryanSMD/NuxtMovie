<script setup lang="ts">
const btns = [
    {
        path: '/',
        icon: 'fluent:home-32-filled',
        title: 'home'
    },
    {
        path: '/movie',
        icon: 'fluent:movies-and-tv-16-filled',
        title: 'movies'
    },
    {
        path: '/tv',
        icon: 'fluent:filmstrip-play-32-filled',
        title: 'series'
    },
    {
        path: '/search',
        icon: 'fluent:search-12-filled',
        title: 'search'
    }
]
</script>


<template>
    <div 
        class="w-full h-[50px] lg:h-screen fixed lg:sticky bottom-0 lg:top-0 left-0 lg:w-[60px] 2xl:w-[80px] 
            bg-black flex flex-row lg:flex-col justify-center items-center z-[1000] border-t-[1px] 
            lg:border-t-0 lg:border-r-[1px] border-tertiary lg:gap-6 lg:gap-16 2xl:gap-20"
    >
    <ButtonNav
        v-for="btn in btns"
        :key="btn.path"
        :path="btn.path" 
        :icon="btn.icon" 
        :title="$t(btn.title)"
    />
    </div>
</template>