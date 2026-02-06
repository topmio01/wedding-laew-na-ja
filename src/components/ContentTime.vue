<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import CountdownTimer from './CountdownTimer.vue'

const weddingDate = '2026-08-02T07:09:00'
</script>

<template>
  <section id="time"
    class="relative min-h-screen w-full flex items-center justify-center overflow-hidden landscape:overflow-visible landscape:py-6"
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
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto landscape:pt-6">
      <div class="space-y-4 mb-12 landscape:space-y-2 landscape:mb-6">
        <p
          class="text-white text-2xl md:text-3xl font-serif tracking-widest animate-fade-in delay-300"
        >
          2 สิงหาคม 2026
        </p>
        <p
          class="text-white/80 text-base md:text-lg uppercase tracking-[0.3em] animate-fade-in delay-500"
        >
          เพกะลาว คลอง 4
        </p>
      </div>

      <div class="mt-8">
        <CountdownTimer :target-date="weddingDate" />
      </div>
    </div>


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
