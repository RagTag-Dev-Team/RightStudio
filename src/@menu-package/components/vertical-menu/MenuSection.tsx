'use client'

// React Imports
import { forwardRef } from 'react'
import type { ReactNode, ForwardRefRenderFunction, CSSProperties } from 'react'

// Third Party Imports
import classNames from 'classnames'
import { useRendersCount } from 'react-use'
import type { CSSObject } from '@emotion/react'

// Type Imports
import type { ACLPropsType, ChildrenType } from '../../types'
import type { MenuSectionStyles } from './Menu'

// Hook Imports
import useVerticalNav from '../../hooks/useVerticalNav'
import useVerticalMenu from '../../hooks/useVerticalMenu'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'

// Styled Components
import StyledMenuIcon from '../../styles/StyledMenuIcon'
import StyledMenuPrefix from '../../styles/StyledMenuPrefix'
import StyledMenuSuffix from '../../styles/StyledMenuSuffix'
import StyledMenuSectionLabel from '../../styles/StyledMenuSectionLabel'

export type MenuSectionProps = Partial<ChildrenType> & {
  label: string
  rootStyles?: CSSObject
  labelStyles?: CSSObject
  className?: string
  icon?: ReactNode
  prefix?: ReactNode
  suffix?: ReactNode
  i18nKey?: string
  aclProps?: ACLPropsType
}

type MenuSectionElement = keyof MenuSectionStyles

// Styled Components
const menuSectionRootStyles: CSSProperties = {
  display: 'inline-block',
  inlineSize: '100%',
  position: 'relative',
  overflow: 'hidden'
}

const menuSectionWrapperStyles: CSSProperties = {
  display: 'inline-block',
  inlineSize: '100%',
  position: 'relative',
  listStyle: 'none',
  padding: 0,
  overflow: 'hidden'
}

const menuSectionContentStyles: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  inlineSize: '100%',
  position: 'relative',
  paddingBlock: '0.8rem',
  overflow: 'hidden'
}

// Menu Section
const MenuSection: ForwardRefRenderFunction<HTMLLIElement, MenuSectionProps> = (props, ref) => {
  // Props
  const { children, icon, className, prefix, suffix, label, rootStyles, ...rest } = props

  // Hooks
  const { isCollapsed, isHovered, transitionOptions } = useVerticalNav()
  const { menuSectionStyles } = useVerticalMenu()
  const rendersCount = useRendersCount()

  const getMenuSectionStyles = (element: MenuSectionElement): CSSObject | undefined => {
    // If the menuSectionStyles prop is provided, get the styles for the
    // element from the prop
    if (menuSectionStyles) {
      return menuSectionStyles[element]
    }
  }

  return (
    // eslint-disable-next-line lines-around-comment
    // Menu Section
    <li ref={ref} className={classNames(menuClasses.menuSectionRoot, className)} style={menuSectionRootStyles}>
      {/* Menu Section Content Wrapper */}
      <ul className={menuClasses.menuSectionWrapper} {...rest} style={menuSectionWrapperStyles}>
        {/* Menu Section Content */}
        <li className={menuClasses.menuSectionContent} style={menuSectionContentStyles}>
          {icon && (
            <StyledMenuIcon className={menuClasses.icon} rootStyles={getMenuSectionStyles('icon')}>
              {icon}
            </StyledMenuIcon>
          )}
          {prefix && (
            <StyledMenuPrefix
              isCollapsed={isCollapsed}
              transitionOptions={transitionOptions}
              className={menuClasses.prefix}
              rootStyles={getMenuSectionStyles('prefix')}
            >
              {prefix}
            </StyledMenuPrefix>
          )}
          {label && (
            <StyledMenuSectionLabel
              isCollapsed={isCollapsed}
              isHovered={isHovered}
              className={menuClasses.menuSectionLabel}
              rootStyles={getMenuSectionStyles('label')}
            >
              {label} {rendersCount}
            </StyledMenuSectionLabel>
          )}
          {suffix && (
            <StyledMenuSuffix
              isCollapsed={isCollapsed}
              className={menuClasses.suffix}
              rootStyles={getMenuSectionStyles('suffix')}
            >
              {suffix}
            </StyledMenuSuffix>
          )}
        </li>
        {/* Render Child */}
        {children}
      </ul>
    </li>
  )
}

export default forwardRef<HTMLLIElement, MenuSectionProps>(MenuSection)
