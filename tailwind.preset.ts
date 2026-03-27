import type { Config } from "tailwindcss"

const violetPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        "nyu-purple": {
          DEFAULT: "#57068c",
          50: "#f6edf9",
          100: "#eee6f3",
          200: "#d4bfe3",
          300: "#ab82c5",
          400: "#7b5aa6",
          500: "#702b9d",
          600: "#57068c",
          700: "#4a0072",
          800: "#2d0051",
          900: "#1a0030",
        },
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.375rem",
      },
      boxShadow: {
        "nyu-sm": "0 1px 3px rgba(0, 0, 0, 0.1)",
        "nyu-md": "0 2px 10px rgba(0, 0, 0, 0.1)",
        "nyu-lg": "0 4px 15px rgba(0, 0, 0, 0.15)",
      },
    },
  },
}

export default violetPreset
