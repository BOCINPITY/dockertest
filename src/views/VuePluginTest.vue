<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
instance?.proxy?.$clesLoading.show()
setTimeout(() => {
  instance?.proxy?.$clesLoading.hide()
}, 2000)
</script>

<template>
  <div>
    <h2>vue插件编写测试</h2>
    <h3>
      这是一个vue的插件
      通过app.use注入到应用当中,作用是能够在整个应用控制一个loading组件的显示与隐藏
    </h3>
  </div>
</template>

<style scoped></style>
