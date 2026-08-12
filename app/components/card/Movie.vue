<script setup lang="ts">
const props = defineProps<{
    item: Movie
}>()
</script>


<template>
    <CardBase :imgPath="props.item.poster_path">
        <div class="line-clamp-2">{{ props.item.title || props.item.name }}</div>
    </CardBase>
</template>