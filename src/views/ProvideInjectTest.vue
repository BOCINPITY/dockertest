<template>
    <div>
        <h3>顶层组件提供的数据为</h3>
        <p class="p1">color1: {{ colorValue1 }} <span>&nbsp;</span></p>
        <p class="p2">color2: {{ colorValue2 }} <span>&nbsp;</span></p>
        <p>
            <el-button @click="colorValue2 = '#00FF77'" type="warning">reset</el-button>
        </p>

        <CompA>
            <template #main>
                <div>
                </div>
            </template>
        </CompA>
    </div>
</template>

<script setup lang="ts">
    import CompA from '@/components/CompA.vue';
    import { provide, ref } from 'vue';
    const colorValue1 = ref<string>('#0077FF')
    const colorValue2 = ref<string>('#00FF77')
    provide('color1', colorValue1);
    provide('color2', colorValue2)
</script>

<style scoped>
.p1{
    span{
        background-color: v-bind(colorValue1);
    }
}
.p2{
    span{
        background-color: v-bind(colorValue2);
    }
}
</style>