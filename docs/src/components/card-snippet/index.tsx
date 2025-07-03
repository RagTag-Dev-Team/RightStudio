// React Imports
import { useState } from "react"
import type { ReactNode } from "react"

// MUI Imports
import Card from "@mui/material/Card"
import type { CardProps } from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Divider from "@mui/material/Divider"
import type { Theme } from "@mui/material/styles"
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
  showIconInCardContent?: boolean
}

const CardSnippet = (props: CardSnippetProps) => {
  // Props
  const { sx, code, title, children, className, showIconInCardContent = false } = props

  // States
  const [showCode, setShowCode] = useState<boolean>(false)

  // Hooks
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"))

  return (
    <Card
      className={className}
      sx={{ "& .MuiCardHeader-action": { lineHeight: 0.8 }, ...sx }}
    >
      {!showIconInCardContent && (
        <CardHeader
          title={title}
          {...(hidden
            ? {}
            : {
                action: (
                  <IconButton size='small' onClick={() => setShowCode(!showCode)}>
                    <i className="tabler-code text-xl" />
                  </IconButton>
                ),
              })}
        />
      )}
      <CardContent {...(showIconInCardContent && { className: 'relative' })}>
        {showIconInCardContent && (
          <IconButton
            size='small'
            onClick={() => setShowCode(!showCode)}
            className="absolute end-6 [inset-block-start:24]"
          >
            <i className="tabler-code text-xl" />
          </IconButton>
        )}
        {children}
      </CardContent>
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
             {/* Remove useBaseUrl usage */}
             <TsToJsCodeSnippet>
              {code
                .replace(/data={{...item, img: useBaseUrl\(item.img as string\)}}/gm, 'data={item}')
                .replace(/\`\$\{useBaseUrl\((.*?)\)\}\`/gm, '$1')
                .replace(/\{?useBaseUrl\((.*?)\)\}?/gm, '$1')
                .replace(/import useBaseUrl from.*?\n/g, '')}
            </TsToJsCodeSnippet>
          </CardContent>
        </Collapse>
      )}
    </Card>
  )
}

export default CardSnippet
