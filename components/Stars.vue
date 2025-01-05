<script setup lang="ts">
const props = defineProps<{
    vote: number
}>()

const filledStars = computed(() => {
    return Math.floor(props.vote / 2);
})
const voteAuditor = computed(() => {
    return (props.vote / 2) % 1;
})
const regularStars = computed(() => {
    return voteAuditor.value === 0 ? 
        5 - Math.floor(props.vote / 2) :
        4 - Math.floor(props.vote / 2);
})
</script>


<template>
    <div class="relative flex items-center text-primary">
        <Icon
            v-for="i in filledStars"
            name="fluent:star-16-filled"
            class="w-5 h-5 bg-primary"
        />
        <template v-if="voteAuditor !== 0">
            <Icon
                v-if="voteAuditor < .5"
                name="fluent:star-one-quarter-16-regular"
                class="w-5 h-5 bg-primary"
            />
            <Icon
                v-else-if="voteAuditor > .5"
                name="fluent:star-three-quarter-16-regular"
                class="w-5 h-5 bg-primary"
            />
            <Icon
                v-else="voteAuditor === .5"
                name="fluent:star-half-16-regular"
                class="w-5 h-5 bg-primary"
            />
        </template>
        <Icon 
            v-for="i in regularStars"
            name="fluent:star-16-regular" 
            class="w-5 h-5" 
        />
    </div>
</template>


<style scoped>
.test {
    -webkit-background-clip: text;
}
</style>