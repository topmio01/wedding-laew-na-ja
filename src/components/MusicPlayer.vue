<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Music, Music2, Volume2, VolumeX } from 'lucide-vue-next'

const isPlaying = ref(false)
const audioRef = ref<HTMLAudioElement | null>(null)

const togglePlay = () => {
  if (!audioRef.value) return

  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play().catch((error) => {
      console.log('Autoplay was prevented by browser:', error)
    })
  }
  isPlaying.value = !isPlaying.value
}

onMounted(() => {
  // Try to autoplay, but browsers usually block it
  if (audioRef.value) {
    audioRef.value.volume = 0.3
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

      <Volume2 v-if="isPlaying" class="w-6 h-6 text-wedding-gold" />
      <VolumeX v-else class="w-6 h-6 text-slate-400" />

      <!-- Tooltip -->
      <span
        class="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-md text-xs font-medium text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm"
      >
        {{ isPlaying ? 'Mute Music' : 'Play Music' }}
      </span>
    </button>

    <audio
      ref="audioRef"
      loop
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    ></audio>
  </div>
</template>
