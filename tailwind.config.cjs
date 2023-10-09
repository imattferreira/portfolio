// TODO change pallete to a similar to Chris Forsberg Drift Team
// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik Variable", ...theme.fontFamily.sans],
      },
    },
    colors: {
      blue: {
        50: "#f1f7fe",
        100: "#deeefc",
        200: "#c2e0fa",
        300: "#97ccf7",
        400: "#6ab2f1",
        500: "#4693ec",
        600: "#2e75e0",
        700: "#2761ce",
        800: "#264ea6",
        900: "#244684",
        950: "#14213e",
      },
      gray: {
        50: "#f7f7f8",
        100: "#eeeef0",
        200: "#d9d9de",
        300: "#b8b9c1",
        400: "#91939f",
        500: "#737584",
        600: "#5d5e6c",
        700: "#4c4d58",
        800: "#41414b",
        900: "#393941",
        950: "#18181b",
      },
      green: {
        50: "#f2fbf8",
        100: "#d5f2e8",
        200: "#abe4d0",
        300: "#79cfb5",
        400: "#52b69a",
        500: "#34987e",
        600: "#277a66",
        700: "#236253",
        800: "#204f45",
        900: "#1e433a",
        950: "#0c2722",
      },
      red: {
        50: "#fef2f3",
        100: "#fee2e4",
        200: "#ffc9cd",
        300: "#fda4ab",
        400: "#fa6f7a",
        500: "#f2414f",
        600: "#df2332",
        700: "#bb1a27",
        800: "#9b1923",
        900: "#811b23",
        950: "#640d14",
      },
      yellow: {
        50: "#fffbea",
        100: "#fff4c5",
        200: "#ffe787",
        300: "#ffd548",
        400: "#ffc01e",
        500: "#fca311",
        600: "#df7500",
        700: "#b95104",
        800: "#963e0a",
        900: "#7b330c",
        950: "#471901",
      },
    },
  },
  plugins: [],
};
