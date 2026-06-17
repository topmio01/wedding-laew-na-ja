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
  <section id="rsvp" class="section-padding bg-transparent relative overflow-hidden">
    <!-- Decorative blobs — amber & sage from C1.jpg -->
    <div class="absolute -top-24 -left-24 w-72 h-72 blob-amber pointer-events-none opacity-70"></div>
    <div class="absolute -bottom-24 -right-24 w-72 h-72 blob-sage pointer-events-none opacity-60"></div>

    <div class="max-w-2xl mx-auto px-4 relative z-10">
      <div class="text-center mb-12 reveal">
        <p class="label-caps mb-3">ยืนยันการเข้าร่วมงาน</p>
        <h2 class="text-4xl md:text-5xl font-serif mb-4" style="color:#2C2E2B;">คุณจะมาร่วมงานกับเรามั้ย?</h2>
        <div class="ornament-divider max-w-[200px] mx-auto mb-2">
          <span class="ornament-star text-sm">✦</span>
        </div>
      </div>

      <div class="glass p-8 md:p-12 rounded-[2rem] shadow-xl reveal">
        <div v-if="!isSubmitted">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="label-caps ml-1">ชื่อ-นามสกุล</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="input-wedding"
                  placeholder="กรอกชื่อของคุณ"
                />
              </div>
              <div class="space-y-2">
                <label class="label-caps ml-1">อีเมล</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="input-wedding"
                  placeholder="กรอกอีเมลของคุณ"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label class="label-caps ml-1">คุณจะมาร่วมงานหรือไม่?</label>
              <div class="flex gap-4">
                <button
                  type="button"
                  @click="form.attending = 'yes'"
                  class="flex-1 py-4 rounded-2xl font-medium transition-all text-sm"
                  :style="form.attending === 'yes'
                    ? 'background:#7B4634; color:#fff; box-shadow:0 4px 16px rgba(123,70,52,0.30);'
                    : 'background:rgba(245,241,232,0.60); color:rgba(44,46,43,0.65); border:1px solid rgba(123,70,52,0.15);'"
                >
                  มาร่วมงาน
                </button>
                <button
                  type="button"
                  @click="form.attending = 'no'"
                  class="flex-1 py-4 rounded-2xl font-medium transition-all text-sm"
                  :style="form.attending === 'no'
                    ? 'background:#7B4634; color:#fff; box-shadow:0 4px 16px rgba(123,70,52,0.30);'
                    : 'background:rgba(245,241,232,0.60); color:rgba(44,46,43,0.65); border:1px solid rgba(123,70,52,0.15);'"
                >
                  ไม่สามารถมาร่วมงานได้
                </button>
              </div>
            </div>

            <div v-if="form.attending === 'yes'" class="space-y-2 animate-fade-in">
              <label class="label-caps ml-1">จำนวนผู้ร่วมงาน</label>
              <select
                v-model="form.guests"
                class="input-wedding appearance-none"
              >
                <option v-for="n in 5" :key="n" :value="n">{{ n }} ท่าน</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="label-caps ml-1">ข้อความถึงบ่าวสาว (ไม่บังคับ)</label>
              <textarea
                v-model="form.message"
                rows="4"
                class="input-wedding resize-none"
                placeholder="ฝากข้อความน่ารัก ๆ ไว้ได้เลย..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-5 rounded-2xl font-bold uppercase transition-all disabled:opacity-70 flex items-center justify-center gap-3"
              style="background:linear-gradient(135deg,#A05C44,#7B4634); color:#fff; letter-spacing:0.18em; box-shadow:0 4px 18px rgba(123,70,52,0.28);"
            >
              <span v-if="!isSubmitting">ส่งคำตอบรับ</span>
              <span v-else class="flex gap-1">
                <span class="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
                <span class="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span class="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </span>
              <Send v-if="!isSubmitting" class="w-5 h-5" />
            </button>
          </form>
        </div>

        <!-- Success Message -->
        <div v-else class="text-center py-12 animate-scale-in">
          <div
            class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style="background:rgba(143,166,88,0.15);"
          >
            <CheckCircle2 class="w-10 h-10" style="color:#697C3A;" />
          </div>
          <h3 class="text-3xl font-serif mb-4" style="color:#2C2E2B;">ขอบคุณมาก!</h3>
          <p class="leading-relaxed mb-8 text-sm" style="color:rgba(44,46,43,0.65);">
            เราได้รับคำตอบรับของคุณแล้ว แล้วพบกันในวันสำคัญนะคะ/ครับ
          </p>
          <button
            @click="isSubmitted = false"
            class="font-medium hover:underline text-sm"
            style="color:#7B4634;"
          >
            แก้ไขคำตอบ
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
