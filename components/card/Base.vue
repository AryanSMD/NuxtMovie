<script setup lang="ts">
const props = defineProps<{
    imgPath: string|null,
}>()
</script>


<template>
    <div 
        class="w-60 aspect-[10/16] cursor-pointer item 
            transition-all duration-300"
    >
        <NuxtImg
            v-if="props.imgPath"
            :src="`/img${ props.imgPath }`"
            format="webp"
            width="400"
            height="600"
            class="aspect-[4/6]"
            loading="lazy"
        />
        <div v-else class="aspect-[4/6] bg-tertiary flex justify-center items-center">
            <Icon name="fluent:question-circle-24-regular" class="w-10 h-10 text-secondary" />
        </div>
        <div class="text-[1.1rem] lg:text-[1.3rem] text-center">
            <slot />
        </div>
    </div>
</template>


<style scoped>
.item:hover {
    transform: scale(1.05);
}
</style>