<script setup lang="ts">
const props = defineProps<{
    item: Person
}>()
</script>


<template>
    <CardBase :imgPath="props.item.profile_path">
        <div class="line-clamp-1">{{ props.item.name }}</div>
        <div class="opacity-60 line-clamp-1">{{ props.item.character }}</div>
    </CardBase>
</template>