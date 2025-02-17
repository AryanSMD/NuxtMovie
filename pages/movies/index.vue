<script setup lang="ts">
import { categories } from '../../constants/categories'

const movies = ref <Movie[]> ();
const currentMovie = ref <Movie> ();

const result = await getItemList('movie', 'now_playing', 1);
movies.value = result.results;
currentMovie.value = await getItem('movie', movies.value![0].id);

onBeforeMount(async () => {
    timer();
});

const timer = (() => {
    let interval;
    let counter = 1;
    return function setTimer() {
        interval = setInterval(async () => {
            currentMovie.value = await getItem('movie', movies.value![counter].id);
            counter = (counter + 1) % movies.value!.length;
        }, 10000);
    }
})()
</script>


<template>
        <CurrentMovie
            :item="currentMovie!"
            :type="'movies'"
        />
        <div class="w-full flex flex-col gap-3 lg:gap-7">
            <CarouselAutoQuery
                v-for="list, index in categories.movie"
                :list="list"
                :select="(id: number) => { $router.push(`/movies/${ id }`); }"
                :class="index === categories.movie.length - 1 && 'mb-14'"
            />
        </div>
</template>