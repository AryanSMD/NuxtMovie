<script setup lang="ts">
const props = defineProps<{
    icon: string,
    title: string
}>()
</script>


<template>
    <nuxt-link to="/movies" class="btn">
        <div class="w-full h-full bg-secondary rounded-md flex justify-center items-center gap-2 p-2">
            <Icon :name="props.icon" class="icon" />
            {{ props.title }}
        </div>
    </nuxt-link>
</template>


<style scoped>
.btn {
    @apply
    w-[200px] h-[80px] p-1 rounded-md relative cursor-pointer text-white 
    transition-all duration-300 hover:text-primary
}
.btn::before {
    content: '';
    background: conic-gradient(
        from var(--angle), black 50%, var(--primary)
    );
    animation: rotation 10s infinite linear;
    @apply
    absolute w-full h-full top-0 left-0 z-[-1]
}
.btn::after {
    content: '';
    background: conic-gradient(
        from var(--angle), black 50%, var(--primary)
    );
    animation: rotation 10s infinite linear;
    filter: blur(10px);
    @apply
    absolute w-full h-full top-0 left-0 z-[-1]
}
@property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: true;
}
@keyframes rotation {
    100% {
        --angle: 360deg;
    }
}
.icon {
    @apply
    w-12 h-12
}
</style>