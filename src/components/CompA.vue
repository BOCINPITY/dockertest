<script setup lang="ts">
    import { inject, ref, type Ref } from 'vue';
    import ProvideChild from './ProvideChild.vue';
    const color = inject<Ref<string>>('color1',ref('white'))

</script>

<template>
    <div class="com">
        COMA
        <div class="main">
            {{ color }}
            <slot name="main">
                默认插槽内容
            </slot>
        </div>
        <ProvideChild />
    </div>

</template>

<style scoped lang="scss">
    .com {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-width: 700px;
        border: 1px solid #CCC;
        min-height: 500px;
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        width: 200px;
        height: 200px;
        border: 1px dashed #CCC;
        background-color: v-bind(color);
    }
</style>