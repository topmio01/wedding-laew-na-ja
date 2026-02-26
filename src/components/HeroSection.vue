<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
// import CountdownTimer from './CountdownTimer.vue'
 import ofal2Url from './img/ofal2.png'

// const weddingDate = '2026-08-02T07:09:00'
</script>

<template>
  <section
    class="relative min-h-screen w-full flex items-center justify-center overflow-hidden landscape:overflow-visible landscape:py-6 animate-float"
  >
    <!-- Background Image with Parallax effect -->
    <div
      class="absolute inset-0 z-0 scale-110"
      style="
        /* background-image: url('/src/components/img/bg2.jpg'); */
        /* background-image: url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'); */
        background-size: cover;
        background-position: center;
      "
    >
    </div>
    <!-- Content -->
    <div class="relative z-10 w-full px-4 landscape:pt-6">
      <div
        class="mx-auto max-w-xl md:max-w-2xl rounded-[2.5rem] glass shadow-2xl px-8 py-10 md:px-14 md:py-14 text-center"
      >
        <img
          :src="ofal2Url"
          class="mx-auto mb-6 w-[18rem] md:w-[22rem] lg:w-[26rem] h-auto opacity-90"
        />
        <h1 class="text-6xl md:text-8xl lg:text-[9rem] text-wedding-ink font-serif mb-4 ">
          <span class="block italic text-4xl md:text-6xl mb-1 font-romantic text-wedding-gold-light"
            >Tanaporn & Bundit</span
          >
        </h1>
      </div>
    </div>
    <a
      href="#time"
      class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-wedding-ink/70 hover:text-wedding-ink transition-colors duration-300 group"
    >
      <span class="text-[10px] uppercase tracking-[0.3em]">เลื่อนลง</span>
      <ChevronDown class="w-6 h-6 animate-bounce" />
    </a>
  </section>
</template>

<style scoped>
/* .delay-300 {
  animation-delay: 0.3s;
}
.delay-500 {
  animation-delay: 0.5s;
} */
</style>
