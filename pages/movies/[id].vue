<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const movie: Movie = await getItem('movie', `${ route.params.id }`);
</script>


<template>
    <div class="w-full relative">
        <NuxtImg
            :src="`https://image.tmdb.org/t/p/original/${ movie?.backdrop_path }`"
            class="absolute top-0 left-0 z-[0] w-full h-screen"
        />
        <div class="w-full flex justify-center items-center p-10">
            <div class="w-[90%] bg-black bg-opacity-80 rounded-lg backdrop-blur-[2px] p-3">
                <div class="w-full flex justify-between gap-2">
                    <div class="w-1/3 p-5">
                        <NuxtImg
                            :src="`https://image.tmdb.org/t/p/original/${ movie?.poster_path }`"
                        />
                    </div>
                    <div class="w-2/3">
                        <div 
                            class="w-full text-center text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] 
                                lg:text-[2.4rem] 2xl:text-[3rem]"
                        >
                            {{ movie.title }}
                        </div>
                    </div>
                </div>
                <CarouselBase>
                    <template #title>Cast</template>
                    <template #button></template>
                    <LazyCardPerson
                        v-for="cast in movie.credits?.cast"
                        :key="cast.name"
                        :item="cast"
                        @click="()=>{}"
                    />
                </CarouselBase>
            </div>
        </div>
    </div>
</template>