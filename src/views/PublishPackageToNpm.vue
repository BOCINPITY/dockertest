<template>
    <div>
        <h2>发布插件到npm</h2>
        <div v-resize="test" id="resize">
        </div>
    </div>
</template>

<script setup lang="ts">
const test = (data:DOMRectReadOnly) =>{
    console.log(data)
}
</script>

<style scoped>
    #resize {
        border: 1px solid black;
        width: 500px;
        height: 500px;
        resize: both;
        overflow: hidden;
    }
</style>