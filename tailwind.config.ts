import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: ["halloween"],
  },
  plugins: [require("daisyui")],
} satisfies Config;
