<script setup lang="ts">
const { t } = useI18n();
const props = defineProps<{
    list: Query,
    select: Function
}>();
const movies = ref <Movie[]>();

const result = await getItemList(props.list.type, props.list.query, 1);
movies.value = result.results;
</script>


<template>
    <CarouselBase>
        <template #title>{{ t(props.list.title) }}</template>
        <template #button>
            <ButtonMore
                :path="''"
                :title="t('More')"
            />
        </template>
        <LazyCardMovie
            v-for="movie in movies"
            :key="movie.id"
            :item="movie"
            @click="select(movie.id)"
        />
    </CarouselBase>
</template>