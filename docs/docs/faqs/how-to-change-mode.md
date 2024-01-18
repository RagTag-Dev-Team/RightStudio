---
hide_table_of_contents: true
---

# How to change Mode [Light/Dark]

In Modern era most of the user prefer to work in dark mode due to eye strain and long working hours.

It's very easy to change the default mode of the project from the `themeConfig.js` file. Please refer our Theme Configurations docs and set `mode` property to `light`, `dark` or `system`.

[Theme Configuration Doc](/docs/guide/settings/theme-configurations)

There may be times where you would want to have light, dark & system mode in your application and implement some functionalities or styling based on the current mode. To read the current mode please refer following docs:

[Read Current Mode for Conditional Styling Doc](#)

We already provide mode toggle dropdown in the Navbar but In case you want to implement mode toggler dropdown on your own or make changes in the mode toggler, please follow below documentation:

[Mode Toggler Doc](/docs/guide/hooks/useSettings#mode)