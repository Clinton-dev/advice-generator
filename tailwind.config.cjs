/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        "LightCyan": "hsl(193, 38%, 86%)",
        "NeonGreen": "hsl(150, 100%, 66%)",
        "GrayishBlue": "hsl(217, 19%, 38%)",
        "DarkGrayishBlue": "hsl(217, 19%, 24%)",
        "DarkBlue": "hsl(218, 23%, 16%)"
      }
    },
  },
  plugins: [],
}
