<script setup lang="ts">
    interface Tree {
        name: string,
        checked: boolean,
        children?: Tree[]
    }
    defineProps<{
        data?: Tree[]
    }>()
    const clickTap = (item: Tree, event: Event) => {
        console.log(item, event.target);
    }
</script>

<template>
    <div @click.stop="clickTap(item, $event)" class="tree" v-for="item in data" :key="item.name">
        <input type="checkbox" v-model="item.checked"><span>{{ item.name }}</span>
        <TreeComp :data="item.children" />
    </div>
</template>

<style scoped>
    .tree {
        margin-left: 10px;
    }
</style>