<script setup lang="ts">
const props = defineProps<{
    person: Person
}>()
</script>


<template>
    <InfoBase :object="[{ key: '', value: '' }]">
        <template #description>{{ props.person.adult }}</template>
    </InfoBase>
</template>