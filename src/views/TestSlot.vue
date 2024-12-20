<template>
    <div>
        <ClesSlot>
            <template #header>
                具象名插槽header
            </template>
            <template #main="{ data }">
                <h4>作用域插槽</h4>
                <h5>下面是子组件传递给父组件的数据</h5>
                <div v-for="item in data" :key="item.name">
                    {{ item.name }} —— {{ item.value }}
                </div>
            </template>
            <template #default>
                默认插槽
            </template>
        </ClesSlot>
    </div>
</template>

<script setup lang="ts">
    import ClesSlot from '@/components/ClesSlot.vue';
</script>

<style scoped></style>