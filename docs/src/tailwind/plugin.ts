import plugin from "tailwindcss/plugin";

module.exports = plugin(function () {}, {
  theme: {
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: "var(--border-color, currentColor)",
    }),
    borderRadius: {
      none: "0px",
      xs: "0.125rem",
      sm: "0.25rem",
      DEFAULT: "0.375rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.625rem",
      "2xl": "0.75rem",
      "3xl": "1rem",
      "4xl": "1.5rem",
      full: "9999px",
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
      },
      zIndex: {
        header: "var(--header-z-index)",
        footer: "var(--footer-z-index)",
        customizer: "var(--customizer-z-index)",
        search: "var(--search-z-index)",
        drawer: "var(--drawer-z-index)",
      },
    },
  },
});
