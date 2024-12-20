<template>
    <div class="box">
        <h4>EventBusTestChild1</h4>
        <p>
            <el-button @click="emit1">点击派发事件</el-button>
        </p>
        <h4>要传递的数据:</h4>
        <p>{{ data }}</p>
    </div>
</template>

<script setup lang="ts">
    import Bus from '@/utils';
    const data = {
        name: "小明",
        age: 18
    }
    const emit1 = () => {
        Bus.emit("on-click", data)
    }
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