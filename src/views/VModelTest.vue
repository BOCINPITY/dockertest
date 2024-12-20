<template>
    <div>
        <h1>vmodel测试</h1>
        <p>flah:{{ flag }}</p>
        <p>text:{{ textValue }}</p>
        <el-button style="margin-bottom: 10px;" @click="flag = !flag">open</el-button>
        <VModelChild v-model:flagValue="flag" v-model:textVal="textValue"></VModelChild>
    </div>
</template>

<script setup lang="ts">
    import VModelChild from '@/components/VModelChild.vue';
    import { ref } from 'vue';
    const flag = ref<boolean>(true)
    const textValue = ref<string>('')
</script>

<style scoped></style>