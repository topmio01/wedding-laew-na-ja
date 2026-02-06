<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import CountdownTimer from './CountdownTimer.vue'

const weddingDate = '2026-08-02T07:09:00'
</script>

<template>
  <section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
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
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <img
        src="/src/components/img/ofal2.png"
        alt="ลวดลายตกแต่ง"
        class="mx-auto mb-4 w-36 md:w-44 h-auto opacity-90"
      />
      <p
        class="text-white/90 text-sm md:text-base uppercase tracking-[0.5em] mb-6 animate-fade-in font-medium"
      >
        งานแต่งงานของ
      </p>

      <h1 class="text-6xl md:text-9xl text-white font-serif mb-8 animate-float">
        <span class="block italic text-3xl md:text-5xl mb-2 font-romantic text-wedding-gold-light"
          >Tanaporn</span
        >
        <span class="block">&</span>
        <span class="block italic text-3xl md:text-5xl mt-2 font-romantic text-wedding-gold-light"
          >Bundit</span
        >
      </h1>

      <div class="space-y-4 mb-12">
        <p
          class="text-white text-xl md:text-2xl font-serif tracking-widest animate-fade-in delay-300"
        >
          2 สิงหาคม 2026
        </p>
        <p
          class="text-white/80 text-sm md:text-base uppercase tracking-[0.3em] animate-fade-in delay-500"
        >
          เพกะลาว คลอง 4
        </p>
      </div>

      <div class="mt-8">
        <CountdownTimer :target-date="weddingDate" />
      </div>
    </div>

    <!-- Scroll Indicator -->
    <a
      href="#our-story"
      class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
    >
      <span class="text-[10px] uppercase tracking-[0.3em]">เลื่อนลง</span>
      <ChevronDown class="w-6 h-6 animate-bounce" />
    </a>
  </section>
</template>

<style scoped>
.delay-300 {
  animation-delay: 0.3s;
}
.delay-500 {
  animation-delay: 0.5s;
}
</style>
