<script setup lang="ts">

    interface DATA {
        name: string,
        value: "data1" | "data2" | "data3"
    }
    const data: DATA[] = [
        {
            name: "1",
            value: "data1"
        },
        {
            name: "2",
            value: "data2"
        },
        {
            name: "3",
            value: "data3"
        },
        {
            name: "4",
            value: "data1"
        }
    ]
</script>

<template>
    <div>
        <h2>插槽</h2>
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="main">
            <slot name="main" :data="data"></slot>
        </div>
        <div class="footer">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

    .main,
    .footer,
    .header {
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 18px;
    }

    .main {
        display: flex;
        flex-direction: column;
        height: 300px;
        background-color: #0077ff;
    }

    .footer {
        background-color: #00ff77;
        color: black;
    }

    .header {
        background-color: #ff6060;
    }
</style>