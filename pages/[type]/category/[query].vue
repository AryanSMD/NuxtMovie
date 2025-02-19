<script setup lang="ts">
const isLoading = ref<boolean>(false);
const counter = ref<number>(1);
const movies = ref<Movie[]>([]);
const route = useRoute();
const query = computed(() => route.params.query as string);
const type = computed(() => route.params.type as 'movie'||'tv');

onMounted(async () => {
    await getMoviePerPage();
})

async function getMoviePerPage() {
    try {
        isLoading.value = true;
        const result =  await getItemList(type.value, query.value, counter.value);
        movies.value.push(...result.results);
    }
    finally {
        isLoading.value = false
    }
}

async function nextPage() {
    counter.value++;
    await getMoviePerPage();
}
</script>


<template>
    <AutoLoadMovieGrid 
        :movies="movies"
        :type="type"
        :func="nextPage"
        :isLoading="isLoading"
    />
</template>


<style scoped>
.icon {
    @apply
    w-8 h-8
}
</style>