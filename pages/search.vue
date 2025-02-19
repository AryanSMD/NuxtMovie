<script setup lang="ts">
const { t } = useI18n();
const isLoading = ref<boolean>(false);
const counter = ref<number>(1);
const movies = ref<Movie[]>([]);
const query = ref<string>('');
const type = 'movie';

async function search() {
    try {
        isLoading.value = true;
        const result =  await searchMovies(query.value);
        movies.value = [...result.results];
    }
    finally {
        isLoading.value = false
    }
}

const throttledSearch = useDebounceFn(search, 300);

async function nextPage() {
    counter.value++;
    const result =  await searchMovies(query.value, counter.value);
    movies.value.push(...result.results);
}

watch(
    () => query.value, 
    () => throttledSearch()
)
</script>


<template>
    <div class="w-full p-3">
        <div class="w-full flex items-center bg-tertiary rounded-md p-1">
            <Icon name="fluent:search-12-filled" class="text-secondary w-10 h-10" />
            <input 
                type="text"
                v-model="query"
                @keyup.enter="search"
                :placeholder="t('type to search')"
            >
        </div>
    </div>
    <AutoLoadMovieGrid 
        :movies="movies"
        :type="type"
        :func="nextPage"
        :isLoading="isLoading"
    />
</template>