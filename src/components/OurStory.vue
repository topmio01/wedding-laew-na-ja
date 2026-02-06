<script setup lang="ts">
import { onMounted } from 'vue'
import { Heart } from 'lucide-vue-next'

const stories = [
  {
    date: 'สิงหาคม 2018',
    title: 'เราเจอกันได้อย่างไร',
    description:
      'เราได้พบกันโดยบังเอิญที่ร้านหนังสือเล็ก ๆ แสนอบอุ่นในปารีส เขากำลังมองหาหนังสือของเฮมิงเวย์ ส่วนเธอกำลังถือเล่มสุดท้ายอยู่พอดี',
    image:
      'https://images.unsplash.com/photo-1516589174184-c685266d4ca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    date: 'ธันวาคม 2020',
    title: 'ทริปแรกด้วยกัน',
    description:
      'ออกเดินทางไปสัมผัสยอดเขาที่ปกคลุมด้วยหิมะของเทือกเขาแอลป์สวิส และตอนนั้นเองที่เรารู้ว่าความสัมพันธ์ครั้งนี้พิเศษกว่าที่เคย',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    date: 'มิถุนายน 2024',
    title: 'คำขอแต่งงาน',
    description:
      'ใต้ท้องฟ้าที่เต็มไปด้วยดาวบนชายหาดส่วนตัวที่ซานโตรินี น้ำตาแห่งความสุข และคำตอบที่ดังชัดว่า “ตกลง!”',
    image:
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
]

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
  <!-- <section id="our-story" class="section-padding bg-wedding-ivory"> -->
  <section id="our-story" class="section-padding bg-transparent">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-20 reveal">
        <Heart class="w-8 h-8 text-wedding-gold mx-auto mb-4" />
        <h2 class="text-4xl md:text-5xl font-serif text-slate-800 mb-4">เรื่องราวของเรา</h2>
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
