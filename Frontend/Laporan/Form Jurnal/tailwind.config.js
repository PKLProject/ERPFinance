module.exports = {
    daisyui: {
        themes: [
          {
            mytheme: {
            
   "primary": "#FCFCFD",
            },
          },
        ],
      },
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme : {
        extends: {},
    },
    plugins: [require("daisyui")],
}