import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,ts,jsx,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  
  // jsxStyleProps:'minimal',
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: "styled-system",
});
