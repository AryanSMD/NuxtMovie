<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const movie: Movie = await getItem('movie', `${ route.params.id }`);
const recommendations = await getRecommendations(`${ route.params.id }`, 1);
</script>


<template>
    <NuxtImg
        :src="`https://image.tmdb.org/t/p/original/${ movie?.backdrop_path }`"
        class="fixed top-0 left-0 w-screen h-screen rounded-md"
    />
    <div class="w-full flex justify-center items-center p-10">
        <div class="w-[90%] bg-black bg-opacity-90 rounded-lg backdrop-blur-[1px] p-3 flex flex-col md:gap-10">
            <div class="w-full flex justify-between gap-2">
                <div class="w-1/3">
                    <NuxtImg
                        :src="`https://image.tmdb.org/t/p/original/${ movie?.poster_path }`"
                    />
                </div>
                <div class="w-2/3">
                    <div 
                        class="w-full text-center text-[1rem] sm:text-[1.8rem] md:text-[2rem] 
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
            <CarouselBase>
                <template #title>More Like This</template>
                <template #button></template>
                <LazyCardMovie
                    v-for="item in recommendations.results"
                    :key="item.id"
                    :item="item"
                    @click="()=>{ $router.push(`/movies/${ item.id }`) }"
                />
            </CarouselBase>
        </div>
    </div>
</template>