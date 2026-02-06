<script setup lang="ts">
import { MapPin, Clock, Calendar, Church, Wine, Music } from 'lucide-vue-next'

const schedule = [
  { time: '4:00 PM', event: 'Wedding Ceremony', icon: Church, detail: 'The Royal Gardens' },
  { time: '5:30 PM', event: 'Cocktail Hour', icon: Wine, detail: 'Sun Terrace' },
  { time: '7:00 PM', event: 'Dinner & Dancing', icon: Music, detail: 'Grand Ballroom' },
]
</script>

<template>
  <section id="details" class="section-padding bg-wedding-blush-light">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 reveal">
        <h2 class="text-4xl md:text-5xl font-serif text-slate-800 mb-4">Wedding Details</h2>
        <p class="text-slate-600 font-sans tracking-widest uppercase text-sm">When & Where</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Venue Details -->
        <div class="glass p-8 md:p-12 rounded-3xl shadow-sm reveal">
          <div class="flex items-start gap-6 mb-10">
            <div class="bg-wedding-gold/10 p-4 rounded-2xl">
              <MapPin class="w-8 h-8 text-wedding-gold" />
            </div>
            <div>
              <h3 class="text-2xl font-serif mb-2">The Venue</h3>
              <p class="text-slate-600 leading-relaxed">
                Villa del Balbianello<br />
                Via Comoedia, 5<br />
                22016 Tremezzina CO, Italy
              </p>
            </div>
          </div>

          <!-- Styled Google Map -->
          <div
            class="w-full h-64 rounded-2xl overflow-hidden shadow-inner grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.6321634582695!2d9.20173427685655!3d45.96191630018597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478417c800000001%3A0xb363b5e4a7732d9!2sVilla%20del%20Balbianello!5e0!3m2!1sen!2sit!4v1715689123456!5m2!1sen!2sit"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <!-- Schedule -->
        <div class="space-y-6 reveal">
          <h3 class="text-3xl font-serif mb-8 px-2">The Schedule</h3>
          <div
            v-for="(item, index) in schedule"
            :key="index"
            class="flex items-center gap-6 p-6 rounded-2xl hover:bg-white/50 transition-colors group"
          >
            <div class="flex flex-col items-center min-w-[80px]">
              <span class="text-wedding-gold font-bold text-lg">{{ item.time }}</span>
            </div>
            <div class="w-px h-12 bg-wedding-gold/20"></div>
            <div
              class="bg-wedding-gold/5 p-3 rounded-full group-hover:scale-110 transition-transform"
            >
              <component :is="item.icon" class="w-6 h-6 text-wedding-gold" />
            </div>
            <div>
              <h4 class="text-xl font-serif text-slate-800">{{ item.event }}</h4>
              <p class="text-sm text-slate-500 uppercase tracking-wider">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
