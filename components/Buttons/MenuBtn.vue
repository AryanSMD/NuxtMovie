<script setup lang="ts">
const props = defineProps<{
    path: string,
    icon: string,
    title: string
}>()
</script>


<template>
    <nuxt-link :to="props.path" class="item">
        <div class="icon menu-icon-size">
            <Icon :name="props.icon" class="w-full h-full" />            
        </div>
        <div class="md:hidden">{{ props.title }}</div>
    </nuxt-link>
</template>


<style scoped>
.item {
    @apply
    w-full gap-[5px] flex justify-start items-center md:justify-center
}
.icon {
    @apply
    text-white opacity-50 hover:opacity-100 cursor-pointer 
    transition-all duration-300
}
.link-active .icon {
    filter: drop-shadow(0 0 5px var(--primary))
        drop-shadow(0 0 10px var(--primary));
}
.link-exact-active .icon {
    filter: drop-shadow(0 0 5px var(--primary))
        drop-shadow(0 0 10px var(--primary));
}
.link-exact-active .icon {
    @apply
    text-primary opacity-100
}
</style>