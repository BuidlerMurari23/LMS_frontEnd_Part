/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      lineClamp: {
        7: '7',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

