<template>
    <div>
        <h2>骨架屏与异步组件</h2>
        <Suspense>
            <component :is="SyncComp"></component>
            <template #fallback>
                <SkeletonComp />
            </template>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
    import SkeletonComp from '@/components/SkeletonComp.vue';
    import { defineAsyncComponent } from 'vue';

    const SyncComp = defineAsyncComponent(() => import('@/components/SyncComp.vue'))
</script>

<style scoped></style>