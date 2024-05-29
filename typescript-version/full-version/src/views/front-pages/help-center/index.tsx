'use client'

// Component Imports
// import HelpCenterHeader from './HelpCenterHeader'
import Articles from './Articles'
import KnowledgeBase from './KnowledgeBase'
import KeepLearning from './KeepLearning'
import NeedHelp from './NeedHelp'

const HelpCenterWrapper = () => {
  return (
    <>
      {/* <HelpCenterHeader /> */}
      <Articles />
      <KnowledgeBase />
      <KeepLearning />
      <NeedHelp />
    </>
  )
}

export default HelpCenterWrapper
