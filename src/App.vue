<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import HeroSection from './components/HeroSection.vue'
// import OurStory from './components/OurStory.vue'
import WeddingDetails from './components/WeddingDetails.vue'
import Gallery from './components/Gallery.vue'
import RSVPForm from './components/RSVPForm.vue'
import AppFooter from './components/AppFooter.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import ContentTime from './components/ContentTime.vue'
import { Menu, X } from 'lucide-vue-next'
import c1Url from './components/img/C1.jpg'
import c2Url from './components/img/C2.jpg'
import backgroundUrl from './components/img/bg4.jpg'
import backgroundUrlMobile from './components/img/bg-mobile2.jpg'


const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isMobile = ref(false)
const hasEntered = ref(false)

const currentBackgroundUrl = computed(() =>
  isMobile.value ? backgroundUrlMobile : backgroundUrl,
)

let mobileMql: MediaQueryList | null = null
let onMobileMqlChange: ((event: MediaQueryListEvent) => void) | null = null
let revealObserver: IntersectionObserver | null = null

const navLinks = [
  // { name: 'เรื่องราวของเรา', href: '#our-story' },
  { name: 'รายละเอียดงาน', href: '#details' },
  { name: 'แกลเลอรี', href: '#gallery' },
  { name: 'ตอบรับคำเชิญ', href: '#rsvp' },
]

const enterSite = () => {
  hasEntered.value = true
  window.localStorage.setItem('hasEntered', '1')
  document.body.style.overflow = ''
}

const showIntro = () => {
  window.localStorage.removeItem('hasEntered')
  hasEntered.value = false
  isMenuOpen.value = false
  if (revealObserver) {
    revealObserver.disconnect()
    revealObserver = null
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
  document.body.style.overflow = 'hidden'
}

const setupRevealObserver = () => {
  if (revealObserver) {
    revealObserver.disconnect()
    revealObserver = null
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll('.reveal').forEach((el) => revealObserver?.observe(el))
}

onMounted(() => {
  hasEntered.value = window.localStorage.getItem('hasEntered') === '1'
  if (!hasEntered.value) {
    document.body.style.overflow = 'hidden'
  }

  mobileMql = window.matchMedia('(max-width: 1024px)')
  isMobile.value = mobileMql.matches

  onMobileMqlChange = (event: MediaQueryListEvent) => {
    isMobile.value = event.matches
  }
  mobileMql.addEventListener('change', onMobileMqlChange)

  if (hasEntered.value) {
    setupRevealObserver()
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})

watch(
  hasEntered,
  async (entered) => {
    if (entered) {
      await nextTick()
      setupRevealObserver()
    }
  },
  { flush: 'post' },
)

onUnmounted(() => {
  if (mobileMql && onMobileMqlChange) {
    mobileMql.removeEventListener('change', onMobileMqlChange)
  }

  if (revealObserver) {
    revealObserver.disconnect()
    revealObserver = null
  }

  document.body.style.overflow = ''
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
    <div
      v-if="!hasEntered"
      class="fixed inset-0 z-[200] flex items-center justify-center px-6"
    >
      <div class="absolute inset-0 bg-black/35 backdrop-blur-sm"></div>
      <div
        class="relative w-full max-w-md rounded-[2.5rem] glass shadow-2xl px-8 py-10 text-center"
      >
        <div class="text-sm uppercase tracking-[0.5em] text-wedding-ink/70 mb-4">
          Wedding Invitation
        </div>
        <div class="text-4xl font-romantic text-wedding-gold italic mb-2">
          Tanaporn & Bundit
        </div>
        <div class="text-wedding-ink/70 text-sm mb-8">แตะเพื่อเปิดการ์ดเชิญ</div>
        <button type="button" class="btn-gold w-full" @click="enterSite">เปิดการ์ด</button>
      </div>
    </div>

    <!-- Navigation -->
    <nav
      v-if="hasEntered"
      class="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4"
      :class="
        isScrolled
          ? 'bg-wedding-champagne/90 backdrop-blur-lg shadow-sm py-3'
          : 'bg-transparent'
      "
    >
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" class="text-2xl font-romantic text-wedding-gold font-bold tracking-tighter"
          >P & T</a
        >

        <!-- Desktop Nav -->
        <div class="hidden md:flex gap-10 items-center">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-sm uppercase tracking-[0.2em] font-medium transition-colors hover:text-wedding-gold"
            :class="isScrolled ? 'text-wedding-ink/80' : 'text-wedding-ink/90'"
          >
            {{ link.name }}
          </a>

          <button
            type="button"
            @click="showIntro"
            class="text-sm uppercase tracking-[0.2em] font-medium transition-colors hover:text-wedding-gold"
            :class="isScrolled ? 'text-wedding-ink/80' : 'text-wedding-ink/90'"
          >
            Intro
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-full transition-colors"
          :class="isScrolled ? 'text-wedding-ink' : 'text-wedding-ink'"
        >
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile Nav Overlay -->
    <Transition name="fade">
      <div
        v-if="hasEntered && isMenuOpen"
        class="fixed inset-0 z-[90] bg-wedding-champagne flex flex-col items-center justify-center gap-8 md:hidden"
      >
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click="toggleMenu"
          class="text-2xl font-serif text-wedding-ink tracking-widest hover:text-wedding-gold transition-colors"
        >
          {{ link.name }}
        </a>

        <button
          type="button"
          @click="showIntro"
          class="text-2xl font-serif text-wedding-ink tracking-widest hover:text-wedding-gold transition-colors"
        >
          Intro
        </button>
      </div>
    </Transition>

    <!-- Main Content -->
    <main v-if="hasEntered">
      <HeroSection />
      <ContentTime />
      <!-- <OurStory /> -->
      <section class="section-padding bg-transparent">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid gap-6 md:grid-cols-2">
            <div class="glass rounded-3xl overflow-hidden shadow-xl reveal">
              <img :src="c1Url" alt="C1" class="w-full h-auto object-cover" loading="lazy" />
            </div>
            <div class="glass rounded-3xl overflow-hidden shadow-xl reveal">
              <img :src="c2Url" alt="C2" class="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <WeddingDetails />
      <Gallery />
      <RSVPForm />
    </main>

    <AppFooter v-if="hasEntered" />

    <!-- Background Sparkles (CSS only) -->
    <div v-if="hasEntered" class="fixed inset-0 pointer-events-none z-50">
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

    <MusicPlayer v-if="hasEntered" />
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
