<script setup lang="ts">
const props = defineProps<{
    imgPath: string,
}>()
</script>


<template>
    <div 
        class="w-[80px] md:w-[100px] lg:w-[200px] cursor-pointer item 
            transition-all duration-300"
    >
        <!-- <NuxtImg
            :src="`/img${ props.item.poster_path }`"
            class="w-full object-cover img"
            loading="lazy"
        /> -->
        <NuxtImg
            :src="`https://image.tmdb.org/t/p/original/${ props.imgPath }`"
        />
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