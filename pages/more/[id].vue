<script setup lang="ts">
const isLoading = ref<boolean>(false);
const counter = ref<number>(1);
const movies = ref<Movie[]>([]);
const route = useRoute();
const query = (route.params.id as string).split(' ');

onMounted(async () => {
    await getMoviePerPage();
})

async function getMoviePerPage() {
    try {
        isLoading.value = true;
        const result =  await getItemList(query[0], query[1], counter.value);
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
    <div class="w-full grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] p-8 gap-4">
        <CardMovie
            v-for="movie in movies"
            :key="movie.id"
            :item="movie"
            class="w-auto"
            @click="$router.push(`/movies/${ movie.id }`)"
        />
    </div>
    <div class="w-full flex justify-center mt-5 mb-14">
        <button 
            class="hover:text-primary transition-all duration-300 disabled:cursor-default"
            @click="nextPage" 
            :disabled="isLoading"
        >
            <div v-if="!isLoading" class="flex items-center gap-1">
                <Icon name="fluent:add-circle-24-regular" class="icon" />
                More
            </div>
            <Icon v-else name="svg-spinners:bars-rotate-fade" class="icon" />
        </button>
    </div>
</template>


<style scoped>
.icon {
    @apply
    w-8 h-8
}
</style>