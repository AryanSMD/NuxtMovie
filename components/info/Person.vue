<script setup lang="ts">
const props = defineProps<{
    person: Person
}>()

const info = [
    { key: 'Job', value: props.person.known_for_department },
    { key: 'Place of birth', value: props.person.place_of_birth },
    { key: 'Birthday', value: props.person.birthday },
]
</script>


<template>
    <InfoBase :object="info">
        <template #description>{{ props.person.biography || 'No Biography ...' }}</template>
    </InfoBase>
</template>