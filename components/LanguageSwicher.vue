<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language  = computed({
    get: () => locale.value,
    set: (value) => {
        setLocale(value);
    }
})
</script>


<template>
    <select v-model="language" class="bg-transparent border-none outline-none cursor-pointer">
        <option    
            v-for="lang in locales" 
            :value="lang.code" 
            :key="lang.code"
        >
            {{ lang.name }}
        </option>
    </select>
</template>


<style scoped>
</style>