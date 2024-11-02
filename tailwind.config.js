/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
        },
      },
      colors: {
        "gray-light": "#EDEBF2",
        "purple-blue": "#6536F1",
        "dark-navy": "#0D022C",
        "light-yellow": "#FFD43B",
      },
      backgroundImage: {
        "purple-mid-dark":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #6536F1 52%, rgba(255, 255, 255, 0) 100%)",
        "rainbow-gradient":
          "linear-gradient(90deg, #9CCB3B 0%, #39B665 15.85%, #5895CF 31.27%, #5172B8 45.79%, #6B5AA6 59.42%, #B52C91 70.64%, #F16022 85.66%, #FBA81C 92.38%, #FED60C 100%)",
      },
      lineHeight: {
        120: "120%",
        121: "121%",
        150: "150%",
      },
      fontSize: {
        "custom-6xl": "64px",
      },
      boxShadow: {
        "light-black": "0px 4px 59.1px 0px #0000001A",
        "low-purple": "0px 4px 16px 0px #6536F13D",
        "saving-card": "0px 43.07px 129.2px 0px #00000026",
        "saving-position": "0px 17.85px 53.55px 0px #00000026",
        'black-cross': '0px 40.7px 122.1px 0px #00000026',
        'black-loss': '0px 50.01px 150.02px 0px #00000026',
        "benefit-box": "0px -5px 34.1px 0px #6536F170",
        "light-grey": "0px 53.28px 159.85px 0px #00000026",
      },
      borderRadius: {
        10: "10px",
        14: "14px",
        28: "28px",
        42: "42px",
        83: "83px",
      },
      keyframes: {
        floatRotateSit: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
        floatRotateSitless: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-9px)" },
          "100%": { transform: "translateY(0)" },
        },
        scaleRotate: {
          "0%": { transform: "scale(1) rotate(29deg)" },
          "100%": { transform: "scale(1.2) rotate(20deg)" },
        },
        scaleAnimate: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.01) rotate(2deg)" },
          "50%": { transform: "scale(1) rotate(0deg)" },
          "75%": { transform: "scale(1.01) rotate(2deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
      },
      animation: {
        "float-rotate-sit": "floatRotateSit 3s ease-in-out infinite",
        "float-rotate-sit-less": "floatRotateSitless 3s ease-in-out infinite",
        "scale-rotate": "scaleRotate 1.5s alternate infinite",
        "scale-drop": "scaleAnimate 2s alternate infinite",
      },
    },
  },
  plugins: [],
};
