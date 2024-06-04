'use client'

// React Imports
import { useState } from 'react'

// Component Imports
import HelpCenterHeader from './HelpCenterHeader'
import Articles from './Articles'
import KnowledgeBase from './KnowledgeBase'
import KeepLearning from './KeepLearning'
import NeedHelp from './NeedHelp'

const HelpCenterWrapper = () => {
  // States
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <HelpCenterHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <Articles />
      <KnowledgeBase />
      <KeepLearning />
      <NeedHelp />
    </>
  )
}

export default HelpCenterWrapper
