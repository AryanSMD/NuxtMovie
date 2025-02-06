<script setup lang="ts">
const props = defineProps<{
    imgPath: string|null,
}>()
</script>


<template>
    <div 
        class="w-[80px] md:w-[100px] lg:w-[200px] cursor-pointer item 
            transition-all duration-300"
    >
        <!-- <NuxtImg
            v-if="props.imgPath"
            :src="`/img${ props.imgPath }`"
            width="200"
            height="300"
            loading="lazy"
        /> -->
        <NuxtImg
            v-if="props.imgPath"
            :src="`https://image.tmdb.org/t/p/original/${ props.imgPath }`"
            width="200"
            height="300"
        />
        <div v-else class="aspect-[2/3] bg-black"></div>
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