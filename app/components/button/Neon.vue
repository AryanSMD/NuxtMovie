<script setup lang="ts">
const props = defineProps<{
    path: string,
    title: string
}>()
</script>


<template>
    <NuxtLink class="btn" :to="props.path">{{ props.title }}</NuxtLink>
</template>


<style scoped>
@reference '~/assets/css/main.css';

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
    bg-transparent hover:bg-primary hover:text-black text-primary border-[3px] border-primary w-17.5
    lg:w-25 h-10 lg:h-15 flex justify-center items-center rounded-md cursor-pointer 
    transition-all duration-300 relative font-medium hover:animate-none text-[.7rem] lg:text-[1.2rem]
}
.btn::after {
    content: '';
    transform: 
        perspective(.3em)
        rotateX(5deg)
        scale(1.3, .5);
    filter: blur(10px);
    @apply
    absolute left-0 bg-primary -bottom-7.5 lg:-bottom-11.25 h-6.25 lg:h-10 w-17.5 lg:w-25
    opacity-40 pointer-events-none transition-opacity duration-300
}
.btn:hover::after {
    opacity: 1;
}
</style>