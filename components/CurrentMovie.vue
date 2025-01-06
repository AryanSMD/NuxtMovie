<script setup lang="ts">
const props = defineProps<{
    item: Movie
}>()
</script>


<template>
    <div 
        class="w-full relative aspect-[1/1] md:aspect-[3/2] lg:aspect-[25/7] overflow-hidden 
            border-b-[1px] border-secondary"
    >
        <div class="w-full lg:w-3/4 h-full absolute top-0 right-0">
            <NuxtImg 
                :src="`/img${ props.item?.backdrop_path }`"
                format="webp"
                loading="lazy"
                class="w-full object-cover"
            />
        </div>
        <div 
            class="absolute w-full lg:w-4/5 h-[80%] lg:h-full bottom-0 lg:top-0 left-0 
                bg-gradient-to-t lg:bg-gradient-to-r from-black via-black
                via-[35%] to-transparent to-[90%] flex items-center"
        >
            <div 
                class="w-full lg:w-1/2 h-full flex flex-col justify-center items-center px-2 lg:pl-8 
                    lg:pr-0 gap-2 lg:gap-5"
            >
                <div 
                    class="text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] 
                        lg:text-[2.4rem] 2xl:text-[3rem] lg:leading-[50px]"
                >
                    {{ props.item?.title ?? '' }}
                </div>
                <div class="w-full flex items-center gap-2 md:gap-5 text-white text-opacity-60">
                    <Stars :vote="props.item?.vote_average ?? 0" />
                    <div class="item">{{ Math.floor((props.item?.vote_average ?? 0) * 10) / 10 }}</div>
                    <div class="item">{{ props.item?.release_date?.split('-')[0] ?? "0000" }}</div>
                </div>
                <div 
                    class="text-[.7rem] sm:text-[.9rem] 2xl:text-[1rem] text-justify font-light max-h-[70px]
                        lg:max-h-fit overflow-hidden"
                >
                    {{ props.item?.overview ?? '' }}
                </div>
                <nuxt-link 
                    to="" 
                    class="text-white text-opacity-70 text-[1.5rem] self-start cursor-pointer 
                        transition-colors duration-300 hover:text-primary rounded-md flex 
                        justify-center items-center"
                >
                    Read More
                </nuxt-link>
            </div>
        </div>

    </div>
</template>


<style scoped>
.item {
    @apply
    flex justify-center items-center gap-1 first-letter:text-[.7rem] sm:text-[.9rem] 2xl:text-[1rem]
}
.item::before {
    content: '';
    --size: 5px;
    width: var(--size);
    height: var(--size);
    background-color: var(--text);
    border-radius: 100%;
    opacity: 60%;
}
</style>