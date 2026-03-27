import type { Config } from "tailwindcss"
import violetPreset from "./tailwind.preset"

const config: Config = {
  presets: [violetPreset as Config],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
