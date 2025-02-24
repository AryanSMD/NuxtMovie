<script setup lang="ts">
import { categories } from '../../constants/categories'

definePageMeta({
  key: route => route.fullPath,
  validate: ({ params }) => {
    return ['movie', 'tv'].includes(params.type as Media)
  },
})

const route = useRoute();
const movies = ref <Movie[]> ();
const currentMovie = ref <Movie> ();

const type = computed(() => route.params.type as Media);

const result = await getItemList(type.value, categories[type.value][0].query, 1);
movies.value = result.results;
currentMovie.value = await getItem(type.value, movies.value![0].id);

onMounted(async () => {
    timer();
});

const timer = (() => {
    let interval;
    let counter = 1;
    return function setTimer() {
        interval = setInterval(async () => {
            currentMovie.value = await getItem(type.value, movies.value![counter].id);
            counter = (counter + 1) % movies.value!.length;
        }, 10000);
    }
})()
</script>


<template>
        <CurrentMovie
            :item="currentMovie!"
            :type="type"
        />
        <div class="w-full flex flex-col gap-3 lg:gap-7">
            <CarouselAutoQuery
                v-for="list, index in categories[type]"
                :list="list"
                :select="(id: number) => { $router.push(`/${ type }/${ id }`); }"
                :class="index === categories[type].length - 1 && 'mb-14'"
            />
        </div>
</template>