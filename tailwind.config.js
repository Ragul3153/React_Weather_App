/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        'weatherbg' : "url('/src/w-img-3.jpg')"
      }
    },
  },
  plugins: [],
}

