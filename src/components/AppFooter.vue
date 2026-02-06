<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <footer class="section-padding bg-wedding-ivory border-t border-wedding-gold/10">
    <div class="max-w-4xl mx-auto text-center">
      <div class="mb-12">
        <h2 class="text-4xl md:text-5xl font-romantic text-wedding-gold mb-6 italic">
          Alexander & Isabella
        </h2>
        <div class="flex items-center justify-center gap-4 mb-8">
          <div class="h-px w-12 bg-wedding-gold/20"></div>
          <Heart class="w-5 h-5 text-wedding-gold animate-pulse" />
          <div class="h-px w-12 bg-wedding-gold/20"></div>
        </div>
        <p class="text-slate-600 font-serif text-lg italic max-w-lg mx-auto leading-relaxed">
          "In all the world, there is no heart for me like yours. In all the world, there is no love
          for you like mine."
        </p>
      </div>

      <div class="space-y-4">
        <p class="text-xs uppercase tracking-[0.5em] text-slate-400">
          June 14, 2025 • Lake Como, Italy
        </p>
        <div class="pt-8 text-[10px] uppercase tracking-widest text-slate-400">
          Made with Love &bull; 2025
        </div>
      </div>
    </div>
  </footer>
</template>
