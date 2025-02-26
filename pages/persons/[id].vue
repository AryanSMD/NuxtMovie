<script setup lang="ts">
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();
const person: Person = await getItem('person', `${ route.params.id }`);
</script>


<template>
    <div class="fixed top-0 w-screen h-screen rounded-md gradient"></div>
    <div class="w-full flex justify-center items-center py-10">
        <div class="w-[95%] sm:w-[90%] 2xl:w-[80%] bg-black bg-opacity-90 rounded-lg backdrop-blur-[1px] p-3 flex flex-col md:gap-10">
            <div class="w-full flex flex-col md:flex-row justify-between md:gap-5">
                <div class="w-[40%] md:w-[30%] m-auto md:m-0">
                    <NuxtImg
                        :src="`/img${ person?.profile_path }`"
                        class="w-full aspect-[2/3]"
                    />
                </div>
                <div class="w-full md:w-[70%]">
                    <div 
                        class="w-full text-center text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] 
                            lg:text-[2.4rem] 2xl:text-[3rem] md:mb-5 font-medium"
                    >
                        {{ person.name }}
                    </div>
                    <InfoPerson :person="person" />
                </div>
            </div>
            <CarouselBase v-if="person.credits.cast.length">
                <template #title>{{ t('Known For') }}</template>
                <template #button></template>
                <LazyCardMovie
                    v-for="item in person.credits.cast"
                    :key="item.id"
                    :item="item"
                    @click="$router.push(`/movie/${ item.id }`)"
                />
            </CarouselBase>
        </div>
    </div>
</template>