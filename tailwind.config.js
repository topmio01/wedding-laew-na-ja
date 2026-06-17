/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wedding: {
          // ── Extracted directly from C1.jpg ──────────────────────────────
          // Backdrop: rgb(245,241,232) → warm linen
          ivory:     '#F5F1E8',
          // Slightly deeper linen for surfaces
          champagne: '#F0E8D8',
          // Near-black warm dark rgb(44,46,43)
          ink:       '#2C2E2B',

          // Peach skin tones rgb(250,225,205) / rgb(252,231,212)
          peach: {
            light:   '#FBF0E6',
            DEFAULT: '#FAE1CD',
            dark:    '#F3D0B4',
          },

          // Deep terracotta — the couple's outfits rgb(123,70,52)
          terra: {
            light:   '#A05C44',
            DEFAULT: '#7B4634',
            dark:    '#5C3224',
          },

          // Warm amber/gold highlights rgb(237,175,100) / rgb(228,193,127)
          amber: {
            light:   '#EDD89A',
            DEFAULT: '#EDB564',
            dark:    '#C8913E',
          },

          // Olive sage — botanical elements rgb(143,166,88) / rgb(153,179,105)
          olive: {
            light:   '#C4D49A',
            DEFAULT: '#8FA658',
            dark:    '#697C3A',
          },

          // ── Legacy aliases (keeps existing class names working) ─────────
          blush: {
            light:   '#FBF0E6',
            DEFAULT: '#FAE1CD',
            dark:    '#F3D0B4',
          },
          // gold now maps to terracotta from the photo
          gold: {
            light:   '#A05C44',
            DEFAULT: '#7B4634',
            dark:    '#5C3224',
          },
          sage: {
            light:   '#C4D49A',
            DEFAULT: '#8FA658',
            dark:    '#697C3A',
          },
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        romantic: ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'scale-in': 'scaleIn 1s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
