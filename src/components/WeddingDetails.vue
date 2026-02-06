<script setup lang="ts">
import { MapPin, Church, Wine, Music } from 'lucide-vue-next'

const schedule = [
  { time: '16:00 น.', event: 'พิธีแต่งงาน', icon: Church, detail: 'สวนรอยัล' },
  { time: '17:30 น.', event: 'ค็อกเทล', icon: Wine, detail: 'ซันเทอเรซ' },
  { time: '19:00 น.', event: 'ดินเนอร์และแดนซ์', icon: Music, detail: 'ห้องบอลรูมใหญ่' },
]

const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=13.9812176,100.6849677'
</script>

<template>
  <!-- <section id="details" class="section-padding bg-wedding-ivory"> -->
  <section id="details" class="section-padding bg-transparent">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 reveal">
        <h2 class="text-4xl md:text-5xl font-serif text-slate-800 mb-4">รายละเอียดงาน</h2>
        <p class="text-slate-600 font-sans tracking-widest uppercase text-sm">วันเวลาและสถานที่</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Venue Details -->
        <div class="glass p-8 md:p-12 rounded-3xl shadow-sm reveal">
          <div class="flex items-start gap-6 mb-10">
            <div class="bg-wedding-gold/10 p-4 rounded-2xl">
              <MapPin class="w-8 h-8 text-wedding-gold" />
            </div>
            <div>
              <h3 class="text-2xl font-serif mb-2">สถานที่จัดงาน</h3>
              <p class="text-slate-600 leading-relaxed">
                ร้านเพกะลาว ลำลูกกา คลอง 4<br />
                70/24 ตำบล ลาดสวาย อำเภอลำลูกกา <br />
                ปทุมธานี 12120
              </p>
            </div>
          </div>

          <!-- Styled Google Map -->
          <div
            class="w-full h-64 rounded-2xl overflow-hidden shadow-inner opacity-100 transition-all duration-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4330.366497013683!2d100.6849677!3d13.9812176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7f428cb7812f%3A0x53df56b580405124!2z4Lij4LmJ4Liy4LiZ4LmA4Lie4LiB4Liw4Lil4Liy4LinIOC4peC4s-C4peC4ueC4geC4geC4siDguITguKXguK3guIcgNA!5e1!3m2!1sth!2sth!4v1769846731454!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>

          <div class="mt-6 flex justify-center">
            <a
              :href="directionsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-gold inline-flex items-center justify-center gap-2"
            >
              <MapPin class="w-4 h-4" />
              นำทางไปยังสถานที่
            </a>
          </div>
        </div>

        <!-- Schedule -->
        <div class="space-y-6 reveal">
          <h3 class="text-3xl font-serif mb-8 px-2">กำหนดการ</h3>
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
