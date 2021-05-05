module.exports = {
  mode: "jit", //just in time compiler
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important : true,
  theme: {
    extend: {
      screens : {
        "3xl" : "2000px"
      }
    },
  },
  variants: { 
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
