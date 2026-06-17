<script setup lang="ts">
import CountdownTimer from './CountdownTimer.vue'

const weddingDate = '2026-08-02T07:09:00'
</script>

<template>
  <section
    id="time"
    class="relative min-h-screen w-full flex items-center justify-center overflow-hidden landscape:overflow-visible landscape:py-6"
  >
    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto landscape:pt-6">

      <!-- Olive sage botanical accent dot row (echoes botanicals in C1.jpg) -->
      <div class="flex items-center justify-center gap-2 mb-6 animate-fade-in">
        <span class="w-1 h-1 rounded-full inline-block" style="background:rgba(143,166,88,0.55)"></span>
        <span class="w-1.5 h-1.5 rounded-full inline-block" style="background:rgba(143,166,88,0.40)"></span>
        <span class="w-1 h-1 rounded-full inline-block" style="background:rgba(143,166,88,0.55)"></span>
      </div>

      <p class="label-caps mb-3 animate-fade-in" style="color:rgba(245,241,232,0.65);">
        นับถอยหลังสู่วันแห่งความสุข
      </p>

      <!-- Ornament line -->
      <div class="flex items-center justify-center gap-4 mb-8 animate-fade-in">
        <div class="h-px w-16" style="background:linear-gradient(90deg,transparent,rgba(255,255,255,0.28))"></div>
        <span style="color:rgba(237,175,100,0.70); font-size:0.7rem;">✦</span>
        <div class="h-px w-16" style="background:linear-gradient(270deg,transparent,rgba(255,255,255,0.28))"></div>
      </div>

      <!-- Date + Venue — amber highlight echoes C1.jpg gold tones -->
      <div class="space-y-2 mb-10 landscape:space-y-1 landscape:mb-6 animate-fade-in-up">
        <p class="font-romantic italic" style="font-size:clamp(1.6rem,5vw,2.4rem); color:rgba(237,175,100,0.92);">
          2 สิงหาคม 2026
        </p>
        <p class="font-sans uppercase" style="font-size:0.75rem; letter-spacing:0.30em; color:rgba(245,241,232,0.65);">
          ร้านเพกะลาว &bull; ลำลูกกา คลอง&nbsp;4
        </p>
      </div>

      <!-- Countdown -->
      <CountdownTimer :target-date="weddingDate" />

      <!-- Bottom leaf accent -->
      <div class="flex items-center justify-center gap-3 mt-10 animate-fade-in">
        <div class="h-px w-10" style="background:rgba(255,255,255,0.18)"></div>
        <span style="color:rgba(143,166,88,0.50); font-size:0.6rem;">♥</span>
        <div class="h-px w-10" style="background:rgba(255,255,255,0.18)"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.2s ease-out both;
}
.animate-fade-in-up {
  animation: fadeInUp 1.2s ease-out 0.2s both;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}
</style>
