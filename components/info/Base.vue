<script setup lang="ts">
const props = defineProps<{
    object: { key: string, value: string|number|undefined }[]
}>()
</script>


<template>
    <div class="w-full flex flex-col text-[1.2rem] md:px-5">
        <div class="text-justify mb-10">
            <slot name="description" />
        </div>
        <div class="w-full grid grid-cols-2 gap-3">
            <div 
                v-for="item in props.object"
                :key="item.key"
                class="w-full flex items-center gap-10 text-[1rem]"
            >
                <div class="font-medium w-[70px]">{{ item.key }}</div>
                <div class="opacity-70">{{ item.value }}</div>
            </div>
        </div>
    </div>
</template>