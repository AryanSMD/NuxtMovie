<script setup lang="ts">
const { t } = useI18n();
const props = defineProps<{
    list: Query,
    select: Function
}>();
const movies = ref <Movie[]>();

const result = await getItemList(props.list.type, props.list.query, 1);
movies.value = result.results.slice(0, 15);
</script>


<template>
    <div 
        class="h-[200px] md:h-[250px] lg:h-[430px] w-full flex flex-col gap-2 px-3 py-3 overflow-x-auto 
            overflow-y-hidden"
    >
        <div class="w-full flex items-center justify-between sticky top-0 left-0 z-[1]">
            <div>{{ t(props.list.title) }}</div>
            <ButtonMore
                :path="''"
                :title="t('More')"
            />
        </div>
        <div class="w-max flex items-center gap-3 scroll-smooth">
            <LazyCard
                v-for="movie, index in movies"
                :key="movie.id"
                :item="movie"
                :type="props.list.type"
                @click="select(index, movie.id)"
            />
        </div>
    </div>
</template>