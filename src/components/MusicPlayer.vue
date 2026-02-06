<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Volume2, VolumeX } from 'lucide-vue-next'
import lifePartnerUrl from './music/lifePartner.mp3'

const isPlaying = ref(false)
const isMuted = ref(true)
const audioRef = ref<HTMLAudioElement | null>(null)

const togglePlay = () => {
  if (!audioRef.value) return

  if (audioRef.value.paused) {
    audioRef.value.muted = false
    isMuted.value = false
    audioRef.value.play().catch((error) => {
      console.log('เบราว์เซอร์ป้องกันการเล่นอัตโนมัติ:', error)
    })
    isPlaying.value = true
    return
  }

  isMuted.value = !isMuted.value
  audioRef.value.muted = isMuted.value
}

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.volume = 0.3
    audioRef.value.muted = true
    isMuted.value = true
    audioRef.value.play().then(
      () => {
        isPlaying.value = true
      },
      (error) => {
        console.log('เบราว์เซอร์ป้องกันการเล่นอัตโนมัติ:', error)
      },
    )

    const unmuteOnce = () => {
      if (!audioRef.value) return
      if (!audioRef.value.paused) {
        audioRef.value.muted = false
        isMuted.value = false
      }
      window.removeEventListener('pointerdown', unmuteOnce)
      window.removeEventListener('keydown', unmuteOnce)
      window.removeEventListener('touchstart', unmuteOnce)
    }

    window.addEventListener('pointerdown', unmuteOnce, { once: true })
    window.addEventListener('keydown', unmuteOnce, { once: true })
    window.addEventListener('touchstart', unmuteOnce, { once: true })
  }
})
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50">
    <button
      @click="togglePlay"
      class="glass p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group relative"
      :class="{ 'animate-pulse': isPlaying }"
    >
      <div v-if="isPlaying" class="absolute -top-1 -right-1 flex h-3 w-3">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-wedding-gold opacity-75"
        ></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-wedding-gold"></span>
      </div>

      <Volume2 v-if="!isMuted" class="w-6 h-6 text-wedding-gold" />
      <VolumeX v-else class="w-6 h-6 text-slate-400" />

      <!-- Tooltip -->
      <span
        class="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-md text-xs font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm"
      >
        {{ isMuted ? 'เล่นเพลง' : 'ปิดเสียงเพลง' }}
      </span>
    </button>

    <audio
      ref="audioRef"
      loop
      :src="lifePartnerUrl"
      playsinline
    ></audio>
  </div>
</template>
