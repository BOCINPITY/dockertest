<template>
    <div class="eg-container">
        <h2>基本用法</h2>
        <el-button @click="visiable1 = !visiable1">switch</el-button>
        <Transition name="fade">
            <div class="box" v-if="visiable1"></div>
        </Transition>
    </div>
    <div class="eg-container">
        <h2>配合animate.css使用</h2>
        <el-button @click="visiable2 = !visiable2">switch</el-button>
        <Transition enter-active-class="animate__animated animate__fadeInRight"
            leave-active-class="animate__animated animate__fadeOutLeft">
            <div class="box" v-if="visiable2"></div>
        </Transition>
    </div>
    <div class="eg-container">
        <h2>配合gsap使用</h2>
        <el-button @click="visiable3 = !visiable3">switch</el-button>
        <Transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
            <div id="tgsap" class="box" v-if="visiable3"></div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import 'animate.css';
    import gsap from 'gsap';
    const visiable1 = ref<boolean>(true)
    const visiable2 = ref<boolean>(true)
    const visiable3 = ref<boolean>(true)
    // 在元素被插入到 DOM 之前被调用
    // 用这个来设置元素的 "enter-from" 状态
    function onBeforeEnter(el: Element) {
        gsap.set(el, { width: 0, height: 0 })
    }
    // 在元素被插入到 DOM 之后的下一帧被调用
    // 用这个来开始进入动画
    function onEnter(el: Element, done: gsap.Callback) {
        gsap.to(el, { width: 300, height: 300, onComplete: done })
    }
    // 在离开过渡开始时调用
    // 用这个来开始离开动画
    function onLeave(el: Element, done: gsap.Callback) {
        gsap.to(el, { width: 0, height: 0, onComplete: done, duration:2 })
    }
</script>

<style scoped lang="scss">
    $bgc: #CCC;
    $br: 8px;
    $space: 10px;

    .eg-container {
        border: 1px solid $bgc;
        margin: $space 0;
        padding: $space;
        border-radius: $br;
        min-height: 50vh;
        overflow: hidden;
    }

    .box {
        height: 300px;
        width: 300px;
        background-color: $bgc;
        border-radius: $br;
        margin: $space 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.5s ease;
    }

    .fade-enter-from {
        width: 0;
        height: 0;
    }

    .fade-leave-to {
        width: 0;
        height: 0;
    }

</style>
