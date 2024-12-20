<template>
    <div>
        <h2>简易EventBus实现</h2>
        <EventBusTestChild1></EventBusTestChild1>
        <EventBusTestChild2></EventBusTestChild2>
    </div>
</template>
<script setup lang="ts">
    import EventBusTestChild1 from '@/components/EventBusTestChild1.vue';
    import EventBusTestChild2 from '@/components/EventBusTestChild2.vue';
</script>

<style scoped></style>