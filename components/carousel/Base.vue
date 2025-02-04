<template>
    <div class="w-full p-3 overflow-x-auto">
        <div class="w-full flex items-center justify-between sticky top-0 left-0 z-[1]">
            <slot name="title" />
            <slot name="button" />
        </div>
        <div class="w-max flex gap-4 scroll-smooth">
            <slot />
        </div>
    </div>
</template>