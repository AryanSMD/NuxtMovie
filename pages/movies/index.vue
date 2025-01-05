<script setup lang="ts">
const movie = ref <Movie> ();
onBeforeMount(async () => {
    const result: any = await $fetch('/api/tmdb/movie/now_playing?language=en-US&page=1');
    movie.value = await result.results[5];
})
</script>


<template>
    <div class="w-full bg-secondary">
        <CurrentMovie
            :item="movie!"
        />
    </div>
</template>


<style scoped></style>