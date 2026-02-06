<script setup lang="ts">
import { ref } from 'vue'
import { Send, CheckCircle2 } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  attending: 'yes',
  guests: 1,
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000))
  isSubmitting.value = false
  isSubmitted.value = true
}
</script>

<template>
  <!-- <section id="rsvp" class="section-padding bg-wedding-blush-light relative overflow-hidden"> -->
  <section id="rsvp" class="section-padding bg-transparent relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute -top-24 -left-24 w-64 h-64 bg-wedding-gold/5 rounded-full blur-3xl"></div>
    <div
      class="absolute -bottom-24 -right-24 w-64 h-64 bg-wedding-blush-dark/10 rounded-full blur-3xl"
    ></div>

    <div class="max-w-2xl mx-auto px-4 relative z-10">
      <div class="text-center mb-12 reveal">
        <h2 class="text-4xl md:text-5xl font-serif text-slate-800 mb-4">คุณจะมาร่วมงานกับเรามั้ย?</h2>
        <p class="text-slate-600 font-sans tracking-widest uppercase text-sm">กรุณาตอบรับภายใน 14 พฤษภาคม 2025</p>
      </div>

      <div class="glass p-8 md:p-12 rounded-[2rem] shadow-xl reveal">
        <div v-if="!isSubmitted">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs uppercase tracking-widest text-slate-500 font-semibold ml-1"
                  >ชื่อ-นามสกุล</label
                >
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-6 py-4 bg-white/50 border border-wedding-gold/20 rounded-2xl focus:ring-2 focus:ring-wedding-gold/30 focus:border-wedding-gold outline-none transition-all"
                  placeholder="กรอกชื่อของคุณ"
                />
              </div>
              <div class="space-y-2">
                <label class="text-xs uppercase tracking-widest text-slate-500 font-semibold ml-1"
                  >อีเมล</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-6 py-4 bg-white/50 border border-wedding-gold/20 rounded-2xl focus:ring-2 focus:ring-wedding-gold/30 focus:border-wedding-gold outline-none transition-all"
                  placeholder="กรอกอีเมลของคุณ"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-xs uppercase tracking-widest text-slate-500 font-semibold ml-1"
                >คุณจะมาร่วมงานหรือไม่?</label
              >
              <div class="flex gap-4">
                <button
                  type="button"
                  @click="form.attending = 'yes'"
                  :class="
                    form.attending === 'yes'
                      ? 'bg-wedding-gold text-white'
                      : 'bg-white text-slate-600 hover:bg-wedding-gold/10'
                  "
                  class="flex-1 py-4 rounded-2xl border border-wedding-gold/20 font-medium transition-all"
                >
                  มาร่วมงาน
                </button>
                <button
                  type="button"
                  @click="form.attending = 'no'"
                  :class="
                    form.attending === 'no'
                      ? 'bg-wedding-gold text-white'
                      : 'bg-white text-slate-600 hover:bg-wedding-gold/10'
                  "
                  class="flex-1 py-4 rounded-2xl border border-wedding-gold/20 font-medium transition-all"
                >
                  ไม่สามารถมาร่วมงานได้
                </button>
              </div>
            </div>

            <div v-if="form.attending === 'yes'" class="space-y-2 animate-fade-in">
              <label class="text-xs uppercase tracking-widest text-slate-500 font-semibold ml-1"
                >จำนวนผู้ร่วมงาน</label
              >
              <select
                v-model="form.guests"
                class="w-full px-6 py-4 bg-white/50 border border-wedding-gold/20 rounded-2xl focus:ring-2 focus:ring-wedding-gold/30 focus:border-wedding-gold outline-none transition-all appearance-none"
              >
                <option v-for="n in 5" :key="n" :value="n">
                  {{ n }} ท่าน
                </option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="text-xs uppercase tracking-widest text-slate-500 font-semibold ml-1"
                >ข้อความถึงบ่าวสาว (ไม่บังคับ)</label
              >
              <textarea
                v-model="form.message"
                rows="4"
                class="w-full px-6 py-4 bg-white/50 border border-wedding-gold/20 rounded-2xl focus:ring-2 focus:ring-wedding-gold/30 focus:border-wedding-gold outline-none transition-all resize-none"
                placeholder="ฝากข้อความน่ารัก ๆ ไว้ได้เลย..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-5 bg-wedding-gold text-white rounded-2xl font-bold uppercase tracking-[0.2em] hover:bg-wedding-gold-dark hover:shadow-xl hover:shadow-wedding-gold/20 transition-all disabled:opacity-70 flex items-center justify-center gap-3"
            >
              <span v-if="!isSubmitting">ส่งคำตอบรับ</span>
              <span v-else class="flex gap-1">
                <span class="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
                <span
                  class="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]"
                ></span>
                <span
                  class="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.4s]"
                ></span>
              </span>
              <Send v-if="!isSubmitting" class="w-5 h-5" />
            </button>
          </form>
        </div>

        <!-- Success Message -->
        <div v-else class="text-center py-12 animate-scale-in">
          <div
            class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 class="w-10 h-10 text-green-500" />
          </div>
          <h3 class="text-3xl font-serif text-slate-800 mb-4">ขอบคุณมาก!</h3>
          <p class="text-slate-600 leading-relaxed mb-8">
            เราได้รับคำตอบรับของคุณแล้ว แล้วพบกันในวันสำคัญนะคะ/ครับ
          </p>
          <button
            @click="isSubmitted = false"
            class="text-wedding-gold font-medium hover:underline"
          >
            แก้ไขคำตอบ
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
