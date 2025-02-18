<script setup lang="ts">
const props = defineProps<{
    path: string,
    icon: string,
    title: string
}>()
</script>


<template>
    <nuxt-link :to="props.path" class="item" :title="props.title">
        <div class="icon menu-icon-size">
            <Icon :name="props.icon" class="w-full h-full" />            
        </div>
    </nuxt-link>
</template>


<style scoped>
.item {
    @apply
    w-full gap-[5px] flex items-center justify-center
    opacity-30 hover:opacity-100 transition-all duration-300
}
.link-active {
    filter: drop-shadow(0 0 15px var(--primary))
        drop-shadow(0 0 20px var(--primary));
    @apply
    text-primary opacity-100
}
.link-exact-active {
    filter: drop-shadow(0 0 15px var(--primary))
        drop-shadow(0 0 20px var(--primary));
    @apply
    text-primary opacity-100
}
</style>