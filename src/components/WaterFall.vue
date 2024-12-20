<script setup lang="ts">
    import { onMounted, reactive } from 'vue';
    type BaseData = { id: number, height: number, background: string }
    type Data = BaseData & { left: number, top: number }
    const props = defineProps<{
        list: Array<BaseData>
    }>()
    const waterList = reactive<Data[]>([])
    const heightList: number[] = []
    const init = () => {
        const width = 130
        const clientW = document.body.clientWidth
        const column = Math.floor(clientW / width) //当前窗口能够展示的列的数量
        for (let index = 0; index < props.list.length; index++) {
            if (index < column) {
                const item: Data = {
                    ...props.list[index],
                    left: index * width,
                    top: 20
                }
                heightList.push(props.list[index].height)
                waterList.push(item)
            } else {
                let currentHeight = heightList[0]
                let minIndex = 0
                heightList.forEach((h, i) => {
                    if (h < currentHeight) {
                        currentHeight = h
                        minIndex = i
                    }
                })
                heightList[minIndex] = heightList[minIndex] + props.list[index].height + 20
                const item: Data = {
                    ...props.list[index],
                    top: currentHeight + 20,
                    left: minIndex * width
                }

                waterList.push(item)
            }
        }
    }

    onMounted(() => {
        init()
    })
</script>

<template>
    <div class="wrap">
        <div class="items"
            :style="{ height: item.height + 'px', background: item.background, left: item.left + 'px', top: item.top + 'px' }"
            v-for="item in waterList" :key="item.id">
        </div>
    </div>
</template>

<style scoped lang="scss">
    .wrap {
        position: relative;
    }

    .items {
        position: absolute;
        width: 120px;
    }
</style>