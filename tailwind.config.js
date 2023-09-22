import { nextui } from '@nextui-org/react'



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'praise': ['Praise', 'sans-serif'],
        'mooli': ['Mooli', 'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('flowbite/plugin')],
}

