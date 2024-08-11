/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.8) 100%)",
      },
      colors: {
        'custom-input': 'rgba(70, 90, 126, 0.4)',
        'custom-gray': 'rgba(255, 255, 255, 0.7)',
      },
    },
  },
  plugins: [],
};
