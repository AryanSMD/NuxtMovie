<script setup lang="ts">
const props = defineProps<{
    path: object|string,
    title: string
}>()
</script>


<template>
    <nuxt-link 
        :to="props.path" 
        class="text-white text-opacity-70 transition-colors duration-300 
            hover:text-primary flex justify-center items-center cursor-pointer"
    >
        {{ props.title }}
    </nuxt-link>
</template>