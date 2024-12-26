<script setup lang="ts"></script>


<template>
    <div class="w-full h-screen relative flex justify-center items-center">
        <HomeBG />
        <div 
            class="flex flex-col justify-center items-center rounded-lg p-14 absolute bg-black bg-opacity-80
                backdrop-blur-[3px]"
        >
            <div class="text-[10rem] text-primary">
                {{ $t('welcome') }}
            </div>
        </div>
    </div>
</template>


<style scoped></style>