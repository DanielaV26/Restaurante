import { nextui } from '@nextui-org/react'



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'dancing': ['Dancing Script', 'sans-serif'],
        'arizonia': ['Arizonia', 'sans-serif'],
        'praise': ['Praise', 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('flowbite/plugin')],
}

