// React Imports
import { useState } from "react"
import type { ReactNode } from "react"

// MUI Imports
import Card from "@mui/material/Card"
import { CardProps } from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Divider from "@mui/material/Divider"
import { Theme } from "@mui/material/styles"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import useMediaQuery from "@mui/material/useMediaQuery"

// Component Imports
import TsToJsCodeSnippet from "../ts-js-code"

export type CardSnippetProps = CardProps & {
  title: string
  children: ReactNode
  code: string
  className?: string
}

const CardSnippet = (props: CardSnippetProps) => {
  // Props
  const { sx, code, title, children, className } = props

  // States
  const [showCode, setShowCode] = useState<boolean>(false)

  // Hooks
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"))

  return (
    <Card
      className={className}
      sx={{ "& .MuiCardHeader-action": { lineHeight: 0.8 }, ...sx }}
    >
      <CardHeader
        title={title}
        {...(hidden
          ? {}
          : {
              action: (
                <IconButton size='small' onClick={() => setShowCode(!showCode)}>
                  <i className="ri-code-line text-xl" />
                </IconButton>
              ),
            })}
      />
      <CardContent>{children}</CardContent>
      {hidden ? null : (
        <Collapse in={showCode}>
          <Divider className='mlb-0' />
          <CardContent
          className='relative'
            sx={{
              "& > :first-of-type": { marginBlockEnd: 0 },
              "& pre": { m: "0 !important", maxHeight: 500 },
              ".tabs__item": {
                paddingBlock: '6px',
                paddingInline: '12px',
                '&:hover': {
                  backgroundColor: 'transparent'
                }
              }
            }}
          >
            <TsToJsCodeSnippet>{code}</TsToJsCodeSnippet>
          </CardContent>
        </Collapse>
      )}
    </Card>
  )
}

export default CardSnippet
