import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'on-boarding': "url('/onBoarding.png')",
          'car': "url('/car/car_body.png')",
          "on-loading-senery":"url('/loadingScenery.png')",
          "calculator":"url('/calculator.png')"
      },
      screens: {
        xs: "320px",
        sm: "375px",
        md: "425px",
        lg: "768px",
        xl: "900px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
export default config;
