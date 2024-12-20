<script setup lang="ts">


</script>

<template>
    <div class="card">
        <div class="header">
            <div>标题</div>
            <div>副标题</div>
        </div>
        <section></section>
    </div>
</template>

<style scoped lang="scss">
    $border: #CCC;

    .card {
        border: 1px solid $border;
        width: 500px;
        .header {
            border-bottom: 1px solid $border;
            display: flex;
            justify-content: space-between;
        }

        section {
            min-height: 300px;
        }
    }
</style>