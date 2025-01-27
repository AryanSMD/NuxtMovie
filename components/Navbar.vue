<script setup lang="ts">
import { onClickOutside } from '#build/imports';

const showMenu = ref <boolean> (false);
const navbar = useTemplateRef('navbar');
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

onClickOutside(navbar, () => {
    showMenu.value = false;
})
</script>


<template>
    <div 
        ref="navbar"
        class="w-full fixed md:h-screen md:w-[60px] 2xl:w-[80px] bg-black bg-opacity-80 flex flex-col 
            justify-center items-center md:sticky top-0 left-0 z-[1000] backdrop-blur-[7px] 
            md:border-r-[1px] border-secondary"
    >
        <Icon name="fluent:text-align-justify-24-filled" 
            class="menu-icon-size self-end mt-1 mr-1 md:hidden cursor-pointer hover:text-primary
                transition-colors duration-300"
            @click="showMenu = !showMenu"
        />
        <div class="auto-height h-full w-full md:!grid-rows-1 md:py-10"
            :class="showMenu && 'show py-2'"
        >
            <div
                class="w-full h-full flex flex-col items-center justify-center
                    gap-2 md:gap-6 lg:gap-16 2xl:gap-20 relative md:mt-0"
            >
            <ButtonMenu 
                v-for="btn in btns"
                :key="btn.path"
                :path="btn.path" 
                :icon="btn.icon" 
                :title="$t(btn.title)"
                @click="showMenu = false"
            />
            </div>
        </div>
    </div>
</template>