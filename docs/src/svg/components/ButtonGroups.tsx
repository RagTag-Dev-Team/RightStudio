// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const ButtonGroup = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M130 82H182C186.418 82 190 85.5817 190 90V108C190 112.418 186.418 116 182 116H130V82Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="141" y="95" width="38" height="8" rx="4" fill="white" fillOpacity="0.6"/>
      <path d="M10 90C10 85.5817 13.5817 82 18 82H70V116H18C13.5817 116 10 112.418 10 108V90Z" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.4"/>
      <rect x="70" y="82" width="60" height="34" fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity="0.5"/>
      <path d="M106.619 117.903L100 117.167V111.667C100 111.18 99.8069 110.714 99.4631 110.37C99.1193 110.026 98.653 109.833 98.1667 109.833C97.6805 109.833 97.2142 110.026 96.8704 110.37C96.5265 110.714 96.3334 111.18 96.3334 111.667V122.667L93.555 121.556C93.323 121.463 93.0745 121.419 92.8248 121.425C92.575 121.432 92.3293 121.49 92.1027 121.595C91.8761 121.7 91.6733 121.85 91.5069 122.037C91.3405 122.223 91.2139 122.442 91.135 122.679L91.0314 122.99C90.973 123.165 90.9688 123.354 91.0193 123.531C91.0698 123.708 91.1728 123.866 91.3146 123.984L96.0786 127.955C96.2426 128.091 96.4507 128.167 96.6652 128.167H106.417C106.903 128.167 107.369 127.974 107.713 127.63C108.057 127.286 108.25 126.82 108.25 126.333V119.724C108.25 119.273 108.083 118.838 107.783 118.502C107.482 118.166 107.068 117.953 106.619 117.903Z" fill="white"/>
      <path d="M95.8334 111.667V121.928L108.25 119.724C108.25 119.273 108.083 118.838 107.783 118.502C107.482 118.166 107.068 117.953 106.619 117.903L106.675 117.406L106.675 117.406L100.5 116.719V111.667C100.5 111.048 100.254 110.454 99.8166 110.017C99.3791 109.579 98.7856 109.333 98.1667 109.333C97.5479 109.333 96.9544 109.579 96.5168 110.017C96.0792 110.454 95.8334 111.048 95.8334 111.667Z" stroke={`rgb(${theme.palette.text.primaryChannel})`} strokeOpacity="0.4"/>
      <rect x="81" y="95" width="38" height="8" rx="4" fill="white" fillOpacity="0.6"/>
      <rect x="21" y="95" width="38" height="8" rx="4" fill="white" fillOpacity="0.6"/>
    </svg>
  )
}

export default ButtonGroup
