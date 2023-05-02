/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eba13d",
          secondary: "#c23c48",
          accent: "#04d87c",
          neutral: "#1B1820",
          "base-100": "#FFFFFF",
          info: "#9FC5E5",
          success: "#4DEADD",
          warning: "#B08611",
          error: "#F24A82",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
