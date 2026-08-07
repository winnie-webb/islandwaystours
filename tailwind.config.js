/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Warm near-black, tinted toward the logo's forest green rather than a
        // neutral grey. Used for the hero, footer and every dark band.
        ink: {
          DEFAULT: "#0a1712",
          800: "#0f211a",
          700: "#172e24",
          600: "#22412f",
        },
        // Primary: the palm/lettering green sampled from the Island Ways logo.
        palm: {
          50: "#eef8f2",
          100: "#d5eee0",
          200: "#a8dcc1",
          300: "#6fc39c",
          400: "#33a475",
          500: "#12885b",
          600: "#076d48",
          700: "#06573b",
          800: "#084531",
          900: "#08392a",
        },
        // Accent: the sunburst gold from the logo's sun and lettering.
        gold: {
          100: "#fdf3d6",
          200: "#fbe7a8",
          300: "#f8d66a",
          400: "#f2b81f",
          500: "#d69c0d",
          600: "#a97a0c",
        },
        // Tertiary: the ocean teal from the wave beneath the ship.
        ocean: {
          100: "#dff0f4",
          300: "#8ecbd9",
          400: "#3fa2b8",
          500: "#1f8299",
          600: "#16687c",
        },
        sand: "#f9f7f1",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
      },
      maxWidth: {
        shell: "84rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,23,18,.04), 0 12px 32px -12px rgba(10,23,18,.18)",
        lift: "0 2px 4px rgba(10,23,18,.05), 0 28px 56px -20px rgba(10,23,18,.32)",
        glow: "0 0 0 1px rgba(7,109,72,.22), 0 18px 44px -16px rgba(7,109,72,.5)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.22,1,.36,1) both",
        "fade-in": "fade-in .9s ease both",
        "slow-zoom": "slow-zoom 22s ease-out both",
      },
    },
  },
  plugins: [],
};
