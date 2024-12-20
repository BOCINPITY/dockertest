<template>
    <div class="container">
        <div  class="image-item" v-for="item in imageList" :key="item.id">
            <img width="360" height="500" v-lazy="item" :alt="item.desc">
        </div>
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios';
    import { onBeforeMount, ref, type Directive } from 'vue';
    interface Image {
        /**
         * 类别，分组
         */
        category: string;
        /**
         * 图片描述
         */
        desc: string;
        /**
         * ID 编号
         */
        id: string;
        src: string;
    }
    interface DATA {
        list: Image[];
        page: string;
        size: string;
    }
    interface BASERESPONSE {
        msg: string,
        code: number,
        data: DATA
    }
    const imageList = ref<Image[]>([])
    onBeforeMount(async () => {
        const res = await axios.get<BASERESPONSE>("http://127.0.0.1:4523/m1/4467012-4113280-default/api/mock/randomImageList?page=1&size=10")
        imageList.value = res.data.data.list
    })
    const vLazy: Directive<HTMLImageElement, Image> = async (el, binding) => {
        const span = await import('../assets/loading.gif')
        el.src = span.default
        const observer = new IntersectionObserver((enr) => {
            if (enr[0].intersectionRatio > 0) {
                el.src = binding.value.src
                observer.unobserve(el)
            }
        })
        observer.observe(el)
    }
</script>

<style scoped lang="scss"></style>