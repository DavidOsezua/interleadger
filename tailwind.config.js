/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: `rgba(35, 98, 245, 0.5)`,
      },
    },
  },
  plugins: [],
};
