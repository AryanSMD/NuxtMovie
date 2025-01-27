<script setup lang="ts">
const props = defineProps<{
    title: string
}>()
</script>


<template>
    <div 
        class="h-[200px] md:h-[250px] lg:h-[430px] w-full flex flex-col gap-2 px-3 py-3 overflow-x-auto overflow-y-hidden"
    >
        <div class="w-full flex items-center justify-between sticky top-0 left-0 z-[1]">
            <div>{{ props.title }}</div>
            <nuxt-link to="">More</nuxt-link>
        </div>
        <div class="w-max flex items-center gap-3">
            <slot></slot>
        </div>
    </div>
</template>