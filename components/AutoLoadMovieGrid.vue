<script setup lang="ts">
const props = defineProps<{
    movies: Movie[],
    type: 'movie'|'tv',
    func: Function,
    isLoading: boolean
}>()
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
    <div class="w-full flex justify-center mt-5 mb-14">
        <button 
            class="hover:text-primary transition-all duration-300 disabled:cursor-default"
            @click="props.func()" 
            :disabled="props.isLoading"
        >
            <div v-if="!props.isLoading" class="flex items-center gap-1">
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