/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [{
        mytheme: {
            "primary": "#6359E9",
            "primary-content": "#dbd9ff",
            "secondary": "#65cff6",
            "secondary-content": "#000608",
            "accent": "#00bf00",
            "accent-content": "#000d00",
            "neutral": "#18080c",
            "neutral-content": "#ccc6c7",
            "base-100": "#141332",
            "base-200": "#1d1d41",
            "base-300": "#1a1d25",
            "base-content": "#cfd0d3",
            "info": "#00bbee",
            "info-content": "#000d14",
            "success": "#02b15a",
            "success-content": "#061200",
            "warning": "#f87f00",
            "warning-content": "#150600",
            "error": "#E41414",
            "error-content": "#ffd8d7",
        },
    }],
    },
}

