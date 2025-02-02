<script setup lang="ts">
const props = defineProps<{
    pathName: string,
    title: string
}>()
</script>


<template>
    <nuxt-link 
        :to="{ name: props.pathName }" 
        class="text-white text-opacity-70 transition-colors duration-300 
            hover:text-primary flex justify-center items-center"
    >
        {{ props.title }}
    </nuxt-link>
</template>