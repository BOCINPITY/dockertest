<template>
    <div class="container">
        <h2>keepAlive组件 <el-button type="success" @click="isVisiable = !isVisiable">切换组件</el-button></h2>
        <h2>案例中缓存的是表单组件</h2>
        <KeepAlive :include="['ClesForm']">
            <ClesForm v-if="isVisiable"></ClesForm>
            <ClesModal v-else></ClesModal>
        </KeepAlive>
    </div>
</template>

<script setup lang="ts">
    import ClesForm from '@/components/ClesForm.vue';
    import ClesModal from '@/components/ClesModal.vue';
    import { ref } from 'vue';
    const isVisiable = ref(true)
</script>

<style scoped></style>