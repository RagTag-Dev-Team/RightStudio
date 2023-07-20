'use client'

// React Imports
import { useRef, useState } from 'react'

// MUI Imports
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { useTheme } from '@mui/material/styles'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import type { Breakpoint } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import { useMedia, useDebounce, useEffectOnce } from 'react-use'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { Settings } from '../../contexts/settingsContext'

// Icon Imports
import Cog from '../../svg/Cog'
import Refresh from '../../svg/Refresh'
import Close from '../../../@menu-package/svg/Close'
import EyeDropper from '../../svg/EyeDropper'
import ModeDark from '../../svg/ModeDark'
import ModeLight from '../../svg/ModeLight'
import ModeSystem from '../../svg/ModeSystem'
import SkinDefault from '../../svg/SkinDefault'
import SkinBordered from '../../svg/SkinBordered'
import LayoutVertical from '../../svg/LayoutVertical'
import LayoutCollapsed from '../../svg/LayoutCollapsed'
import LayoutHorizontal from '../../svg/LayoutHorizontal'
import ContentCompact from '../../svg/ContentCompact'
import ContentWide from '../../svg/ContentWide'
import DirectionLtr from '../../svg/DirectionLtr'
import DirectionRtl from '../../svg/DirectionRtl'

// Config Imports
import primaryColorConfig from '@/configs/primaryColorConfig'

// Hook Imports
import useSettings from '../../hooks/useSettings'

// Style Imports
import styles from './styles.module.css'

type CustomizerProps = {
  breakpoint?: Breakpoint | 'xxl' | string
}

const Customizer = ({ breakpoint = 'lg' }: CustomizerProps) => {
  // States
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLDivElement | null>(null)
  const initialRender = useRef(true)

  // Hooks
  const theme = useTheme()
  const { settings, saveSettings, isSettingsChanged, resetSettings } = useSettings()
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

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]) => {
    saveSettings({
      [field]: value
    })
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
    }, 201)
  })

  return (
    !breakpointReached && (
      <div
        className={classnames(
          'customizer',
          styles.customizer,
          { [styles.show]: isOpen, [styles.smallScreen]: isMobileScreen },
          'height-100 d-flex flex-column'
        )}
      >
        <div
          className={classnames(
            'customizer-toggler d-flex align-items-center justify-content-center cursor-pointer',
            styles.toggler
          )}
          onClick={handleToggle}
        >
          <Cog />
        </div>
        <div
          className={classnames('customizer-header d-flex align-items-center justify-content-between', styles.header)}
        >
          <div className='d-flex flex-column gap-2'>
            <h4 className={styles.customizerTitle}>Theme Customizer</h4>
            <p>Customize & Preview in Real Time</p>
          </div>
          <div className='d-flex gap-4'>
            <div onClick={resetSettings} className={classnames('d-flex cursor-pointer', styles.refreshWrapper)}>
              <Refresh />
              <div className={classnames(styles.dotStyles, { [styles.show]: isSettingsChanged })} />
            </div>
            <Close onClick={handleToggle} className='cursor-pointer' />
          </div>
        </div>
        <PerfectScrollbar options={{ wheelPropagation: false }}>
          <div className={classnames('customizer-body d-flex flex-column gap-6', styles.customizerBody)}>
            <div className='theming-section d-flex flex-column gap-5'>
              <p>Theming</p>
              <div className='d-flex flex-column gap-3'>
                {/* Primary Color */}
                <p className={styles.itemTitle}>Primary Color</p>
                <div className='d-flex align-items-center justify-content-between'>
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
                      className={classnames(styles.primaryColor, 'd-flex align-items-center justify-content-center')}
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

              {/* Mode */}
              <div className='d-flex flex-column gap-3'>
                <p className={styles.itemTitle}>Mode</p>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex flex-column align-items-start gap-1'>
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
                  <div className='d-flex flex-column align-items-start gap-1'>
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
                  <div className='d-flex flex-column align-items-start gap-1'>
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

              {/* Skin */}
              <div className='d-flex flex-column gap-3'>
                <p className={styles.itemTitle}>Skin</p>
                <div className='d-flex align-items-center gap-4'>
                  <div className='d-flex flex-column align-items-start gap-1'>
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
                  <div className='d-flex flex-column align-items-start gap-1'>
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

              {/* Semi Dark */}
              {settings.mode === 'dark' ||
              (settings.mode === 'system' && isSystemDark) ||
              settings.layout === 'horizontal' ? null : (
                <div className='d-flex align-items-center justify-content-between'>
                  <label className={classnames(styles.itemTitle, 'cursor-pointer')} htmlFor='customizer-semi-dark'>
                    Semi Dark
                  </label>
                  <input
                    type='checkbox'
                    id='customizer-semi-dark'
                    checked={settings.semiDark === true}
                    onChange={() => handleChange('semiDark', !settings.semiDark)}
                  />
                </div>
              )}
            </div>

            <hr className={styles.hr} />

            <div className='layout-section d-flex flex-column gap-5'>
              <p>Layout</p>
              <div className='d-flex flex-column gap-3'>
                {/* Layouts */}
                <p className={styles.itemTitle}>Layouts</p>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex flex-column align-items-start gap-1'>
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
                  <div className='d-flex flex-column align-items-start gap-1'>
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
                  <div className='d-flex flex-column align-items-start gap-1'>
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

              {/* Content Width */}
              <div className='d-flex flex-column gap-3'>
                <p className={styles.itemTitle}>Content</p>
                <div className='d-flex align-items-center gap-4'>
                  <div className='d-flex flex-column align-items-start gap-1'>
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
                  <div className='d-flex flex-column align-items-start gap-1'>
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

              {/* Direction */}
              <div className='d-flex flex-column gap-3'>
                <p className={styles.itemTitle}>Direction</p>
                <div className='d-flex align-items-center gap-4'>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, {
                        [styles.active]: settings.direction === 'ltr'
                      })}
                      onClick={() => handleChange('direction', 'ltr')}
                    >
                      <DirectionLtr />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('direction', 'ltr')}>
                      Left to Right
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.direction === 'rtl' })}
                      onClick={() => handleChange('direction', 'rtl')}
                    >
                      <DirectionRtl />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('direction', 'rtl')}>
                      Right to Left
                    </p>
                  </div>
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
