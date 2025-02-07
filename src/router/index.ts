import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/HomePage.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/dynamictest', component: () => import('@/views/DynamicTest.vue') },
  { path: '/skeletontest', component: () => import('@/views/SkeletonTest.vue') },
  { path: '/testslot', component: () => import('@/views/TestSlot.vue') },
  { path: '/keepalivetest', component: () => import('@/views/KeepAliveTest.vue') },
  { path: '/transition', component: () => import('@/views/TransitionTest.vue') },
  { path: '/animationtest', component: () => import('@/views/AnimationTest.vue') },
  { path: '/provideinjecttest', component: () => import('@/views/ProvideInjectTest.vue') },
  { path: '/simpleeventbus', component: () => import('@/views/SimpleEventBus.vue') },
  { path: '/vmodeltest', component: () => import('@/views/VModelTest.vue') },
  { path: '/vdirectivetest', component: () => import('@/views/VDirectiveTest.vue') },
  { path: '/lazyloadtest', component: () => import('@/views/LazyLoadTest.vue') },
  { path: '/publishpackage', component: () => import('@/views/PublishPackageToNpm.vue') },
  { path: '/vueplugintest', component: () => import('@/views/VuePluginTest.vue') },
  { path: '/hookstest', component: () => import('@/views/HooksTest.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
