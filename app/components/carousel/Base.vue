<script setup lang="ts">
const scrollEl = ref<HTMLDivElement>()

function scrollLeft() {
  scrollEl.value?.scrollTo({
    left: 0,
    behavior: 'smooth',
  })
}
function scrollRight() {
  scrollEl.value?.scrollTo({
    left: scrollEl.value?.scrollWidth - scrollEl.value?.clientWidth,
    behavior: 'smooth',
  })
}
</script>


<template>
    <div class="w-full overflow-x-auto overflow-y-hidden">
        <div class="w-full flex items-center justify-between sticky top-0 left-0 z-[1] px-3 py-2 text-[1rem] md:text-[1.5rem] lg:text-[1.7rem]">
            <slot name="title" />
            <slot name="button" />
        </div>
        <div class="relative">
            <div class="overflow-y-hidden" ref="scrollEl">
                <div class="w-max flex gap-4 scroll-smooth px-3 mb-[5px]">
                    <slot />
                </div>
            </div>
            <ButtonCaret
                :caret="'left'"
                :func="scrollLeft"
            />
            <ButtonCaret
                :caret="'right'"
                :func="scrollRight"
            />
        </div>
    </div>
</template>