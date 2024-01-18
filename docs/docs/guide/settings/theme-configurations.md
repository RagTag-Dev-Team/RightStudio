# Theme Configurations

import TsToJsCodeSnippet from "@docComponents//ts-js-code"

## Overview

In order to configure your template, you will need to work with the `src/configs/themeConfig.ts` file. This file contains various template configurations along with their valid values. By making changes to these configurations, you can customize the template according to your specific requirements.

If you are looking to match up with one of our demos, then please read demo configs doc.

:::warning
To ensure consistent layout and avoid unexpected behavior, it is recommended to keep the `contentWidth` property equal for the navbar content, page content, and footer content.
:::

:::danger Important

Before you can see the configuration changes reflected in the template, it's essential to clear your browser's local storage. You can find instructions on how to clear local storage in the browser [here](https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/).

:::

## Properties

The `themeConfig` object contains various properties and their default values that control the appearance and behavior of the template. Following are the properties with their values that we have used in the theme:

<TsToJsCodeSnippet>{`const themeConfig: Config = {
  templateName: 'Master',
  mode: 'system',
  skin: 'default',
  semiDark: false,
  layout: 'vertical',
  layoutPadding: 24,
  compactContentWidth: 1440,
  navbar: {
    type: 'fixed',
    contentWidth: 'compact',
    floating: false,
    detached: true,
    blur: true
  },
  contentWidth: 'compact',
  footer: {
    type: 'static',
    contentWidth: 'compact',
    detached: true
  }
}`
}</TsToJsCodeSnippet>

## Property Options

Here is a table that lists all the properties available in the `themeConfig` object, along with their possible values and a brief description of each:

| Property             | Values                        | Description                                                            |
|:---------------------|:---------------------------------------|:--------------------------------------------------------------|
| `templateName`       | `string`                               | Specifies the name of the template, project, or company       |
| `mode`               | `system`, `light`, `dark`,             | Sets the color mode for the template (system, light, or dark) |
| `skin`               | `default`, `bordered`                  | Changes the skin of the template                              |  
| `semiDark`           | `true`, `false`                        | Enables or disables semi-dark mode for the template           |
| `layout`             | `vertical`, `horizontal`, `collapsed`  | Defines the layout type                                       |
| `layoutPadding`      | `24`                                   | Sets the padding for the layout                               |
| `compactContentWidth`| `number`                               | Specifies the width of the content area                       |
| `navbar.type`        | `fixed`, `static`                      | Determines the position of the navbar (fixed or static)       |
| `navbar.contentWidth`| `compact`, `wide`                      | Sets the width of the navbar                                  |
| `navbar.floating`    | `true`, `false`                        | Enables or disables floating for the navbar                   |
| `navbar.detached`    | `true`, `false`                        | Controls whether the navbar is detached                       |
| `navbar.blur`        | `true`, `false`                        | Enables or disables blur for the navbar                       |
| `contentWidth`       | `compact`, `wide`                      | Sets the width of the content area                            |
| `footer.type`        | `fixed`, `static`                      | Specifies the type of the footer                              |
| `footer.contentWidth`| `compact`, `wide`                      | Sets the width of the footer                                  |
| `footer.detached`    | `true`, `false`                        | Controls whether the footer is detached                       |

You can customize these properties according to your project's requirements to achieve the desired look and feel for your template.