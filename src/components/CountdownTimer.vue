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
  <div class="flex gap-3 md:gap-6 justify-center items-end">
    <div
      v-for="(value, unit) in { 'วัน': days, 'ชั่วโมง': hours, 'นาที': minutes, 'วินาที': seconds }"
      :key="unit"
      class="flex flex-col items-center"
    >
      <!-- Number box — linen glass from C1.jpg backdrop -->
      <div class="countdown-box w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-2">
        <span class="font-serif font-bold tabular-nums drop-shadow-sm"
              style="font-size:clamp(1.4rem,4vw,2.4rem); color:rgba(255,255,255,0.92);">
          {{ displayValue(unit, value) }}
        </span>
      </div>
      <!-- Label -->
      <span class="font-sans uppercase"
            style="font-size:0.62rem; letter-spacing:0.28em; color:rgba(255,255,255,0.60);">
        {{ unit }}
      </span>
    </div>
  </div>
</template>
