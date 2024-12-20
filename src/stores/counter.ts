import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref({ value: 0 })
  const doubleCount = computed(() => count.value.value * 2)
  function increment() {
    count.value.value++
  }
  const asyncIncrement = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
    count.value.value++
  }

  return { count, doubleCount, increment, asyncIncrement }
})
