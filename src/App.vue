<template>
  <el-container>
    <el-aside width="200px">
      <el-row>
        <el-menu :default-active="currentActiveIndex.toString()">
          <RouterLink :to="item.path" v-for="(item, index) in menus" :key="item.name">
            <el-menu-item :index="`${index + 1}`">
              <template #title>
                <span>{{ item.name }}</span>
              </template>
            </el-menu-item>
          </RouterLink>
        </el-menu>
      </el-row>
    </el-aside>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { routes } from './router'

const menus = routes.map((routeItem) => {
  return {
    name: routeItem.path.replace('/', '') === '' ? 'index' : routeItem.path.replace('/', ''),
    path: routeItem.path,
  }
})
const currentActiveIndex = ref<number>(1)
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
