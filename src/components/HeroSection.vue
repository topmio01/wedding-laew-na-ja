<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import ofal2Url from '../assets/img/ofal2.png'
</script>

<template>
  <section
    class="relative min-h-screen w-full flex items-center justify-center overflow-hidden landscape:overflow-visible landscape:py-6"
  >
    <!-- Warm ambient blobs matching C1.jpg tones -->
    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div class="blob-amber absolute -top-32 -right-32 w-[500px] h-[500px] opacity-60"></div>
      <div class="blob-sage  absolute -bottom-32 -left-32  w-[400px] h-[400px] opacity-50"></div>
    </div>

    <!-- Vignette -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none"></div>

    <!-- Card -->
    <div class="relative z-10 w-full px-4 landscape:pt-6 animate-fade-in-up">
      <div class="mx-auto max-w-lg md:max-w-xl rounded-[2.5rem] px-8 py-10 md:px-14 md:py-14 text-center glass">

        <!-- Top ornament -->
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-10" style="background:linear-gradient(90deg,transparent,rgba(123,70,52,0.30))"></div>
          <span class="ornament-star text-base">✦</span>
          <div class="h-px w-10" style="background:linear-gradient(270deg,transparent,rgba(123,70,52,0.30))"></div>
        </div>

        <p class="label-caps mb-5">Wedding Invitation</p>

        <!-- Monogram logo -->
        <img
          :src="ofal2Url"
          class="mx-auto mb-6 w-[14rem] md:w-[18rem] h-auto opacity-90 drop-shadow-sm"
          alt="P & T monogram"
        />

        <!-- Names — terracotta from C1.jpg -->
        <h1 class="font-romantic italic leading-tight mb-0.5"
            style="font-size:clamp(2rem,6vw,3rem); color:#7B4634;">
          Tanaporn
        </h1>
        <div class="flex items-center justify-center gap-3 my-2">
          <div class="h-px w-8" style="background:rgba(123,70,52,0.20)"></div>
          <span class="font-sans text-sm" style="color:rgba(44,46,43,0.40)">&amp;</span>
          <div class="h-px w-8" style="background:rgba(123,70,52,0.20)"></div>
        </div>
        <h1 class="font-romantic italic leading-tight mb-6"
            style="font-size:clamp(2rem,6vw,3rem); color:#7B4634;">
          Bundit
        </h1>

        <!-- Date chip -->
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full"
             style="border:1px solid rgba(123,70,52,0.22); background:rgba(123,70,52,0.06);">
          <span class="label-caps" style="letter-spacing:0.30em;">2 สิงหาคม 2026</span>
        </div>

        <!-- Bottom ornament -->
        <div class="flex items-center justify-center gap-3 mt-6">
          <div class="h-px w-10" style="background:linear-gradient(90deg,transparent,rgba(123,70,52,0.18))"></div>
          <span class="font-sans text-xs" style="color:rgba(44,46,43,0.18)">♥</span>
          <div class="h-px w-10" style="background:linear-gradient(270deg,transparent,rgba(123,70,52,0.18))"></div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <a
      href="#time"
      class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-colors duration-300 group"
      style="color:rgba(44,46,43,0.55)"
    >
      <span style="font-size:0.6rem;letter-spacing:0.35em;text-transform:uppercase;">เลื่อนลง</span>
      <ChevronDown class="w-5 h-5 animate-bounce" />
    </a>
  </section>
</template>
