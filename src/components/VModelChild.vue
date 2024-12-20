<template>
    <div>
        <div class="box" v-if="flagValue">
            <div class="header">
                <h3>VModelChild</h3>
                <el-button @click="emit('update:flagValue', false)">close</el-button>
            </div>

            <div class="content">
                <span>content:</span>
                <input @input="change" type="text">
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        flagValue: boolean,
        textVal: string
    }>()
    const emit = defineEmits(['update:flagValue', 'update:textVal'])
    const change = (e: Event) => {
        const input = e.target as HTMLInputElement;
        emit('update:textVal',input.value)
    }
</script>

<style scoped>
    .box {
        display: flex;
        flex-direction: column;
        min-width: 300px;
        border: 1px #CCC solid;
        padding: 10px;
    }

    .header {
        width: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>