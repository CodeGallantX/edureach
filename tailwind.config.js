/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        blue: "#001F3F",
        orange: "#FF4112",
        offWhite: "#FAFAFA",
        ash: "#f5f5f5",
      }
    },
  },
  plugins: [],
}