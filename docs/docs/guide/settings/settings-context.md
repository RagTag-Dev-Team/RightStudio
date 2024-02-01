# Settings Context

## Overview

Settings Context has been created so that the template is independent of the redux store for storing the variables used in the template.

## Properties

Following are the properties and their values that are stored in the Settings Context:

| Property          | Values                                                                   | Description                                       |
| ----------------- | ------------------------------------------------------------------------ | ------------------------------------------------- |
| settings          | `Settings`                                                               | Stores the settings.                              |
| updateSettings    | `(settings: Partial<Settings>, options?: UpdateSettingsOptions) => void` | Function to update settings with provided values. |
| isSettingsChanged | `boolean`                                                                | Indicates if settings have been modified.         |
| resetSettings     | `() => void`                                                             | Resets settings to default values.                |

## Settings

Following are the properties and their values that are stored in the Settings:

| Property           | Values                                | Description                                                        |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------ |
| mode               | `system`, `light`, `dark`             | Changes the color theme. `system` aligns with the device settings. |
| skin               | `default`, `bordered`                 | Selects the template style. `bordered` adds visual borders.        |
| semiDark           | `true`, `false`                       | Toggles a semi-dark theme for balanced contrast.                   |
| layout             | `vertical`, `horizontal`, `collapsed` | Determines the layout arrangement of the template.                 |
| navbarContentWidth | `compact`, `wide`                     | Adjusts the navbar width.                                          |
| contentWidth       | `compact`, `wide`                     | Sets the main content area's width.                                |
| footerContentWidth | `compact`, `wide`                     | Defines the footer's width.                                        |
| primaryColor       | `string`                              | Specifies the main color theme.                                    |

The values stored in the `Settings` are also saved in cookies.
