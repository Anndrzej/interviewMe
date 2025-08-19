/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#9CA3AF",
          light: "#D1D5DB",
        },
        secondary: "#374151",
        blue: {
          light: "#60A5FA",
          dark: "#9333EA",
        },
        badgeYellow: "#FACC15",
        badgeRed: "#F87171",
        background: {
          main: "#1F2937",
          input: "#374151",
        },
      },
    },
  },
  plugins: [],
};
