<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
import icon1Url from './img/1.png'
import icon2Url from './img/2.png'
import icon3Url from './img/3.png'
import icon4Url from './img/4.png'

const schedule = [
  { time: '07:09 น.', event: 'พิธีสงฆ์', iconUrl: icon1Url },
  { time: '08:29 น.', event: 'พิธีแห่ขันหมาก', iconUrl: icon2Url },
  { time: '09:39 น.', event: 'พิธีรับไหว้ พิธีหลั่งน้ำพระพุทธมนต์', iconUrl: icon3Url },
  { time: '11:30 น.', event: 'งานเลี้ยงฉลองมงคลสมรส', iconUrl: icon4Url },
]

const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=13.9812176,100.6849677'
</script>

<template>
  <!-- <section id="details" class="section-padding bg-wedding-ivory"> -->
  <section id="details" class="section-padding bg-transparent">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 reveal">
        <h2 class="text-4xl md:text-5xl font-serif text-wedding-ink mb-4">รายละเอียดงาน</h2>
        <p class="text-wedding-ink/70 font-sans tracking-widest uppercase text-sm">วันเวลาและสถานที่</p>
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
              <p class="text-wedding-ink/70 leading-relaxed">
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
              class="bg-wedding-gold/5 p-4 rounded-full group-hover:scale-110 transition-transform"
            >
              <img :src="item.iconUrl" alt="" class="w-9 h-9" loading="lazy" />
            </div>
            <div>
              <h4 class="text-xl font-serif text-wedding-ink">{{ item.event }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
