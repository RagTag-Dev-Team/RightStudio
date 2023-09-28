// React Imports
import React from 'react'

// MUI Imports
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Styles Imports
import styles from './styles.module.css'

type RenderTree = {
  id: string
  name: string
  children?: RenderTree[]
}

const data: RenderTree = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1'
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4'
        }
      ]
    }
  ]
}

const TreeViewRichObject = () => {
  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}
    </TreeItem>
  )
  
  return (
    <TreeView
      className={styles.treeViewMinHeight}
      defaultExpanded={['root']}
      defaultExpandIcon={<Icon icon='mdi:chevron-right' />}
      defaultCollapseIcon={<Icon icon='mdi:chevron-down' />}
    >
      {renderTree(data)}
    </TreeView>
  )
}

export default TreeViewRichObject
