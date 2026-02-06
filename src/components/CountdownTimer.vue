<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  targetDate: string
}>()

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timer: number

const pad2 = (value: number) => String(value).padStart(2, '0')

const displayValue = (unit: string, value: number) => {
  if (unit === 'วัน') return String(value)
  return pad2(value)
}

const updateCountdown = () => {
  const now = new Date().getTime()
  const target = new Date(props.targetDate).getTime()
  const difference = target - now

  if (difference > 0) {
    days.value = Math.floor(difference / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((difference % (1000 * 60)) / 1000)
  }
}

onMounted(() => {
  updateCountdown()
  timer = window.setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="flex gap-4 md:gap-8 justify-center items-center">
    <div
      v-for="(value, unit) in { 'วัน': days, 'ชั่วโมง': hours, 'นาที': minutes, 'วินาที': seconds }"
      :key="unit"
      class="flex flex-col items-center animate-fade-in-up"
      :style="{
        animationDelay: `${Object.keys({ 'วัน': days, 'ชั่วโมง': hours, 'นาที': minutes, 'วินาที': seconds }).indexOf(unit) * 0.1}s`,
      }"
    >
      <div
        class="glass w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl shadow-sm mb-2"
      >
        <span class="text-2xl md:text-4xl font-serif text-wedding-gold font-bold">{{ displayValue(unit, value) }}</span>
      </div>
      <span
        class="text-[10px] md:text-xs uppercase tracking-[0.2em] text-wedding-gold font-semibold"
        >{{ unit }}</span
      >
    </div>
  </div>
</template>
