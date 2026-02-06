<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <!-- <footer class="section-padding bg-wedding-ivory border-t border-wedding-gold/10"> -->
  <footer class="section-padding bg-transparent border-t border-wedding-gold/10">
    <div class="max-w-4xl mx-auto text-center">
      <div class="mb-12">
        <h2 class="text-4xl md:text-5xl font-romantic text-wedding-gold mb-6 italic">
          อเล็กซานเดอร์ & อิซาเบลลา
        </h2>
        <div class="flex items-center justify-center gap-4 mb-8">
          <div class="h-px w-12 bg-wedding-gold/20"></div>
          <Heart class="w-5 h-5 text-wedding-gold animate-pulse" />
          <div class="h-px w-12 bg-wedding-gold/20"></div>
        </div>
        <p class="text-slate-600 font-serif text-lg italic max-w-lg mx-auto leading-relaxed">
          "บนโลกใบนี้ไม่มีหัวใจดวงไหนที่เหมือนหัวใจของคุณ และบนโลกใบนี้ก็ไม่มีความรักไหนที่เหมือนความรักของเรา"
        </p>
      </div>

      <div class="space-y-4">
        <p class="text-xs uppercase tracking-[0.5em] text-slate-400">
          14 มิถุนายน 2025 • ทะเลสาบโคโม ประเทศอิตาลี
        </p>
        <div class="pt-8 text-[10px] uppercase tracking-widest text-slate-400">
          สร้างด้วยความรัก &bull; 2025
        </div>
      </div>
    </div>
  </footer>
</template>
