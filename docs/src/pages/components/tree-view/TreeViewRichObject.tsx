// React Imports
import React from 'react'

// MUI Imports
import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'

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
      defaultExpandIcon={<i className='ri-arrow-right-s-line' />}
      defaultCollapseIcon={<i className='ri-arrow-down-s-line' />}
    >
      {renderTree(data)}
    </TreeView>
  )
}

export default TreeViewRichObject
