/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-primary": "#161617",
        "dark-customer-input": "#232323",
        "dark-secondary": "#FFFFFF",
        "dark-button-main": "#2d44b5",
        "button-main-hover": "#3b58eb",
        "light-primary": "#FFFFFF",
        "light-customer-input": "#E5E5E5",
        "light-secondary": "#000000",
      },
    },
  },
  plugins: [],
};
