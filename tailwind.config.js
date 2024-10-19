const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,tsx,ts}",flowbite.content(),],
  theme: {},
  plugins: [
    flowbite.plugin(),
  ],
};
