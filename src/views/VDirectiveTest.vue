<template>
    <div>
        <h1>VDirectiveTest</h1>
        <div class="btnbox">
            <el-button v-permission="'thisView:create'" type="primary">create</el-button>
            <el-button v-permission="'thisView:edit'" type="info">edit</el-button>
            <el-button v-permission="'thisView:delete'" type="danger">delete</el-button>
        </div>
        <div>
            <ClesModal dragable="true">

            </ClesModal>
        </div>
    </div>
</template>

<script setup lang="ts">
    import ClesModal from '@/components/ClesModal.vue';
    import type { Directive } from 'vue';
    const testUserPermisson: string[] = [
        '114514:thisView:create',
        '114514:thisView:edit',
        '114514:thisView:delete',
    ]
    const VPermission: Directive<HTMLElement, string> = (el, binding) => {
        if (!testUserPermisson.includes('114514' + ':' + binding.value)) {
            el.style.display = 'none'
        }
    }
</script>

<style scoped></style>