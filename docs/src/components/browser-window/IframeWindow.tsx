// Component Imports
import BrowserWindow from './index'

type Props = {
  url: string
  width?: number | string
  height?: number
}

// Quick and dirty component, to improve later if needed
const IframeWindow = ({ url, width = '100%', height = 400 }: Props) => {
  return (
    <BrowserWindow url={url}>
      <iframe src={url} title={url} width={width} height={height} style={{ display: 'block' }} />
    </BrowserWindow>
  )
}

export default IframeWindow
