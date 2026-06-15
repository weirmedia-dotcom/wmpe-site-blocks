const preset = require("../src/tailwind-preset.cjs");
module.exports = {
  presets: [preset],
  darkMode: "class",
  content: ["../src/**/*.{ts,tsx}", "./**/*.{ts,tsx,css}"],
};
