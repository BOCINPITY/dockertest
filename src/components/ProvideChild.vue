<template>
    <div>
        <div class="box">
            <h4>ProvideChild</h4>
            <el-button @click="handleSwitchColorValue" type="primary" style="text-wrap: wrap;">点击修改当前颜色值{{ color
                }}</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { inject, ref, type Ref } from 'vue';
    const color = inject<Ref<string>>('color2',ref('white'))
    const handleSwitchColorValue = () => {
        color!.value = 'yellow'
    }
</script>

<style scoped>
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 150px;
        height: 150px;
        border: 1px solid black;
        background-color: v-bind(color);
    }
</style>