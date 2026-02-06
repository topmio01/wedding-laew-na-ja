<script setup lang="ts">
defineOptions({ name: 'WeddingGallery' })

import { ref } from 'vue'
import { X, ZoomIn } from 'lucide-vue-next'

const images = [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465495910483-0d7d65603770?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1522673607200-1648832cee77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
]

const selectedImage = ref<string | null>(null)

const openLightbox = (url: string) => {
  selectedImage.value = url
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedImage.value = null
  document.body.style.overflow = 'auto'
}
</script>

<template>
   <!-- <section id="gallery" class="section-padding bg-wedding-ivory"> -->
  <section id="gallery" class="section-padding bg-transparent">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-16 reveal">
        <h2 class="text-4xl md:text-5xl font-serif text-slate-800 mb-4">แกลเลอรี</h2>
        <div class="w-16 h-1 bg-wedding-gold/20 mx-auto"></div>
      </div>

      <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm reveal"
          :style="{ transitionDelay: `${index * 0.1}s` }"
          @click="openLightbox(img)"
        >
          <img
            :src="img"
            alt="รูปภาพในแกลเลอรี"
            class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
          >
            <div
              class="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-500"
            >
              <ZoomIn class="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Transition name="fade">
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
        @click="closeLightbox"
      >
        <button
          @click="closeLightbox"
          class="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
        >
          <X class="w-8 h-8" />
        </button>

        <div class="relative max-w-5xl w-full h-full flex items-center justify-center">
          <img
            :src="selectedImage"
            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in"
            @click.stop
          />
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
