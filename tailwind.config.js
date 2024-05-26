/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        "primary-color": "#fc6736",
        seashell: {
          100: "#fff5f2",
          200: "#fff4f1",
          300: "#fff4f0",
          400: "#fff3f0",
        },
        text: "#3d3d3d",
        whitesmoke: {
          100: "#f9f9f9",
          200: "#f5f5f5",
        },
        line: "rgba(20, 20, 22, 0.1)",
        darkslategray: {
          100: "rgba(68, 68, 68, 0.7)",
          200: "rgba(68, 68, 68, 0.3)",
        },
        gray: {
          100: "#8a8888",
          200: "#787878",
          300: "#282828",
          400: "rgba(40, 40, 40, 0.35)",
        },
        "text-color": "#444",
        red: "#ff0000",
        purple: "#800080",
        "text-color1": "#333",
        color: "#ffc326",
        violet: "#f397f3",
        gainsboro: {
          100: "#dfdfdf",
          200: "#dbdbdb",
          300: "#d9d9d9",
        },
        steelblue: {
          100: "#0b84c8",
          200: "rgba(11, 132, 200, 0.18)",
        },
        deepskyblue: "#139cd6",
        green: "#008000",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "subtitle-3-medium-18pt": "'Open Sans'",
        manrope: "Manrope",
      },
      borderRadius: {
        "81xl": "100px",
        "12xs": "1px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      "37xl": "56px",
      xl: "20px",
      base: "16px",
      "21xl": "40px",
      smi: "13px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
