<script setup lang="ts">
const props = defineProps<{
    item: Movie
}>()
</script>


<template>
    <CardBase :imgPath="props.item.poster_path">
        <div class="t line-clamp-2">{{ props.item.title }}</div>
    </CardBase>
</template>