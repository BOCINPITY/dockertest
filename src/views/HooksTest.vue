<template>
  <h2>通过hook实现获取图片的base64编码</h2>
  <div>
    <img id="img" src="../assets/logo.svg" height="300" alt="test" />
  </div>
  <div>
    <h4>base64编码</h4>
    <p style="word-wrap: break-word">{{ base64.baseUrl }}</p>
  </div>
</template>

<script setup lang="ts">
import useBase64 from '../hooks/index.ts'
import { ref } from 'vue'
const base64 = ref<string>('')
useBase64({
  el: '#img',
}).then((res) => {
  base64.value = res
})
</script>

<style scoped></style>
