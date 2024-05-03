'use client'

// React Imports
import { useEffect, useRef, useState } from 'react'

// MUI Imports
import Backdrop from '@mui/material/Backdrop'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

// Type Imports
import type { ChatDataType } from '@/types/apps/chatTypes'

// Slice Imports
import { getActiveUserData } from '@/redux-store/slices/chat'

// Component Imports
import SidebarLeft from './SidebarLeft'
import ChatContent from './ChatContent'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { commonLayoutClasses } from '@layouts/utils/layoutClasses'

const ChatWrapper = () => {
  // States
  const [backdropOpen, setBackdropOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Refs
  const messageInputRef = useRef<HTMLDivElement>(null)

  // Hooks
  const { settings } = useSettings()
  const dispatch = useDispatch()
  const chatStore = useSelector((state: { chatReducer: ChatDataType }) => state.chatReducer)
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  // function to get active user data
  const activeUser = (id: number) => {
    dispatch(getActiveUserData(id))
  }

  useEffect(() => {
    if (chatStore.activeUser?.id !== null && messageInputRef.current) {
      messageInputRef.current.focus()
    }
  }, [chatStore.activeUser])

  useEffect(() => {
    if (!isBelowMdScreen && backdropOpen && sidebarOpen) {
      setBackdropOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBelowMdScreen])

  useEffect(() => {
    if (!isBelowSmScreen && sidebarOpen) {
      setBackdropOpen(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBelowSmScreen])

  return (
    <div
      className={classNames(
        commonLayoutClasses.contentHeightFixed,
        'flex is-full overflow-hidden rounded-xl relative',
        {
          border: settings.skin === 'bordered',
          'shadow-md': settings.skin !== 'bordered'
        }
      )}
    >
      <SidebarLeft
        chatStore={chatStore}
        getActiveUserData={activeUser}
        dispatch={dispatch}
        backdropOpen={backdropOpen}
        setBackdropOpen={setBackdropOpen}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isBelowLgScreen={isBelowLgScreen}
        isBelowMdScreen={isBelowMdScreen}
        isBelowSmScreen={isBelowSmScreen}
        messageInputRef={messageInputRef}
      />

      <ChatContent
        chatStore={chatStore}
        dispatch={dispatch}
        backdropOpen={backdropOpen}
        setBackdropOpen={setBackdropOpen}
        setSidebarOpen={setSidebarOpen}
        isBelowMdScreen={isBelowMdScreen}
        isBelowLgScreen={isBelowLgScreen}
        isBelowSmScreen={isBelowSmScreen}
        messageInputRef={messageInputRef}
      />

      <Backdrop open={backdropOpen} onClick={() => setBackdropOpen(false)} className='absolute z-10' />
    </div>
  )
}

export default ChatWrapper
