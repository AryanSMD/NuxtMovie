<script setup lang="ts">
const props = defineProps<{
    movie: Movie
}>()

const info = [
    { key: 'Released', value: props.movie.release_date?.replaceAll('-', '/') },
    { key: 'Director', value: props.movie.credits?.crew.filter(e => e.job === 'Director')[0].name },
    { key: 'Revenue', value: formatCurrency(props.movie.revenue!) },
    { key: 'Status', value: props.movie.status },
    { key: 'Runtime', value: runtime(props.movie.runtime!) },
    { key: 'Budget', value: formatCurrency(props.movie.budget!) },
    { key: 'Genre', value: props.movie.genres?.map(e => e.name).join(', ') },
    { key: 'Language', value: formatLang(props.movie.original_language) },
    { key: 'Production', value: props.movie.production_companies?.map(e => e.name)[0] + ', ...' },
]
</script>


<template>
    <InfoBase :object="info">
        <template #description>{{ props.movie.overview }}</template>
    </InfoBase>
</template>