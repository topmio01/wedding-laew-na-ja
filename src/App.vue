<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
// import OurStory from './components/OurStory.vue'
import WeddingDetails from './components/WeddingDetails.vue'
import Gallery from './components/Gallery.vue'
import RSVPForm from './components/RSVPForm.vue'
import AppFooter from './components/AppFooter.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import ContentTime from './components/ContentTime.vue'
import { Menu, X } from 'lucide-vue-next'
import backgroundUrl from './components/img/bg2.jpg'
import backgroundUrlMobile from './components/img/bg-mobile.jpg'


const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isMobile = ref(false)

const currentBackgroundUrl = computed(() =>
  isMobile.value ? backgroundUrlMobile : backgroundUrl,
)

let mobileMql: MediaQueryList | null = null
let onMobileMqlChange: ((event: MediaQueryListEvent) => void) | null = null

const navLinks = [
  // { name: 'เรื่องราวของเรา', href: '#our-story' },
  { name: 'รายละเอียดงาน', href: '#details' },
  { name: 'แกลเลอรี', href: '#gallery' },
  { name: 'ตอบรับคำเชิญ', href: '#rsvp' },
]

onMounted(() => {
  mobileMql = window.matchMedia('(max-width: 1024px)')
  isMobile.value = mobileMql.matches

  onMobileMqlChange = (event: MediaQueryListEvent) => {
    isMobile.value = event.matches
  }
  mobileMql.addEventListener('change', onMobileMqlChange)

  // Scroll reveal logic
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})

onUnmounted(() => {
  if (mobileMql && onMobileMqlChange) {
    mobileMql.removeEventListener('change', onMobileMqlChange)
  }
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div
    class="min-h-screen bg-cover bg-center bg-fixed relative selection:bg-wedding-gold/30 selection:text-wedding-gold-dark"
    :style="{ backgroundImage: `url(${currentBackgroundUrl})` }"
  >
    <!-- Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4"
      :class="isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent'"
    >
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" class="text-2xl font-romantic text-wedding-gold font-bold tracking-tighter"
          >P & T</a
        >

        <!-- Desktop Nav -->
        <div class="hidden md:flex gap-10">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-sm uppercase tracking-[0.2em] font-medium transition-colors hover:text-wedding-gold"
            :class="isScrolled ? 'text-slate-600' : 'text-white'"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-full transition-colors"
          :class="isScrolled ? 'text-slate-800' : 'text-white'"
        >
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile Nav Overlay -->
    <Transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-[90] bg-white flex flex-col items-center justify-center gap-8 md:hidden"
      >
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click="toggleMenu"
          class="text-2xl font-serif text-slate-800 tracking-widest hover:text-wedding-gold transition-colors"
        >
          {{ link.name }}
        </a>
      </div>
    </Transition>

    <!-- Main Content -->
    <main>
      <HeroSection />
      <ContentTime />
      <!-- <OurStory /> -->
      <WeddingDetails />
      <Gallery />
      <RSVPForm />
    </main>

    <AppFooter />

    <!-- Background Sparkles (CSS only) -->
    <div class="fixed inset-0 pointer-events-none z-50">
      <div
        v-for="n in 20"
        :key="n"
        class="absolute w-1 h-1 bg-wedding-gold/40 rounded-full animate-sparkle"
        :style="{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        }"
      ></div>
    </div>

    <MusicPlayer />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
