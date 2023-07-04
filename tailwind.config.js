/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1463d8",
        primary2: "#1f5ca2",
        secondary: "#055ef3",
        primaryHover: "#1154b8",
        darkBlue: "#303264",
        dimBlue: "#f3f7fc",
        darkGrey: "0B0A11",
        darkGrey2: "#111",
        darkGrey3: "#212529",
        highlight: "#dc3545"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    },
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    }
  },
  plugins: [require("tailwind-scrollbar-hide")]
}
