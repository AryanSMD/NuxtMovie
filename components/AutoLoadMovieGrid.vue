<script setup lang="ts">
const props = defineProps<{
    movies: Movie[],
    type: 'movie'|'tv',
    fetch: (page: number) => Promise<void>,
}>();
const isLoading = ref<boolean>(false);
const counter = ref<number>(1);

async function loadMovie() {
    isLoading.value = true;
    try {
        counter.value++;
        await props.fetch(counter.value);
    }
    finally {
        isLoading.value = false
    }
}
</script>

<template>
    <div class="w-full grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] p-8 gap-4">
        <CardMovie
            v-for="movie in props.movies"
            :key="movie.id"
            :item="movie"
            class="w-auto"
            @click="$router.push(`/${ props.type }/${ movie.id }`)"
        />
    </div>
    <div v-if="movies.length" class="w-full flex justify-center my-[70px]">
        <Icon v-if="isLoading" name="svg-spinners:bars-rotate-fade" class="icon" />
        <button v-else @click="loadMovie">
            <Icon name="fluent:add-circle-24-regular" class="icon" />
        </button>
    </div>
</template>


<style scoped>
.icon {
    @apply
    w-8 lg:w-12 h-8 lg:h-12
}
button {
    @apply
    transition-all duration-300 text-text hover:text-primary animate-pulse
}
</style>