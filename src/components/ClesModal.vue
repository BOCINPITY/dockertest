<script setup lang="ts">
    import { ref, type Directive } from 'vue';
    const password = ref<string>('')
    const account = ref<string>('')
    const close = ref<boolean>(true)
    const props = defineProps<{
        dragable?: boolean | string
    }>()
    const vDrag: Directive<HTMLElement> = (el, binding) => {
        console.log(binding)
        if (props.dragable === true || props.dragable === 'true') {
            const firstChild = el.firstElementChild! as HTMLElement;
            firstChild.style.cursor = 'move'
            const mouseDown = (e: MouseEvent) => {
                const X = e.clientX - el.offsetLeft
                const Y = e.clientY - el.offsetTop
                const move = (e: MouseEvent) => {
                    el.style.left = e.clientX - X + 'px'
                    el.style.top = e.clientY - Y + 'px'
                }
                const mouseUp = () => {
                    document.removeEventListener("mousemove", move)
                }
                document.addEventListener("mousemove", move)
                document.addEventListener("mouseup", mouseUp)
            }

            firstChild.addEventListener("mousedown", mouseDown)
        }
    }
</script>

<template>
    <div v-drag class="container" v-if="close">
        <div class="header">
            <div>我是弹框</div>
            <div @click="close = false">X</div>
        </div>
        <div class="divided"></div>
        <div class="content">
            <el-input v-model="account" style="width: 240px" placeholder="account" />
            <el-input v-model="password" style="width: 240px" placeholder="password" />
        </div>
        <div class="footer">
            <button class="cles-btn--primary">确定</button>
            <button @click="close = false" class="cles-btn--default">取消</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    $border-r: 4px;

    .container {
        z-index: 1000;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        min-width: 150px;
        max-width: 300px;
        color: #F1F1F1;
        background-color: #000000;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        border-radius: $border-r;
    }

    .content {
        min-height: 200px;
        padding: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

    }

    :deep(.el-input__wrapper) {
        background-color: black;
    }

    :deep(.el-input__inner) {
        color: white;
    }

    .divided {
        height: 1px;
        background-color: #CCC;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & div {
            padding: 10px;
        }

        & div:last-child {
            cursor: pointer;
        }
    }


    .footer {
        display: flex;
        justify-content: end;

        button {
            padding: 4px 8px;
            margin: 8px;
            border: none;
            box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
            cursor: pointer;
            border-radius: $border-r;
        }
    }

    .cles-btn--default {
        background-color: white;
        color: black;
    }

    .cles-btn--primary {
        background-color: #0077FF;
        color: white;
    }

</style>