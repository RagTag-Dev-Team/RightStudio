// React Imports
import type { SVGAttributes } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

const Accordion = (props: SVGAttributes<SVGElement>) => {
  // Hooks
  const theme = useTheme()

  return (
    <svg width='1em' height='1em' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect x='10' y='45' width='180' height='32' rx='8' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.08'/>
      <rect x='22' y='57' width='83' height='8' rx='4' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.4'/>
      <path d='M168 61.9766L172.125 57.8516L173.303 59.0299L168 64.3332L162.697 59.0299L163.875 57.8516L168 61.9766Z' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.3'/>
      <rect x='10' y='82' width='180' height='36' rx='8' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.08'/>
      <rect x='22' y='88' width='63' height='8' rx='4' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.4'/>
      <rect x='22' y='104' width='103' height='8' rx='4' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.1'/>
      <path d='M168 100.977L172.125 96.8516L173.303 98.0299L168 103.333L162.697 98.0299L163.875 96.8516L168 100.977Z' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.3'/>
      <rect x='10' y='123' width='180' height='32' rx='8' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.08'/>
      <rect x='22' y='135' width='50' height='8' rx='4' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.4'/>
      <path d='M168 139.977L172.125 135.852L173.303 137.03L168 142.333L162.697 137.03L163.875 135.852L168 139.977Z' fill={`rgb(${theme.palette.text.primaryChannel})`} fillOpacity='0.3'/>
    </svg>
  )
}

export default Accordion
