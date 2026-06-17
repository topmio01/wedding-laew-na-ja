---
inclusion: auto
---

# Wedding Project Skill — Laew Na Ja (แลวนาจา)

## Project Overview

นี่คือเว็บไซต์การ์ดแต่งงานดิจิทัลของ **ธนภร (แป้ง) & บัณฑิต (ท๊อป)** วันที่ **2 สิงหาคม 2026** ณ ร้านเพกะลาว ลำลูกกา คลอง 4

Stack: **Vue 3 + TypeScript + TailwindCSS 3 + Vite**

---

## Design System & Color Palette

### Brand Colors — extracted pixel-by-pixel from C1.jpg

| Token | Hex | Source in photo | Usage |
|---|---|---|---|
| `wedding-ivory` | `#F5F1E8` | Backdrop `rgb(245,241,232)` | Page bg |
| `wedding-champagne` | `#F0E8D8` | Deeper linen surface | Card surfaces |
| `wedding-ink` | `#2C2E2B` | Near-black `rgb(44,46,43)` | Body text |
| `wedding-terra` | `#7B4634` | Couple outfits `rgb(123,70,52)` | Primary CTA, names, accents |
| `wedding-terra-light` | `#A05C44` | Outfit highlight | Hover, secondary |
| `wedding-terra-dark` | `#5C3224` | Deep shadow | Dark hover |
| `wedding-peach` | `#FAE1CD` | Skin tone `rgb(250,225,205)` | Card tint, hover overlay |
| `wedding-amber` | `#EDB564` | Warm highlight `rgb(237,175,100)` | Date text on dark, sparkles |
| `wedding-olive` | `#8FA658` | Botanicals `rgb(143,166,88)` | Schedule icon bg, sage accents |

> **gold.* maps to terra.* for backward compat** — `wedding-gold` = `#7B4634`, `wedding-sage` = `#8FA658`

### Inline Style Pattern
Since Tailwind compiles at build-time, color-critical values use **inline styles** directly:
```html
style="color:#7B4634;"          <!-- terracotta text -->
style="color:rgba(237,175,100,0.90);"  <!-- amber text on dark bg -->
style="background:rgba(143,166,88,0.12);"  <!-- olive tint bg -->
```

### Typography

| Font | Class | Usage |
|---|---|---|
| Playfair Display | `font-serif` | Headings, section titles |
| Dancing Script | `font-romantic` | Names, decorative text (italic) |
| Inter | `font-sans` | Body, labels, tracking-widest uppercase |

---

## Component Map

```
src/components/
├── HeroSection.vue       # Full-screen hero, ofal2.png logo, couple name
├── ContentTime.vue       # Countdown section (section#time)
├── WeddingDetails.vue    # Schedule + Google Map (section#details)
├── Gallery.vue           # Photo grid + lightbox (section#gallery)
├── RSVPForm.vue          # RSVP form (section#rsvp)
├── AppFooter.vue         # Footer with quote
├── MusicPlayer.vue       # Floating music toggle (bottom-right)
├── CountdownTimer.vue    # Countdown boxes used inside ContentTime
└── img/
    ├── C1.jpg, C2.jpg    # Couple photos (displayed as 2-col grid in App.vue)
    ├── ofal.png, ofal2.png  # Monogram/ornament logo
    ├── bg4.jpg            # Desktop background
    ├── bg-mobile2.jpg     # Mobile background
    ├── 1.png–4.png        # Schedule icons (ceremony, procession, etc.)
    └── g1.jpg             # Gallery seed
```

---

## Reusable CSS Utilities (main.css)

```css
.glass           /* bg-white/30 backdrop-blur-md border border-white/20 */
.glass-dark      /* bg-black/10 backdrop-blur-md border border-white/10 */
.btn-gold        /* filled gold pill button */
.btn-outline-gold/* outlined gold pill button */
.text-gradient-gold /* gold gradient text */
.section-padding /* py-20 md:py-32 */
.reveal          /* scroll-triggered fade-in-up (IntersectionObserver in App.vue) */
```

---

## Key Patterns & Rules

### 1. Background
- **App.vue** handles the full-page fixed background image (`bg4.jpg` desktop, `bg-mobile2.jpg` mobile)
- All sections use `bg-transparent` — never add solid background to sections

### 2. Intro Gate
- `hasEntered` ref controls whether main content is shown
- Stored in `localStorage` key `hasEntered`
- Intro overlay is z-[200], navbar z-[100], music player z-50

### 3. Scroll Reveal
- Add `.reveal` class to any element that should animate on scroll
- Observer is set up in `App.vue` via `setupRevealObserver()` after `hasEntered = true`
- Elements gain `.active` class when 10% visible

### 4. Responsive Breakpoints
- Mobile-first: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- `landscape:` utility used in full-screen sections for short screens
- Mobile nav triggers at `md:hidden` / `hidden md:flex`

### 5. Thai Language
- UI text is in **Thai** — keep all user-facing strings in Thai
- Date format: `2 สิงหาคม 2026` / Buddhist year: `2569`
- Names: ธนภร = Tanaporn, บัณฑิต = Bundit

---

## Adding New Components

```vue
<!-- Template for a new wedding section -->
<template>
  <section id="my-section" class="section-padding bg-transparent">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-16 reveal">
        <h2 class="text-4xl md:text-5xl font-serif text-wedding-ink mb-4">หัวข้อ</h2>
        <div class="w-16 h-1 bg-wedding-gold/20 mx-auto"></div>
      </div>
      <div class="glass rounded-3xl p-8 reveal">
        <!-- content -->
      </div>
    </div>
  </section>
</template>
```

Register in `App.vue` under `<main v-if="hasEntered">` and add to `navLinks` array if needed.

---

## Build & Dev Commands

```bash
npm run dev          # Dev server (Vite)
npm run build        # Production build → dist/
npm run preview      # Preview dist/
npm run type-check   # vue-tsc
npm run test:unit    # Vitest
npm run lint         # ESLint 9
npm run format       # Prettier
```

---

## Wedding Event Details

| | |
|---|---|
| **คู่บ่าวสาว** | ธนภร (แป้ง) & บัณฑิต (ท๊อป) |
| **วันงาน** | อาทิตย์ที่ 2 สิงหาคม 2026 (๒ สิงหาคม ๒๕๖๙) |
| **สถานที่** | ร้านเพกะลาว ลำลูกกา คลอง 4, 70/24 ต.ลาดสวาย อ.ลำลูกกา ปทุมธานี 12120 |
| **Google Maps** | [13.9812176, 100.6849677](https://www.google.com/maps/dir/?api=1&destination=13.9812176,100.6849677) |
| **กำหนดการ** | 07:09 พิธีสงฆ์ → 08:29 แห่ขันหมาก → 09:39 รับไหว้/หลั่งน้ำ → 11:30 งานเลี้ยง |
| **RSVP deadline** | 14 พฤษภาคม 2025 |
| **เพลงประกอบ** | lifePartner.mp3 (loop, autoplay muted → unmute on first interaction) |
