<script setup lang="ts">
const props = defineProps<{
    caret: 'left'|'right',
    func: Function
}>()
</script>

<template>
    <button
        @click="props.func()"
        class="absolute bottom-0 h-[12px] w-5 flex justify-center 
            items-center bg-tertiary"
        :class="`${ props.caret }-0`"
    >
        <Icon :name="`fluent:caret-${ props.caret }-16-filled`" class="h-5 bg-secondary" />
    </button>
</template>