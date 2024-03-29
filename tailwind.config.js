/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // fontSize: {
    //   H1: [
    //     "60px",
    //     {
    //       lineHeight: "72px",
    //       fontWeight: "700",
    //     },
    //   ],
    //   H2: [
    //     "50px",
    //     {
    //       lineHeight: "60px",
    //       fontWeight: "700",
    //     },
    //   ],
    //   H3: [
    //     "42px",
    //     {
    //       lineHeight: "51px",
    //       fontWeight: "700",
    //     },
    //   ],
    //   H4: [
    //     "35px",
    //     {
    //       lineHeight: "42px",
    //       fontWeight: "700",
    //     },
    //   ],
    //   H5: [
    //     "28px",
    //     {
    //       lineHeight: "42px",
    //       fontWeight: "700",
    //     },
    //   ],
    //   H6: [
    //     "24px",
    //     {
    //       lineHeight: "36px",
    //       fontWeight: "700",
    //     },
    //   ],
    //   B1S: [
    //     "20px",
    //     {
    //       lineHeight: "30px",
    //       fontWeight: "100",
    //     },
    //   ],
    //   B1B: [
    //     "20px",
    //     {
    //       lineHeight: "30px",
    //       fontWeight: "700",
    //     },
    //   ],
    //   B2S: [
    //     "16px",
    //     {
    //       lineHeight: "24px",
    //       fontWeight: "400",
    //     },
    //   ],
    //   B2B: [
    //     "16px",
    //     {
    //       lineHeight: "24px",
    //       fontWeight: "700",
    //     },
    //   ],
    //   C1: [
    //     "14px",
    //     {
    //       lineHeight: "21px",
    //       fontWeight: "400",
    //     },
    //   ],
    //   C1B: [
    //     "14px",
    //     {
    //       lineHeight: "21px",
    //       fontWeight: "700",
    //     },
    //   ],
    //   D1B: [
    //     "40px",
    //     {
    //       lineHeight: "60px",
    //       fontWeight: 900,
    //     },
    //   ],
    // },
    extend: {
      colors: {
        main: {
          light: "#FFCA9F",
          "light-hover": "#FFF5ED",
          dark: "#7F410E",
          "dark-hover": "#5D2D06",
          normal: "#E5893D",
          "normal-hover": "#C36F2A",
        },
        text: {
          heading: "#00121A",
          subtitle: "#29383F",
          body: "#424F55",
          placeholder: "#757F83",
          disabled: "#B3B8BB",
        },
        state: {
          "success-light": "#E4F5E6",
          "success-base": "#3CC9AE",
          "success-dark": "#00550A",
          "error-light": "#FFE7E7",
          "error-base": "#E74C4C",
          "error-dark": "#8C0505",
          "warning-light": "#FFF9EE",
          "warning-base": "#FED782",
          "warning-dark": "#533C09",
        },
        line: {
          default: "#BABEBF",
        },
        icon: {
          default: "#3E3D4B",
          disabled: "#A3A3A9",
        },
      },
    },
  },
  plugins: [],
};
