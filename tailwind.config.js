/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: "#343a40",
      darker: "#22262a",
      light: "#f8f9fa",
      link: {
        light: "#FFA5A5",
      },
    },
    fontSize: {
      base: "15px",
      md: [
        "3rem",
        {
          lineHeight: "1.3",
          letterSpacing: "-0.1rem",
          fontWeight: "300",
        },
      ],
      lg: [
        "3.5rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-0.1rem",
          fontWeight: "300",
        },
      ],
      xl: [
        "4rem",
        {
          lineHeight: 1.25,
          letterSpacing: "-0.1rem",
          fontWeight: "300",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
