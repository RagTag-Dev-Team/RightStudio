/* Import React */
import {
  AnchorHTMLAttributes,
  Children,
  cloneElement,
  forwardRef,
  ForwardRefRenderFunction,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'

/* Third Party Imports */
import classnames from 'classnames'
import styled, { CSSObject } from '@emotion/styled'

// import { createPopper, Instance } from '@popperjs/core';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useRole,
  useInteractions,
  useClick,
  safePolygon,
  useDismiss,
  hide,
  FloatingPortal,
  useTransitionStyles,
  useFloatingNodeId,
  FloatingNode,
  useMergeRefs,
  useFloatingTree,
  FloatingTreeType
} from '@floating-ui/react'

/* Import Classes */
import { menuClasses } from '../../utils/utilityClasses'

/* Import Types */
import { MenuItemProps } from './MenuItem'

/* Hooks Imports */
import { usePathname } from '../../hooks/usePathname'

/* Import Utils */
import { confirmUrlInChildren } from '../../utils/menuUtils'

/* Import Components */
import SubMenuContent from './SubMenuContent'

/* Hooks Imports */
import useVerticalMenu from '../../hooks/useVerticalMenu'
import useVerticalNav from '../../hooks/useVerticalNav'

/* Styled Components */
import MenuButton, { menuButtonStyles } from './MenuButton'
import StyledMenuLabel from '../../styles/StyledMenuLabel'
import StyledMenuIcon from '../../styles/StyledMenuIcon'
import StyledMenuPrefix from '../../styles/StyledMenuPrefix'
import StyledMenuSuffix from '../../styles/StyledMenuSuffix'
import StyledVerticalNavExpandIcon, {
  StyledVerticalNavExpandIconWrapper
} from '../../styles/vertical/StyledVerticalNavExpandIcon'
import StyledUl from '../../styles/StyledUl'

export interface SubMenuProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
  label: string | ReactNode
  icon?: ReactNode
  prefix?: ReactNode
  suffix?: ReactNode
  open?: boolean
  defaultOpen?: boolean
  active?: boolean
  disabled?: boolean
  rootStyles?: CSSObject
  component?: string | ReactElement
  children?: ReactNode
  i18nKey?: string
  aclProps?: { action: string; subject: string }
  onOpenChange?: (open: boolean) => void
  setParentHeight?: (height: number) => void

  /**
   * @ignore
   */
  level?: number
}

interface StyledSubMenuProps extends Pick<SubMenuProps, 'rootStyles' | 'active' | 'disabled'> {
  level: number
  menuItemStyles?: CSSObject
  isPopoutWhenCollapsed?: boolean
  buttonStyles?: CSSObject
}

type SubMenuContentProps = HTMLAttributes<HTMLDivElement> & {
  open?: boolean
  openWhenCollapsed?: boolean
  openWhenHovered?: boolean
  transitionDuration?: number
  isPopoutWhenCollapsed?: boolean
  firstLevel?: boolean
  isCollapsed?: boolean
  isHovered?: boolean
  defaultOpen?: boolean
  strategy?: string
  top?: number
  left?: number
  rootStyles?: CSSObject
  children?: ReactNode
}

type MenuItemElement =
  | 'root'
  | 'button'
  | 'label'
  | 'prefix'
  | 'suffix'
  | 'icon'
  | 'subMenuContent'
  | 'SubMenuExpandIcon'

const StyledSubMenu = styled.li<StyledSubMenuProps>`
  position: relative;
  inline-size: 100%;
  ${({ menuItemStyles }) => menuItemStyles};
  ${({ rootStyles }) => rootStyles};

  > .${menuClasses.button} {
    ${({ level, disabled, active, children, isPopoutWhenCollapsed }) =>
      menuButtonStyles({
        level,
        disabled,
        active,
        children,
        isPopoutWhenCollapsed
      })};
    ${({ buttonStyles }) => buttonStyles};
  }
`

const StyledSubMenuContent = styled.div<SubMenuContentProps>`
  inline-size: 100%;
  overflow: hidden;

  ${({ strategy, isCollapsed }) => strategy && isCollapsed && `position: ${strategy};`}
  ${({ top, isCollapsed }) => top && isCollapsed && `top: ${top}px;`}
  ${({ left, isCollapsed }) => left && isCollapsed && `left: ${left}px;`}
  ${({ rootStyles }) => rootStyles};
`

export const SubMenu: ForwardRefRenderFunction<HTMLLIElement, SubMenuProps> = (props, ref) => {
  const {
    children,
    className,
    label,
    icon,
    title,
    prefix,
    suffix,
    open: openSubmenu,
    defaultOpen,
    level = 0,
    disabled = false,
    rootStyles,
    component,
    onOpenChange,
    onClick,
    onKeyUp,
    setParentHeight,
    ...rest
  } = props
  const { isCollapsed, transitionOptions, isPopoutWhenCollapsed, isHovered } = useVerticalNav()
  const { triggerPopout, renderExpandIcon, menuItemStyles } = useVerticalMenu()

  const [open, setOpen] = useState<boolean>(!!defaultOpen)
  const [openDefault, setOpenDefault] = useState<boolean>(!!defaultOpen)
  const [openWhenCollapsed, setOpenWhenCollapsed] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)
  const [submenuContentHeight, setSubmenuContentHeight] = useState(0)

  // Hooks
  const pathname = usePathname()

  // const tree = useFloatingTree()
  const nodeId = useFloatingNodeId()

  const childNodes = Children.toArray(children).filter(Boolean) as [ReactElement<SubMenuProps | MenuItemProps>]

  // const contentRef = useRef<HTMLUListElement>(null)

  const handleSubmenuUpdate = (height: number) => {
    setSubmenuContentHeight(height)

    console.log(`${label} Updating height :>> ${height}`)

    // setTimeout(() => {
    setParentHeight?.(submenuContentHeight + height)

    // }, 350)

    // open ? setParentHeight?.(submenuContentHeight + height) : setParentHeight?.(height)
  }

  /* const getSubmenuHeight = (tree: FloatingTreeType | null): number => {
    // const submenuContentHeight = tree
    //   ? tree.nodesRef.current[tree.nodesRef.current.length - 1]?.context?.refs.floating.current?.scrollHeight
    //   : context.refs.floating.current?.scrollHeight
    let submenuContentHeight = 0

    console.log(tree?.nodesRef.current)
    tree?.nodesRef.current.forEach(node => {
      if (node.context?.open) {
        // submenuContentHeight = node.context.refs.floating.current?.scrollHeight || 0
        submenuContentHeight += node.context.refs.floating.current?.scrollHeight ?? 0

        // console.log(submenuContentHeight)
      }
    })

    return submenuContentHeight
  } */

  const { x, y, strategy, refs, context } = useFloating({
    // strategy: 'fixed',
    open,
    onOpenChange: setOpen,
    nodeId,
    placement: isCollapsed ? 'right-start' : 'bottom-start',
    middleware: [offset(10), flip(), shift(), hide()],
    whileElementsMounted: autoUpdate
  })

  const referenceRef = useMergeRefs([refs.setReference, ref])

  // Floating UI Transition Styles
  const { isMounted, styles } = useTransitionStyles(context, {
    // Configure both open and close durations:
    duration: 300,

    initial: {
      maxHeight: 0
    },
    open: {
      // height: contentRef.current?.clientHeight
      // height: context.refs.floating.current?.scrollHeight
      maxHeight: submenuContentHeight
    },
    close: {
      maxHeight: 0
    },
    common: {
      backgroundColor: 'white',
      transitionTimingFunction: 'ease-out'
    }
  })

  const hover = useHover(context, {
    handleClose: safePolygon(), // safePolygon function allows us to reach to submenu
    restMs: 25, // Only opens submenu when cursor rests for 25ms on a menu
    enabled: isCollapsed && triggerPopout === 'hover' // Only enable hover effect when menu is collapsed and triggerPopout option is set to 'hover'
  })
  const click = useClick(context, {
    enabled: triggerPopout === 'click' // Only enable click effect when triggerPopout option is set to 'click'
  })
  const dismiss = useDismiss(context, {
    outsidePress: false
  })
  const role = useRole(context, { role: 'menu' })

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, click, dismiss, role])

  const handleSlideToggle = (): void => {
    // check if the submenu is open
    if (typeof openSubmenu === 'undefined') {
      // if the submenu is not open and its level is 0 and the verticalNav is collapsed and the mouse is not hovering over it, then return
      if (level === 0 && isCollapsed && !isHovered) {
        return
      }

      // if the submenu is not open, then open it
      onOpenChange?.(!open)
      setOpen(!open)
    } else {
      // if the submenu is open, then close it
      onOpenChange?.(!openSubmenu)
    }
  }

  const handleOnClick = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    onClick?.(event)
    handleSlideToggle()
  }

  const handleOnKeyUp = (event: KeyboardEvent<HTMLAnchorElement>) => {
    onKeyUp?.(event)
    if (event.key === 'Enter') {
      handleSlideToggle()
    }
  }

  const getSubMenuItemStyles = (element: MenuItemElement): CSSObject | undefined => {
    // If the menuItemStyles prop is provided, get the styles for the
    // specified element.
    if (menuItemStyles) {
      // Define the parameters that are passed to the style functions.
      const params = { level, disabled, active, isSubmenu: true, open: openSubmenu ?? open }

      // Get the style function for the specified element.
      const styleFunction = menuItemStyles[element]

      if (styleFunction) {
        // If the style function is a function, call it and return the result.
        // Otherwise, return the style function itself.
        return typeof styleFunction === 'function' ? styleFunction(params) : styleFunction
      }
    }
  }

  useLayoutEffect(() => {
    if (isCollapsed && level === 0) {
      setOpenWhenCollapsed(false)

      // TODO: if its useful to close first level submenus on collapse verticalNav uncomment the code below
      // setOpen(false)
    }
  }, [isCollapsed, level, transitionOptions])

  useEffect(() => {
    if (openSubmenu) setOpenDefault(openSubmenu)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Change active state when the url changes
  useEffect(() => {
    // Check if the current url matches any of the children urls
    if (confirmUrlInChildren(children, pathname)) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [pathname])

  useEffect(() => {
    console.log(`${label}: Open state changed :>> ${open}`)
    open && handleSubmenuUpdate(context.refs.floating.current?.scrollHeight ?? 0)
  }, [open])

  return (
    <FloatingNode id={nodeId}>
      {/* Sub Menu */}
      <StyledSubMenu
        {...(!disabled && { ref: referenceRef, ...getReferenceProps() })}
        className={classnames(
          { [menuClasses.subMenuRoot]: level === 0 },
          { [menuClasses.active]: active },
          { [menuClasses.disabled]: disabled },
          { [menuClasses.open]: openSubmenu ?? open },
          className
        )}
        menuItemStyles={getSubMenuItemStyles('root')}
        level={level}
        isPopoutWhenCollapsed={isPopoutWhenCollapsed}
        disabled={disabled}
        active={active}
        buttonStyles={getSubMenuItemStyles('button')}
        rootStyles={rootStyles}
      >
        {/* Menu Item */}
        <MenuButton
          // ref={isCollapsed && level === 0 && isPopoutWhenCollapsed && !disabled ? refs.setReference : null}
          // {...(isCollapsed && level === 0 && isPopoutWhenCollapsed && !disabled && getReferenceProps())}
          onClick={handleOnClick}
          onKeyUp={handleOnKeyUp}
          title={title}
          className={menuClasses.button}
          component={component}
          tabIndex={0}
          active={active}
          {...rest}
        >
          {/* Menu Item Icon */}
          {icon && (
            <StyledMenuIcon className={menuClasses.icon} rootStyles={getSubMenuItemStyles('icon')}>
              {icon}
            </StyledMenuIcon>
          )}

          {/* Menu Item Prefix */}
          {prefix && (
            <StyledMenuPrefix
              isCollapsed={isCollapsed}
              transitionOptions={transitionOptions}
              firstLevel={level === 0}
              className={menuClasses.prefix}
              rootStyles={getSubMenuItemStyles('prefix')}
            >
              {prefix}
            </StyledMenuPrefix>
          )}

          {/* Menu Item Name */}
          <StyledMenuLabel className={menuClasses.label} rootStyles={getSubMenuItemStyles('label')}>
            {label} {submenuContentHeight}
          </StyledMenuLabel>

          {/* Menu Item Suffix */}
          {suffix && (
            <StyledMenuSuffix
              isCollapsed={isCollapsed}
              transitionOptions={transitionOptions}
              firstLevel={level === 0}
              className={menuClasses.suffix}
              rootStyles={getSubMenuItemStyles('suffix')}
            >
              {suffix}
            </StyledMenuSuffix>
          )}

          {/* Sub Menu Toggle Icon Wrapper */}
          <StyledVerticalNavExpandIconWrapper
            className={menuClasses.SubMenuExpandIcon}
            isCollapsed={isCollapsed}
            level={level}
            isHovered={isHovered}
            rootStyles={getSubMenuItemStyles('SubMenuExpandIcon')}
          >
            {renderExpandIcon ? (
              renderExpandIcon({
                level,
                disabled,
                active,
                open: openSubmenu ?? open
              })
            ) : isCollapsed && !isHovered && level === 0 ? null : (
              /* Expanded Arrow Icon */
              <StyledVerticalNavExpandIcon open={openSubmenu ?? open} />
            )}
          </StyledVerticalNavExpandIconWrapper>
        </MenuButton>

        {/* <FloatingPortal root={}> */}
        {isMounted && (
          <StyledSubMenuContent
            ref={refs.setFloating}
            {...getFloatingProps()}
            strategy={strategy}
            top={y ?? 0}
            left={x ?? 0}
            style={{ ...styles }}
            key={submenuContentHeight}
          >
            <StyledUl>
              {childNodes.map(node => {
                return cloneElement(node, {
                  ...node.props,
                  ...(Array.isArray(node.props.children) && { setParentHeight: handleSubmenuUpdate }),
                  level: level + 1
                })
              })}
            </StyledUl>
          </StyledSubMenuContent>
        )}
        {/* </FloatingPortal> */}

        {/* SubMenu Content */}
        {/* <SubMenuContent
        ref={isCollapsed && level === 0 && isPopoutWhenCollapsed ? refs.setFloating : contentRef}
        {...(isCollapsed && level === 0 && isPopoutWhenCollapsed && getFloatingProps())}
        strategy={strategy}
        top={y ?? 0}
        left={x ?? 0}
        openWhenCollapsed={openWhenCollapsed}
        isPopoutWhenCollapsed={isPopoutWhenCollapsed}
        open={openSubmenu ?? open}
        firstLevel={level === 0}
        isCollapsed={isCollapsed}
        isHovered={isHovered}
        defaultOpen={openDefault}
        className={menuClasses.subMenuContent}
        rootStyles={getSubMenuItemStyles('subMenuContent')}
      >
        {childNodes.map(node =>
          cloneElement(node, {
            ...node.props,
            level: level + 1
          })
        )}
      </SubMenuContent> */}
      </StyledSubMenu>
    </FloatingNode>
  )
}

export default forwardRef<HTMLLIElement, SubMenuProps>(SubMenu)
