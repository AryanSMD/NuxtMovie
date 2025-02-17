<script setup lang="ts">
import { categories } from '../../constants/categories'

const movies = ref <Movie[]> ();
const currentMovie = ref <Movie> ();

const result = await getItemList('tv', 'popular', 1);
movies.value = result.results;
currentMovie.value = await getItem('tv', movies.value![0].id);

onBeforeMount(async () => {
    timer();
});

const timer = (() => {
    let interval;
    let counter = 1;
    return function setTimer() {
        interval = setInterval(async () => {
            currentMovie.value = await getItem('tv', movies.value![counter].id);
            counter = (counter + 1) % movies.value!.length;
        }, 10000);
    }
})()
</script>


<template>
    <div class="w-full flex flex-col">
        <CurrentMovie
            :item="currentMovie!"
            :type="'series'"
        />
        <CarouselAutoQuery
            v-for="list, index in categories.tv"
            :list="list"
            :select="(id: number) => { $router.push(`/series/${ id }`); }"
            :class="index === categories.tv.length - 1 && 'mb-14'"
        />
    </div>
</template>