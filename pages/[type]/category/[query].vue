<script setup lang="ts">
const movies = ref<Movie[]>([]);
const route = useRoute();
const query = computed(() => route.params.query as string);
const type = computed(() => route.params.type as 'movie'||'tv');

onMounted(async () => {
    await getMoviePerPage(1);
})

async function getMoviePerPage(page: number) {
    const result = await getItemList(type.value, query.value, page);
    movies.value.push(...result.results);
}
</script>


<template>
    <AutoLoadMovieGrid 
        :movies="movies"
        :type="type"
        :fetch="getMoviePerPage"
    />
</template>


<style scoped>
.icon {
    @apply
    w-8 h-8
}
</style>