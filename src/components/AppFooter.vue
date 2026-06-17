<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <footer class="section-padding bg-transparent" style="border-top:1px solid rgba(123,70,52,0.10);">
    <div class="max-w-4xl mx-auto text-center">

      <!-- Botanical dot accent — olive sage from C1.jpg -->
      <div class="flex items-center justify-center gap-2 mb-8">
        <span class="w-1 h-1 rounded-full" style="background:rgba(143,166,88,0.45);display:inline-block;"></span>
        <span class="w-1.5 h-1.5 rounded-full" style="background:rgba(143,166,88,0.35);display:inline-block;"></span>
        <Heart class="w-4 h-4 mx-1 animate-pulse" style="color:rgba(123,70,52,0.50);" />
        <span class="w-1.5 h-1.5 rounded-full" style="background:rgba(143,166,88,0.35);display:inline-block;"></span>
        <span class="w-1 h-1 rounded-full" style="background:rgba(143,166,88,0.45);display:inline-block;"></span>
      </div>

      <div class="mb-10">
        <!-- Names — terracotta from couple outfits in C1.jpg -->
        <h2 class="font-romantic italic leading-tight mb-0"
            style="font-size:clamp(2.8rem,8vw,4rem); color:#7B4634;">ธนภร</h2>
        <div class="font-sans text-sm my-1" style="color:rgba(44,46,43,0.28);">&amp;</div>
        <h2 class="font-romantic italic leading-tight mb-2"
            style="font-size:clamp(2.8rem,8vw,4rem); color:#7B4634;">บัณฑิต</h2>
        <p class="font-serif text-sm italic" style="color:rgba(44,46,43,0.42);">(แป้ง) &amp; (ท๊อป)</p>

        <!-- Amber divider line — warm highlight from C1.jpg -->
        <div class="flex items-center justify-center gap-4 my-8">
          <div class="h-px w-16" style="background:linear-gradient(90deg,transparent,rgba(237,175,100,0.35))"></div>
          <Heart class="w-4 h-4 animate-pulse" style="color:rgba(237,175,100,0.60);" />
          <div class="h-px w-16" style="background:linear-gradient(270deg,transparent,rgba(237,175,100,0.35))"></div>
        </div>

        <!-- Quote -->
        <p class="font-serif italic max-w-lg mx-auto leading-relaxed"
           style="font-size:1.05rem; color:rgba(44,46,43,0.68);">
          "บนโลกใบนี้ไม่มีหัวใจดวงไหนที่เหมือนหัวใจของคุณ<br class="hidden md:block" />
          และบนโลกใบนี้ก็ไม่มีความรักไหนที่เหมือนความรักของเรา"
        </p>
      </div>

      <div class="space-y-3">
        <p class="label-caps">02 สิงหาคม 2569 &bull; ร้านเพกะลาว ลำลูกกา คลอง 4</p>
        <div class="pt-6" style="font-size:0.62rem; letter-spacing:0.4em; text-transform:uppercase; color:rgba(44,46,43,0.35);">
          สร้างด้วยความรัก &bull; 2026
        </div>
      </div>
    </div>
  </footer>
</template>
