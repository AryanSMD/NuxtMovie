<script setup lang="ts">
const { t } = useI18n();
const props = defineProps<{
    object: { key: string, value: string|number|undefined }[]
}>()
</script>


<template>
    <div class="w-full flex flex-col text-[.9rem] md:text-[1rem] lg:text-[1.2rem] md:px-5">
        <div class="text-justify mb-10 whitespace-pre-wrap">
            <slot name="description" />
        </div>
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div 
                v-for="item in props.object"
                :key="item.key"
                class="w-full flex items-center gap-10"
            >
                <div class="font-medium w-[100px]">{{ t(item.key) }}</div>
                <div class="opacity-70">{{ item.value }}</div>
            </div>
        </div>
    </div>
</template>