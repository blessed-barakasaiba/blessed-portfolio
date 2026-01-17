import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        electric: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0,255,255,0.8)",
            borderColor: "rgba(0,255,255,0.5)"
          },
          "50%": {
            boxShadow: "0 0 40px rgba(0,255,255,1), 0 0 60px rgba(0,255,255,0.6)",
            borderColor: "rgba(0,255,255,1)"
          },
        },
        electricPulse: {
          "0%, 100%": {
            opacity: "0.7",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.02)"
          },
        },
        electricGlow: {
          "0%, 100%": {
            filter: "blur(10px)",
            opacity: "0.5"
          },
          "50%": {
            filter: "blur(15px)",
            opacity: "0.8"
          },
        },
        rotateTop: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        rotateRight: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        rotateLeft: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" }
        },
        rotateBottom: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        rotateFull: {
          "0%": { transform: "rotate(0deg) translateX(-50%) translateY(-50%)" },
          "100%": { transform: "rotate(360deg) translateX(-50%) translateY(-50%)" },
        },

        rotateLine1: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
          "51%": { transform: "translateX(100%) translateY(0)" },
          "100%": { transform: "translateX(-100%) translateY(0)" }

        },
        rotateLine2: {
          "0%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(100%)" },
          "51%": { transform: "translateY(100%) translateX(100%)" },
          "100%": { transform: "translateY(-100%) translateX(100%)" }
        },
        rotateLine3: {
          "0%": { transform: "translateX(100%)" },
          "50%": { transform: "translateX(-100%)" },
          "51%": { transform: "translateX(-100%) translateY(100%)" },
          "100%": { transform: "translateX(100%) translateY(100%)" }
        },
        rotateLine4: {
          "0%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(-100%)" },
          "51%": { transform: "translateY(-100%) translateX(-100%)" },
          "100%": { transform: "translateY(100%) translateX(-100%)" }
        },
      },
      animation: {
        electric: "electric 2s infinite ease-in-out",
        electricPulse: "electricPulse 2s infinite ease-in-out",
        electricGlow: "electricGlow 2s infinite ease-in-out",
        rotateTop: "rotateTop 2s linear infinite",
        rotateRight: "rotateRight 2s linear infinite",
        rotateLeft: "rotateLeft  2s linear infinite",
        rotateBottom: "rotateBottom 2s linear infinite",
        rotateFull: "rotateFull 3s linear infinite",
        rotateLine1: "rotateLine1 2s linear infinite ",
        rotateLine2: "rotateLine2 2s linear infinite ",
        rotateLine3: "rotateLine3 2s linear infinite ",
        rotateLine4: "rotateLine4 2s linear infinite ",
        spinSlow: 'spin 8s linear infinite',

      },
      fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    }
    },
    
  },
  plugins: [],
  safelist: [
    // Dynamically used classes
    'border-cyan-400',
    'border-orange-400',
    'border-purple-400',
    'border-green-400',
    'text-cyan-400',
    'text-orange-400',
    'text-purple-400',
    'text-green-400',
    'shadow-cyan-500/50',
    'shadow-orange-500/50',
    'shadow-purple-500/50',
    'shadow-green-500/50',
    'from-cyan-400',
    'to-blue-500',
    'from-orange-400',
    'to-red-500',
    'from-purple-400',
    'to-pink-500',
    'from-green-400',
    'to-emerald-500',
  ]
}