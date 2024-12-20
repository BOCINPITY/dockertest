<template>
    <div class="box">
        <h4>EventBusTestChild2</h4>
        <p>兄弟组件收到的数据：</p>
        <p>{{ dataFromBrotherComp }}</p>
    </div>
</template>

<script setup lang="ts">
    import Bus from '@/utils';
    import { ref } from 'vue';
    const dataFromBrotherComp = ref()
    Bus.on("on-click", (data) => {
        dataFromBrotherComp.value = data
    })
</script>

<style scoped>
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 300px;
        height: 300px;
        border: 1px solid #CCC;
    }
</style>