<script lang="ts" setup>
    import CompA from '@/components/CompA.vue';
    import CompB from '@/components/CompB.vue';
    import CompC from '@/components/CompC.vue';

    import { ref, shallowRef } from 'vue';
    type IComponent = typeof CompA | typeof CompB | typeof CompC
    interface ITabItem {
        name: string,
        value: IComponent
    }
    const components = [
        { name: 'componentA', value: CompA },
        { name: 'componentB', value: CompB },
        { name: 'componentC', value: CompC },
    ]
    const activeIndex = ref(0)
    const activeTab = shallowRef(CompA)
    const handleClickTabItem = (item: ITabItem, i: number) => {
        activeIndex.value = i
        activeTab.value = item.value
    }
</script>

<template>
    <div class="tabs">
        <div @click="handleClickTabItem(item, index)" :class="[activeIndex === index ? 'active' : '']" class="tab-item"
            v-for="(item, index) in components" :key="item.name">
            {{ item.name }}
        </div>

    </div>
    <component :is="activeTab" />
</template>

<style scoped lang="scss">
    .tabs {
        display: flex;
    }

    .tab-item {
        border: 1px #CCC solid;
        padding: 10px;
        border-left: none;
        cursor: pointer;

        &:first-child {
            border-left: 1px #CCC solid;
        }

        &:hover {
            transition: all .3s ease-in;
            box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.3);
        }
    }

    .active {
        transition: all .5s ease-in;
        background-color: #0077ff;
        color: white;
    }

</style>