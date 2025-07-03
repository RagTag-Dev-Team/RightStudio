// MUI Imports
import { useColorScheme } from "@mui/material/styles"

// Docusaurus Imports
import { useColorMode } from "@docusaurus/theme-common/internal"

const ChangeMuiMode = () => {
  // Hooks
  const { colorMode } = useColorMode()
  const { mode, setMode } = useColorScheme()

  if (colorMode === "light" && mode === "dark") {
    setMode("light")
  }

  if (colorMode === "dark" && mode === "light") {
    setMode("dark")
  }

  return null
}

export default ChangeMuiMode