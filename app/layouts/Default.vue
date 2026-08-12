<script setup lang="ts">
</script>

<template>
    <div class="main">
        <NuxtLoadingIndicator />
        <Navbar />
        <div class="wrapper">
            <slot />            
        </div>
        <Footer />
    </div>
</template>


<style scoped></style>