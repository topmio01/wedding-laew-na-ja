<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
import icon1Url from '../assets/img/1.png'
import icon2Url from '../assets/img/2.png'
import icon3Url from '../assets/img/3.png'
import icon4Url from '../assets/img/4.png'

const schedule = [
  { time: '07:09 น.', event: 'พิธีสงฆ์', iconUrl: icon1Url },
  { time: '08:29 น.', event: 'พิธีแห่ขันหมาก', iconUrl: icon2Url },
  { time: '09:39 น.', event: 'พิธีรับไหว้ พิธีหลั่งน้ำพระพุทธมนต์', iconUrl: icon3Url },
  { time: '11:30 น.', event: 'งานเลี้ยงฉลองมงคลสมรส', iconUrl: icon4Url },
]

const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=13.9812176,100.6849677'
</script>

<template>
  <section id="details" class="section-padding bg-transparent">
    <div class="max-w-6xl mx-auto">
      <!-- Section heading -->
      <div class="text-center mb-16 reveal">
        <p class="label-caps mb-3">วันเวลาและสถานที่</p>
        <h2 class="text-4xl md:text-5xl font-serif mb-4" style="color:#2C2E2B;">รายละเอียดงาน</h2>
        <div class="ornament-divider max-w-[160px] mx-auto">
          <span class="ornament-star text-sm">✦</span>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-10 items-start">
        <!-- Venue Details -->
        <div class="glass-warm p-8 md:p-10 rounded-3xl reveal">
          <div class="flex items-start gap-5 mb-8">
            <!-- Terracotta icon background from C1.jpg outfit tone -->
            <div class="flex-shrink-0 p-3.5 rounded-2xl"
                 style="background:rgba(123,70,52,0.10);">
              <MapPin class="w-6 h-6" style="color:#7B4634;" />
            </div>
            <div>
              <h3 class="text-xl font-serif mb-1.5" style="color:#2C2E2B;">สถานที่จัดงาน</h3>
              <p class="leading-relaxed text-sm" style="color:rgba(44,46,43,0.60);">
                ร้านเพกะลาว ลำลูกกา คลอง 4<br />
                70/24 ตำบล ลาดสวาย อำเภอลำลูกกา<br />
                ปทุมธานี 12120
              </p>
            </div>
          </div>

          <!-- Google Map -->
          <div class="w-full h-56 rounded-2xl overflow-hidden"
               style="box-shadow:inset 0 0 0 1px rgba(123,70,52,0.10);">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4330.366497013683!2d100.6849677!3d13.9812176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7f428cb7812f%3A0x53df56b580405124!2z4Lij4LmJ4Liy4LiZ4LmA4Lie4LiB4Liw4Lil4Liy4LinIOC4peC4s-C4peC4ueC4geC4geC4siDguITguKXguK3guIcgNA!5e1!3m2!1sth!2sth!4v1769846731454!5m2!1sth!2sth"
              width="100%" height="100%" style="border:0" allowfullscreen loading="lazy"
            ></iframe>
          </div>

          <div class="mt-6 flex justify-center">
            <a :href="directionsUrl" target="_blank" rel="noopener noreferrer"
               class="btn-gold inline-flex items-center justify-center gap-2 text-sm">
              <MapPin class="w-4 h-4" /> นำทางไปยังสถานที่
            </a>
          </div>
        </div>

        <!-- Schedule -->
        <div class="reveal">
          <h3 class="text-2xl font-serif mb-6" style="color:#2C2E2B;">กำหนดการ</h3>
          <div class="space-y-3">
            <div
              v-for="(item, index) in schedule"
              :key="index"
              class="schedule-card"
              :style="{ transitionDelay: `${index * 0.05}s` }"
            >
              <!-- Time — amber highlight -->
              <div class="flex flex-col items-center min-w-[68px]">
                <span class="font-semibold text-base leading-tight" style="color:#A05C44;">
                  {{ item.time.split(' ')[0] }}
                </span>
                <span class="text-xs" style="color:rgba(44,46,43,0.38);">
                  {{ item.time.split(' ')[1] }}
                </span>
              </div>
              <!-- Divider -->
              <div class="w-px h-10 flex-shrink-0" style="background:rgba(123,70,52,0.12);"></div>
              <!-- Icon — olive sage bg echoing botanicals -->
              <div class="flex-shrink-0 p-3 rounded-xl" style="background:rgba(143,166,88,0.12);">
                <img :src="item.iconUrl" alt="" class="w-8 h-8" loading="lazy" />
              </div>
              <!-- Event -->
              <h4 class="text-base font-serif leading-snug" style="color:#2C2E2B;">{{ item.event }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
