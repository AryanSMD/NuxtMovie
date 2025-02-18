<script setup lang="ts">
const btns = [
    {
        path: '/',
        icon: 'fluent:home-32-filled',
        title: 'home'
    },
    {
        path: '/movies',
        icon: 'fluent:movies-and-tv-16-filled',
        title: 'movies'
    },
    {
        path: '/series',
        icon: 'fluent:filmstrip-play-32-filled',
        title: 'series'
    },
    {
        path: '/contact',
        icon: 'fluent:call-28-filled',
        title: 'contact'
    }
]
</script>


<template>
    <div 
        class="w-full h-[50px] md:h-screen fixed md:sticky bottom-0 md:top-0 left-0 md:w-[60px] 2xl:w-[80px] 
            bg-black flex flex-row md:flex-col justify-center items-center z-[1000]
            border-t-[1px] md:border-t-0 md:border-r-[1px] border-secondary md:gap-6 lg:gap-16 2xl:gap-20"
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