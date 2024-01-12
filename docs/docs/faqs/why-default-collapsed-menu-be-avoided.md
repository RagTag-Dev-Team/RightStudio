---
hide_table_of_contents: true
---

# Why should defaultCollapsed menu be avoided for menu collapsing

**Q: Why is it recommended to avoid using the `defaultCollapsed` property for collapsing menus?**

The `defaultCollapsed` prop is designated for internal use within the framework. Utilizing it in your application is not recommended because the layout configuration will always take precedence over menu configurations. This means that any settings you apply using defaultCollapsed may not behave as expected if they conflict with layout settings.

**Q: How can I collapse the menu in my application?**

To `collapse` the menu, you should use the layout configuration. Set the `layout` prop to `collapsed` within the `src/config/themeConfig.ts` file. This approach ensures that your menu will collapse as intended, respecting the overall layout configuration of your application.
