// React Imports
import React from "react";
import type { ReactNode } from "react";

// MUI Imports
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  StyledEngineProvider
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import type {} from '@mui/material/themeCssVarsAugmentation'
import type {} from '@mui/lab/themeAugmentation';

// Component Imports
import ChangeMuiMode from "./ChangeMuiMode";

// Style Imports
import globalStyling from "./globalStyles";

// Theme Overrides Imports
import overrides from "@core/theme/overrides";
import spacing from "@core/theme/spacing";
import typography from "@core/theme/typography";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = extendTheme({
    components: overrides(),
    ...spacing,
    shape: {
      customBorderRadius: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10
      }
    },
    typography: typography('')
  });

  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={theme}>
        <GlobalStyles styles={() => globalStyling(theme)} />
        <CssBaseline />
        <ChangeMuiMode />
        {children}
      </CssVarsProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
