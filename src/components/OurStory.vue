<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Heart } from 'lucide-vue-next'

const stories = [
  {
    date: 'August 2018',
    title: 'How We Met',
    description:
      'A chance encounter at a cozy bookstore in Paris. He was looking for Hemingway, she was holding the last copy.',
    image:
      'https://images.unsplash.com/photo-1516589174184-c685266d4ca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    date: 'December 2020',
    title: 'First Trip Together',
    description:
      'Exploring the snowy peaks of the Swiss Alps. It was then we knew this was something special.',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    date: 'June 2024',
    title: 'The Proposal',
    description:
      'Under the starlit sky on a private beach in Santorini. Tears of joy and a resounding "Yes!"',
    image:
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
]

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    { threshold: 0.2 },
  )

  const reveals = document.querySelectorAll('.reveal')
  reveals.forEach((el) => observer.observe(el))
})
</script>

<template>
  <section id="our-story" class="section-padding bg-wedding-ivory">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-20 reveal">
        <Heart class="w-8 h-8 text-wedding-gold mx-auto mb-4" />
        <h2 class="text-4xl md:text-5xl font-serif text-slate-800 mb-4">Our Story</h2>
        <div class="w-20 h-1 bg-wedding-gold/30 mx-auto"></div>
      </div>

      <div class="relative">
        <!-- Center Line -->
        <div
          class="absolute left-1/2 -translate-x-1/2 h-full w-px bg-wedding-gold/20 hidden md:block"
        ></div>

        <div class="space-y-12 md:space-y-24">
          <div
            v-for="(item, index) in stories"
            :key="index"
            class="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 reveal"
          >
            <!-- Content -->
            <div
              class="w-full md:w-1/2"
              :class="
                index % 2 === 0 ? 'md:pr-16 md:text-right order-2 md:order-1' : 'md:pl-16 order-2'
              "
            >
              <span
                class="text-wedding-gold font-medium uppercase tracking-widest text-sm mb-2 block italic font-romantic"
                >{{ item.date }}</span
              >
              <h3 class="text-2xl font-serif text-slate-800 mb-3">{{ item.title }}</h3>
              <p class="text-slate-600 leading-relaxed">{{ item.description }}</p>
            </div>

            <!-- Point -->
            <div
              class="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-wedding-gold shadow-[0_0_0_4px_rgba(212,175,55,0.1)] z-10 hidden md:block"
            ></div>

            <!-- Image -->
            <div
              class="w-full md:w-1/2 flex justify-center"
              :class="index % 2 === 0 ? 'md:pl-16 order-1 md:order-2' : 'md:pr-16 order-1'"
            >
              <div class="relative group">
                <div
                  class="absolute -inset-2 bg-wedding-gold/10 rounded-2xl blur-xl group-hover:bg-wedding-gold/20 transition-all"
                ></div>
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="relative w-64 h-64 object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
