// React Imports
import React from 'react'

// MUI Imports
import TreeItem from '@mui/lab/TreeItem'
import MuiTreeView from '@mui/lab/TreeView'
import { styled } from '@mui/material/styles'
import type { TreeViewProps } from '@mui/lab/TreeView'

// Styled TreeView component
const TreeView = styled(MuiTreeView)<TreeViewProps>({
  minHeight: 264,
  '& .MuiTreeItem-iconContainer .close-icon': {
    opacity: 0.3
  },
  '& .MuiTreeItem-group': {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed rgb(var(--mui-palette-text-primaryChannel) / 0.4)`
  }
})

const TreeViewCustomized = () => {
  return (
    <TreeView
      defaultExpanded={['1']}
      defaultExpandIcon={<i className='ri-add-box-line' />}
      defaultCollapseIcon={<i className='ri-checkbox-indeterminate-line' />}
      defaultEndIcon={<i className='ri-close-line close-icon' />}
    >
      <TreeItem nodeId='1' label='Main'>
        <TreeItem nodeId='2' label='Hello' />
        <TreeItem nodeId='3' label='Subtree with children'>
          <TreeItem nodeId='6' label='Hello' />
          <TreeItem nodeId='7' label='Sub-subtree with children'>
            <TreeItem nodeId='9' label='Child 1' />
            <TreeItem nodeId='10' label='Child 2' />
            <TreeItem nodeId='11' label='Child 3' />
          </TreeItem>
          <TreeItem nodeId='8' label='Hello' />
        </TreeItem>
        <TreeItem nodeId='4' label='World' />
        <TreeItem nodeId='5' label='Something something' />
      </TreeItem>
    </TreeView>
  )
}

export default TreeViewCustomized
