<script setup lang="ts">

</script>


<template>
    <div class="absolute top-0 right-0 brightness-[60%] flex gap-8 items-center animation">
        <NuxtImg src="background.jpg" class="min-h-[1000px] min-w-[2000px]" />
        <NuxtImg src="background.jpg" class="min-h-[1000px] min-w-[2000px]" />
    </div>
</template>


<style scoped>
.animation{
    animation: animate 90s infinite linear;
}
@keyframes animate {
    100% {
        transform: translateX(50%);
    }
}
</style>