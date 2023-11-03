'use client'

// React Imports
import { useEffect, useRef, useState } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// MUI Imports
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { useTheme } from '@mui/material/styles'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import InputLabel from '@mui/material/InputLabel'
import Checkbox from '@mui/material/Checkbox'
import type { Breakpoint } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import { useMedia, useDebounce, useEffectOnce, useUpdateEffect } from 'react-use'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { Direction } from '@core/types'

// Icon Imports
import Cog from '@core/svg/Cog'
import Refresh from '@core/svg/Refresh'
import Close from '@menu-package/svg/Close'
import EyeDropper from '@core/svg/EyeDropper'
import ModeDark from '@core/svg/ModeDark'
import ModeLight from '@core/svg/ModeLight'
import ModeSystem from '@core/svg/ModeSystem'
import SkinDefault from '@core/svg/SkinDefault'
import SkinBordered from '@core/svg/SkinBordered'
import LayoutVertical from '@core/svg/LayoutVertical'
import LayoutCollapsed from '@core/svg/LayoutCollapsed'
import LayoutHorizontal from '@core/svg/LayoutHorizontal'
import ContentCompact from '@core/svg/ContentCompact'
import ContentWide from '@core/svg/ContentWide'
import DirectionLtr from '@core/svg/DirectionLtr'
import DirectionRtl from '@core/svg/DirectionRtl'

// Config Imports
import primaryColorConfig from '@configs/primaryColorConfig'

// Hook Imports
import useSettings from '@core/hooks/useSettings'
import useVerticalNav from '@menu-package/hooks/useVerticalNav'

// Util Imports
import { getLocalePath } from '@/utils/get-locale-path'

// Style Imports
import styles from './styles.module.css'

type CustomizerProps = {
  breakpoint?: Breakpoint | 'xxl' | string
  dir?: Direction
}

const Customizer = ({ breakpoint = 'lg', dir = 'ltr' }: CustomizerProps) => {
  // States
  const [isOpen, setIsOpen] = useState(false)
  const [direction, setDirection] = useState(dir)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLDivElement | null>(null)
  const initialRender = useRef(true)

  // Hooks
  const theme = useTheme()
  const pathName = usePathname()
  const { settings, saveSettings, isSettingsChanged, resetSettings } = useSettings()
  const { collapseVerticalNav } = useVerticalNav()
  const isSystemDark = useMedia('(prefers-color-scheme: dark)', false)
  const breakpointValue =
    breakpoint === 'xxl'
      ? '1920px'
      : breakpoint === 'xl'
      ? `${theme.breakpoints.values.xl}px`
      : breakpoint === 'lg'
      ? `${theme.breakpoints.values.lg}px`
      : breakpoint === 'md'
      ? `${theme.breakpoints.values.md}px`
      : breakpoint === 'sm'
      ? `${theme.breakpoints.values.sm}px`
      : breakpoint === 'xs'
      ? `${theme.breakpoints.values.xs}px`
      : breakpoint

  const breakpointReached = useMedia(`(max-width: ${breakpointValue})`, false)
  const isMobileScreen = useMedia('(max-width: 600px)', false)

  const getPrimaryColor = () => {
    if (primaryColorConfig.find(item => item.name === settings.primaryColor)) {
      return primaryColorConfig.find(item => item.name === settings.primaryColor)?.main
    } else {
      return settings.primaryColor
    }
  }

  const [color, setColor] = useState(() => getPrimaryColor())

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // Update Settings
  const handleChange = (field: keyof Settings | 'direction', value: Settings[keyof Settings] | Direction) => {
    // Update direction state
    if (field === 'direction') {
      setDirection(value as Direction)
    } else {
      // Update settings in cookie
      saveSettings({ [field]: value })
    }
  }

  const handleMenuClose = (event: MouseEvent | TouchEvent): void => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }
    setIsMenuOpen(false)
  }

  useDebounce(
    () => {
      if (!initialRender.current) {
        handleChange('primaryColor', color)
      }
    },
    200,
    [color]
  )

  useEffectOnce(() => {
    setTimeout(() => {
      initialRender.current = false
    }, 210)
  })

  useEffect(() => {
    if (settings.layout === 'collapsed') {
      collapseVerticalNav(true)
    } else {
      collapseVerticalNav(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.layout])

  // Update html `dir` attribute when changing direction
  useUpdateEffect(() => {
    document.documentElement.setAttribute('dir', direction)
  }, [direction])

  return (
    !breakpointReached && (
      <div
        className={classnames(
          'customizer',
          styles.customizer,
          { [styles.show]: isOpen, [styles.smallScreen]: isMobileScreen },
          'bs-full flex flex-col'
        )}
      >
        <div
          className={classnames('customizer-toggler flex items-center justify-center cursor-pointer', styles.toggler)}
          onClick={handleToggle}
        >
          <Cog />
        </div>
        <div className={classnames('customizer-header flex items-center justify-between', styles.header)}>
          <div className='flex flex-col gap-2'>
            <h4 className={styles.customizerTitle}>Theme Customizer</h4>
            <p>Customize & Preview in Real Time</p>
          </div>
          <div className='flex gap-4'>
            <div onClick={resetSettings} className={classnames('flex cursor-pointer', styles.refreshWrapper)}>
              <Refresh />
              <div className={classnames(styles.dotStyles, { [styles.show]: isSettingsChanged })} />
            </div>
            <Close onClick={handleToggle} className='cursor-pointer' />
          </div>
        </div>
        <PerfectScrollbar options={{ wheelPropagation: false }}>
          <div className={classnames('customizer-body flex flex-col', styles.customizerBody)}>
            <div className={classnames('theming-section flex flex-col', styles.section)}>
              <p>Theming</p>
              <div className='flex flex-col gap-2.5'>
                <p className={styles.itemTitle}>Primary Color</p>
                <div className='flex items-center justify-between'>
                  {primaryColorConfig.map(item => (
                    <div
                      key={item.name}
                      className={classnames(styles.primaryColorWrapper, {
                        [styles.active]: settings.primaryColor === item.name
                      })}
                      onClick={() => handleChange('primaryColor', item.name)}
                    >
                      <div className={styles.primaryColor} style={{ backgroundColor: item.main }} />
                    </div>
                  ))}
                  <div
                    ref={anchorRef}
                    className={classnames(styles.primaryColorWrapper, {
                      [styles.active]: settings.primaryColor?.includes('#')
                    })}
                    onClick={() => setIsMenuOpen(prev => !prev)}
                  >
                    <div
                      className={classnames(styles.primaryColor, 'flex items-center justify-center')}
                      style={{
                        backgroundColor:
                          settings.primaryColor === color && primaryColorConfig.some(item => item.name !== color)
                            ? color
                            : 'var(--mui-palette-action-selected)',
                        color:
                          settings.primaryColor === color && primaryColorConfig.some(item => item.name !== color)
                            ? 'var(--mui-palette-primary-contrastText)'
                            : 'var(--mui-palette-text-primary)'
                      }}
                    >
                      <EyeDropper fontSize='1.25rem' />
                    </div>
                  </div>
                  <Popper
                    transition
                    open={isMenuOpen}
                    disablePortal
                    anchorEl={anchorRef.current}
                    placement='bottom-end'
                  >
                    {({ TransitionProps }) => (
                      <Grow {...TransitionProps} style={{ transformOrigin: 'right top' }}>
                        <Paper elevation={6} className={styles.colorPopup}>
                          <ClickAwayListener onClickAway={handleMenuClose}>
                            <div>
                              <HexColorPicker color={color} onChange={setColor} />
                              <HexColorInput
                                className={styles.colorInput}
                                color={color}
                                onChange={setColor}
                                prefixed
                                placeholder='Type a color'
                              />
                            </div>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className={styles.itemTitle}>Mode</p>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, styles.modeWrapper, {
                        [styles.active]: settings.mode === 'light'
                      })}
                      onClick={() => handleChange('mode', 'light')}
                    >
                      <ModeLight fontSize='1.875rem' />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('mode', 'light')}>
                      Light
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, styles.modeWrapper, {
                        [styles.active]: settings.mode === 'dark'
                      })}
                      onClick={() => handleChange('mode', 'dark')}
                    >
                      <ModeDark fontSize='1.875rem' />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('mode', 'dark')}>
                      Dark
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, styles.modeWrapper, {
                        [styles.active]: settings.mode === 'system'
                      })}
                      onClick={() => handleChange('mode', 'system')}
                    >
                      <ModeSystem fontSize='1.875rem' />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('mode', 'system')}>
                      System
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className={styles.itemTitle}>Skin</p>
                <div className='flex items-center gap-4'>
                  <div className='flex flex-col items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.skin === 'default' })}
                      onClick={() => handleChange('skin', 'default')}
                    >
                      <SkinDefault />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('skin', 'default')}>
                      Default
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.skin === 'bordered' })}
                      onClick={() => handleChange('skin', 'bordered')}
                    >
                      <SkinBordered />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('skin', 'bordered')}>
                      Bordered
                    </p>
                  </div>
                </div>
              </div>
              {settings.mode === 'dark' ||
              (settings.mode === 'system' && isSystemDark) ||
              settings.layout === 'horizontal' ? null : (
                <div className='flex items-center justify-between'>
                  <InputLabel className={classnames(styles.itemTitle, 'cursor-pointer')} htmlFor='customizer-semi-dark'>
                    Semi Dark
                  </InputLabel>
                  <Checkbox
                    id='customizer-semi-dark'
                    checked={settings.semiDark === true}
                    onChange={() => handleChange('semiDark', !settings.semiDark)}
                  />
                </div>
              )}
            </div>
            <hr className={styles.hr} />
            <div className={classnames('layout-section flex flex-col', styles.section)}>
              <p>Layout</p>
              <div className='flex flex-col gap-2.5'>
                <p className={styles.itemTitle}>Layouts</p>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.layout === 'vertical' })}
                      onClick={() => handleChange('layout', 'vertical')}
                    >
                      <LayoutVertical />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('layout', 'vertical')}>
                      Vertical
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.layout === 'collapsed' })}
                      onClick={() => handleChange('layout', 'collapsed')}
                    >
                      <LayoutCollapsed />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('layout', 'collapsed')}>
                      Collapsed
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.layout === 'horizontal' })}
                      onClick={() => handleChange('layout', 'horizontal')}
                    >
                      <LayoutHorizontal />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('layout', 'horizontal')}>
                      Horizontal
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className={styles.itemTitle}>Content</p>
                <div className='flex items-center gap-4'>
                  <div className='flex flex-col items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, {
                        [styles.active]: settings.contentWidth === 'compact'
                      })}
                      onClick={() =>
                        saveSettings({
                          navbarContentWidth: 'compact',
                          contentWidth: 'compact',
                          footerContentWidth: 'compact'
                        })
                      }
                    >
                      <ContentCompact />
                    </div>
                    <p
                      className={styles.itemLabel}
                      onClick={() =>
                        saveSettings({
                          navbarContentWidth: 'compact',
                          contentWidth: 'compact',
                          footerContentWidth: 'compact'
                        })
                      }
                    >
                      Compact
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.contentWidth === 'wide' })}
                      onClick={() =>
                        saveSettings({ navbarContentWidth: 'wide', contentWidth: 'wide', footerContentWidth: 'wide' })
                      }
                    >
                      <ContentWide />
                    </div>
                    <p
                      className={styles.itemLabel}
                      onClick={() =>
                        saveSettings({ navbarContentWidth: 'wide', contentWidth: 'wide', footerContentWidth: 'wide' })
                      }
                    >
                      Wide
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className={styles.itemTitle}>Direction</p>
                <div className='flex items-center gap-4'>
                  <Link href={getLocalePath(pathName, 'en')}>
                    <div className='flex flex-col items-start gap-1'>
                      <div
                        className={classnames(styles.itemWrapper, {
                          [styles.active]: direction === 'ltr'
                        })}
                      >
                        <DirectionLtr />
                      </div>
                      <p className={styles.itemLabel}>
                        Left to Right <br />
                        (English)
                      </p>
                    </div>
                  </Link>
                  <Link href={getLocalePath(pathName, 'ar')}>
                    <div className='flex flex-col items-start gap-1'>
                      <div
                        className={classnames(styles.itemWrapper, {
                          [styles.active]: direction === 'rtl'
                        })}
                      >
                        <DirectionRtl />
                      </div>
                      <p className={styles.itemLabel}>
                        Right to Left <br />
                        (Arabic)
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    )
  )
}

export default Customizer
