<template>
    <div>
        <el-button @click="handleRandomClick" style="margin-bottom: 10px;">random</el-button>
        <TransitionGroup move-class="mv-class" tag="div" class="wrap">
            <div :key="item.id" v-for="(item) in list" class="item">
                {{ item.number }}
            </div>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import _ from 'lodash'
    const list = ref([...Array(81)].map((_, index) => {
        return {
            id: index,
            number: (index % 9) + 1
        }
    }))
    const handleRandomClick = () => {
        list.value = _.shuffle(list.value)
    }
</script>

<style scoped lang="scss">
    .wrap {
        display: flex;
        flex-wrap: wrap;
        width: calc(25px * 10 + 9px);

        .item {
            width: 25px;
            height: 25px;
            border: 1px solid #CCC;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .mv-class {
        transition: all 1s ease-in-out;
    }
</style>