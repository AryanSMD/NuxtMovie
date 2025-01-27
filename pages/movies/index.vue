<script setup lang="ts">
const movies = ref <Movie[]> ();
const currentMovie = ref <Movie> ();
onBeforeMount(async () => {
    const result: any = await $fetch('/api/tmdb/movie/now_playing?language=en-US&page=1');
    movies.value = await result.results.slice(0, 15);
    currentMovie.value = movies.value![0];
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
    return setInterval(() => {
        currentMovie.value = movies.value![counter];
        counter = (counter + 1) % movies.value!.length;
    }, 20000);
}

function selectMovie(index: number) {
    currentMovie.value = movies.value![index];
    timer.resetTimer(index);
}
</script>


<template>
    <div class="w-full flex flex-col">
        <CurrentMovie
            :item="currentMovie!"
        />
        <List :title="'Popular Movies'">
            <CardMovie 
                v-for="movie, index in movies"
                :key="movie.id"
                :movie="movie"
                @click="selectMovie(index)"
            />
        </List>
        <List :title="'Popular Movies'">
            <CardMovie 
                v-for="movie, index in movies"
                :key="movie.id"
                :movie="movie"
                @click="selectMovie(index)"
            />
        </List>
        <List :title="'Popular Movies'">
            <CardMovie 
                v-for="movie, index in movies"
                :key="movie.id"
                :movie="movie"
                @click="selectMovie(index)"
            />
        </List>
    </div>
</template>