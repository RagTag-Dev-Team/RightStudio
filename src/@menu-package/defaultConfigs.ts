// Type Imports
import type { BreakPointType, TransitionOptionsType } from './types'

export const transitionOptionsDefaults: TransitionOptionsType = {
  easing: 'ease-in-out',
  duration: 300,
  delay: 0
}

export const breakpoints: Record<BreakPointType, string> = {
  xs: '480px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
  xxl: '1920px',
  always: 'always'
}
