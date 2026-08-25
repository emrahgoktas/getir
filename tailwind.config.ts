import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        anthracite: {
          DEFAULT: "#1b1b1e",
          raised: "#252528",
          mid: "#323236",
        },
        crimson: {
          DEFAULT: "#d0122d",
          deep: "#8e0e22",
          bright: "#ff2a44",
        },
        paper: "#f4f4f5",
        mute: "#a8a8b0",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
