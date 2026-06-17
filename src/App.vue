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
import c1Url from './assets/img/C1.jpg'
import c2Url from './assets/img/C2.jpg'
import backgroundUrl from './assets/img/bg4.jpg'
import backgroundUrlMobile from './assets/img/bg-mobile2.jpg'


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
    class="min-h-screen bg-cover bg-center bg-fixed relative"
    style="--tw-selection-bg:rgba(123,70,52,0.25);"
    :style="{ backgroundImage: `url(${currentBackgroundUrl})` }"
  >
    <div
      v-if="!hasEntered"
      class="fixed inset-0 z-[200] flex items-center justify-center px-6"
    >
      <div class="absolute inset-0 backdrop-blur-sm" style="background:rgba(44,46,43,0.28);"></div>
      <div
        class="relative w-full max-w-sm rounded-[2.5rem] shadow-2xl px-8 py-10 text-center glass"
      >
        <!-- Amber blob — warm highlight from C1.jpg -->
        <div class="absolute -top-16 -right-16 w-48 h-48 blob-amber opacity-50 pointer-events-none"></div>

        <!-- Top ornament -->
        <div class="flex items-center justify-center gap-3 mb-5">
          <div class="h-px w-8" style="background:linear-gradient(90deg,transparent,rgba(123,70,52,0.28));"></div>
          <span class="ornament-star text-sm">✦</span>
          <div class="h-px w-8" style="background:linear-gradient(270deg,transparent,rgba(123,70,52,0.28));"></div>
        </div>

        <p class="label-caps mb-4">Wedding Invitation</p>

        <div class="font-romantic italic leading-tight mb-0.5"
             style="font-size:2.2rem; color:#7B4634;">Tanaporn</div>
        <div class="font-sans text-sm mb-0.5" style="color:rgba(44,46,43,0.35);">&amp;</div>
        <div class="font-romantic italic leading-tight mb-5"
             style="font-size:2.2rem; color:#7B4634;">Bundit</div>

        <p class="label-caps mb-8" style="letter-spacing:0.28em;">2 สิงหาคม 2026</p>

        <button type="button" class="btn-gold w-full text-sm" @click="enterSite">
          เปิดการ์ดเชิญ
        </button>

        <!-- Bottom ornament -->
        <div class="flex items-center justify-center gap-3 mt-6">
          <div class="h-px w-8" style="background:rgba(123,70,52,0.15);"></div>
          <span class="font-sans text-xs" style="color:rgba(44,46,43,0.18);">♥</span>
          <div class="h-px w-8" style="background:rgba(123,70,52,0.15);"></div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav
      v-if="hasEntered"
      class="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4"
      :class="isScrolled ? 'py-3' : ''"
      :style="isScrolled
        ? 'background:rgba(245,241,232,0.88); backdrop-filter:blur(20px); box-shadow:0 1px 20px rgba(123,70,52,0.08);'
        : 'background:transparent;'"
    >
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <!-- Logo — terracotta romantic script -->
        <a href="#"
           class="font-romantic italic font-bold tracking-tighter"
           style="font-size:1.6rem; color:#7B4634;">P &amp; T</a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex gap-10 items-center">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-sm uppercase font-medium transition-colors"
            style="letter-spacing:0.18em;"
            :style="isScrolled
              ? 'color:rgba(44,46,43,0.72)'
              : 'color:rgba(44,46,43,0.80)'"
          >
            {{ link.name }}
          </a>
          <button
            type="button"
            @click="showIntro"
            class="text-sm uppercase font-medium transition-colors"
            style="letter-spacing:0.18em;"
            :style="isScrolled ? 'color:rgba(44,46,43,0.72)' : 'color:rgba(44,46,43,0.80)'"
          >
            Intro
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-full transition-colors"
          style="color:#2C2E2B;"
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
        class="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-8 md:hidden"
        style="background:#F5F1E8;"
      >
        <!-- Sage botanical blob -->
        <div class="absolute bottom-0 left-0 w-64 h-64 blob-sage opacity-60 pointer-events-none"></div>

        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click="toggleMenu"
          class="text-2xl font-serif tracking-widest transition-colors"
          style="color:#2C2E2B;"
        >
          {{ link.name }}
        </a>
        <button
          type="button"
          @click="showIntro"
          class="text-2xl font-serif tracking-widest transition-colors"
          style="color:#2C2E2B;"
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
        <div class="max-w-5xl mx-auto px-4">
          <!-- Section heading -->
          <div class="text-center mb-12 reveal">
            <p class="label-caps mb-3">ธนภร &amp; บัณฑิต</p>
            <div class="ornament-divider max-w-xs mx-auto">
              <span class="font-romantic italic text-sm" style="color:rgba(123,70,52,0.45); flex-shrink:0;">Together</span>
            </div>
          </div>

          <!-- Couple photos — enhanced frame to match C1.jpg linen + terracotta -->
          <div class="grid gap-5 md:grid-cols-2 reveal">
            <div class="photo-frame group">
              <img
                :src="c1Url"
                alt="ธนภร และ บัณฑิต"
                class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                loading="lazy"
              />
              <!-- Peach warm overlay on hover — echoes skin tone from C1.jpg -->
              <div class="absolute inset-0 transition-colors duration-500 rounded-[1.75rem]"
                   style="background:rgba(250,225,205,0);"></div>
            </div>
            <div class="photo-frame group">
              <img
                :src="c2Url"
                alt="ธนภร และ บัณฑิต"
                class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div class="absolute inset-0 transition-colors duration-500 rounded-[1.75rem]"
                   style="background:rgba(250,225,205,0);"></div>
            </div>
          </div>

          <!-- Quote below photos — italic serif matches photo warmth -->
          <div class="text-center mt-10 reveal">
            <p class="font-romantic italic leading-relaxed"
               style="font-size:clamp(1.1rem,3vw,1.4rem); color:rgba(160,92,68,0.80);">
              "รักแท้ไม่ใช่การหาคนที่สมบูรณ์แบบ<br class="hidden md:block" />
              แต่คือการมองเห็นความสมบูรณ์แบบในคนที่คุณรัก"
            </p>
          </div>
        </div>
      </section>
      <WeddingDetails />
      <Gallery />
      <RSVPForm />
    </main>

    <AppFooter v-if="hasEntered" />

    <!-- Ambient sparkles — amber & sage from C1.jpg -->
    <div v-if="hasEntered" class="fixed inset-0 pointer-events-none z-50">
      <div
        v-for="n in 12"
        :key="'a'+n"
        class="absolute rounded-full animate-sparkle"
        :style="{
          width: '3px', height: '3px',
          background: n % 3 === 0 ? 'rgba(237,175,100,0.55)' : n % 3 === 1 ? 'rgba(143,166,88,0.45)' : 'rgba(250,225,205,0.60)',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2.5 + Math.random() * 3}s`,
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
