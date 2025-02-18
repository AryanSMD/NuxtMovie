<script setup lang="ts">
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();

const type = computed(() => route.params.type as 'movie'|'tv');

const movie: Movie = await getItem(type.value, `${ route.params.id }`);
const recommendations = await getRecommendations(type.value, `${ route.params.id }`, 1);
</script>


<template>
    <NuxtImg
        :src="`https://image.tmdb.org/t/p/original${ movie?.backdrop_path }`"
        class="fixed top-0 left-0 w-screen h-screen rounded-md"
    />
    <div class="w-full flex justify-center items-center py-10">
        <div class="w-[95%] sm:w-[90%] 2xl:w-[80%] bg-black bg-opacity-90 rounded-lg backdrop-blur-[1px] p-3 flex flex-col md:gap-10">
            <div class="w-full flex flex-col md:flex-row justify-between md:gap-5">
                <div class="w-[40%] md:w-[30%] m-auto md:m-0">
                    <NuxtImg
                        :src="`https://image.tmdb.org/t/p/original${ movie?.poster_path }`"
                        class="w-full aspect-[2/3]"
                    />
                </div>
                <div class="w-full md:w-[70%]">
                    <div 
                        class="w-full text-center text-[1rem] sm:text-[1.8rem] md:text-[2rem] 
                            lg:text-[2.4rem] 2xl:text-[3rem] md:mb-5"
                    >
                        {{ movie.title }}
                    </div>
                    <InfoMovie :movie="movie" />
                </div>
            </div>
            <CarouselBase v-if="movie.credits?.cast.length">
                <template #title>{{ t('Cast') }}</template>
                <template #button></template>
                <LazyCardPerson
                    v-for="cast in movie.credits?.cast"
                    :key="cast.name"
                    :item="cast"
                    @click="()=>{ $router.push(`/persons/${ cast.id }`) }"
                />
            </CarouselBase>
            <CarouselBase v-if="recommendations.results.length">
                <template #title>{{ t('More Like This') }}</template>
                <template #button></template>
                <LazyCardMovie
                    v-for="item in recommendations.results"
                    :key="item.id"
                    :item="item"
                    @click="()=>{ $router.push(`/${ type }/${ item.id }`) }"
                />
            </CarouselBase>
        </div>
    </div>
</template>