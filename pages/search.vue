<script setup lang="ts">
const { t } = useI18n();
const movies = ref<Movie[]>([]);
const query = ref<string>('');

async function search() {
    const result = await searchMovies(query.value);
    movies.value = [...result.results];
}

async function nextPage(page: number) {
    const result = await searchMovies(query.value, page);
    movies.value.push(...result.results);
}

const throttledSearch = useDebounceFn(search, 300);

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
        :type="'movie'"
        :fetch="nextPage"
    />
</template>