// React Imports
import type { ReactNode, ComponentType } from 'react'

export type RepeaterProps = {
  count: number
  children(i: number): ReactNode
  tag?: ComponentType | keyof JSX.IntrinsicElements
}

const Repeater = (props: RepeaterProps) => {
  // Props
  const { count, tag, children, ...rest } = props

  // Custom Tag
  const Tag = tag || 'div'

  // Default Items
  const items = []

  // Loop passed count times and push it in items Array
  for (let i = 0; i < count; i++) {
    items.push(children(i))
  }

  return <Tag {...rest}>{items}</Tag>
}

export default Repeater
