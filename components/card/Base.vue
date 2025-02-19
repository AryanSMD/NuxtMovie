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
        <!-- <NuxtImg
            v-if="props.imgPath"
            :src="`/img${ props.imgPath }`"
            width="200"
            height="300"
            class="aspect-[2/3]"
            loading="lazy"
        /> -->
        <NuxtImg
            v-if="props.imgPath"
            :src="`https://image.tmdb.org/t/p/original/${ props.imgPath }`"
            width="400"
            height="600"
            class="aspect-[4/6]"
        />
        <div v-else class="aspect-[4/6] bg-tertiary flex justify-center items-center">
            <Icon name="fluent:question-circle-24-regular" class="w-10 h-10 text-secondary" />
        </div>
        <div class="text-[.6rem] md:text-[.8rem] lg:text-[1.2rem] text-center">
            <slot />
        </div>
    </div>
</template>


<style scoped>
.item:hover {
    transform: scale(1.05);
}
</style>