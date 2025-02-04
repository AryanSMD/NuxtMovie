<script setup lang="ts">
import { categories } from '../../constants/categories'

const movies = ref <Movie[]> ();
const currentMovie = ref <Movie> ();

const result = await getItemList('movie', 'now_playing', 1);
movies.value = result.results;
currentMovie.value = await getItem('movie', movies.value![0].id);

onBeforeMount(async () => {
    timer.setTimer(1);
    timer.resetTimer(1);
});


const timer = (() => {
    let interval: NodeJS.Timeout;
    return {
        setTimer(val: number) {
            interval = movieChanger(val);
        },
        resetTimer(val: number) {
            clearInterval(interval);
            interval = movieChanger(val);
        }
    }
})()

function movieChanger(val: number) {
    let counter: number = val;
    return setInterval(async () => {
        currentMovie.value = await getItem('movie', movies.value![counter].id);
        counter = (counter + 1) % movies.value!.length;
    }, 20000);
}

async function selectMovie(index: number, id: string) {
    currentMovie.value = await getItem('movie', id);
    timer.resetTimer(index);
}
</script>


<template>
    <div class="w-full flex flex-col">
        <CurrentMovie
            :item="currentMovie!"
        />
        <CarouselAutoQuery
            v-for="list, index in categories.movie"
            :list="list"
            :select="selectMovie"
            :class="index === categories.movie.length - 1 && 'mb-14'"
        />
    </div>
</template>