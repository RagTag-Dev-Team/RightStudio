---
hide_table_of_contents: true
---

# Why Can't Revert to Default Theme

In our current template configurations, we have migrated to using MUI's `extendTheme` function. The `extendTheme` function is deeply integrated into the template's design and architecture. This integration provides enhanced capabilities for theme customization.

However, this integration also means that the theme `createTheme` is not available as a separate theme object. This means that you cannot revert to the `createTheme`.
