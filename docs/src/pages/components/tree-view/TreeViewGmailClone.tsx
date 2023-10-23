// React Imports
import React from 'react'

// MUI Imports
import TreeView from '@mui/lab/TreeView'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import TreeItem from '@mui/lab/TreeItem'
import type { TreeItemProps } from '@mui/lab/TreeItem'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'

type StyledTreeItemProps = TreeItemProps & {
  labelText: string
  labelIcon: string
  labelInfo?: string
}

// Styled TreeItem component
const StyledTreeItemRoot = styled(TreeItem)<TreeItemProps>(({ theme }) => ({
  '&:hover > .MuiTreeItem-content:not(.Mui-selected)': {
    backgroundColor: theme.palette.action.hover
  },
  '& .MuiTreeItem-content': {
    paddingRight: theme.spacing(3),
    borderTopRightRadius: theme.spacing(4),
    borderBottomRightRadius: theme.spacing(4),
    fontWeight: theme.typography.fontWeightMedium
  },
  '& .MuiTreeItem-label': {
    fontWeight: 'inherit',
    paddingRight: theme.spacing(3)
  },
  '& .MuiTreeItem-group': {
    marginLeft: 0,
    '& .MuiTreeItem-content': {
      paddingLeft: theme.spacing(4),
      fontWeight: theme.typography.fontWeightRegular
    }
  }
}))

const StyledTreeItem = (props: StyledTreeItemProps) => {
  // Props
  const { labelText, labelIcon, labelInfo, ...other } = props

  return (
    <StyledTreeItemRoot
      {...other}
      label={
        <div className='plb-1 flex items-center' >
          <i className={classnames('mie-1',labelIcon)} />
          <Typography variant='body2' className={classnames('flex-grow', styles.treeViewFontWeight)}>
            {labelText}
          </Typography>
          {labelInfo ? (
            <Typography variant='caption' color='inherit'>
              {labelInfo}
            </Typography>
          ) : null}
        </div>
      }
    />
  )
}

const TreeViewGmailClone = () => {

  return (
    <TreeView
      className={styles.treeViewMinHeight}
      defaultExpanded={['3']}
      defaultExpandIcon={<i className='ri-arrow-right-s-line' />}
      defaultCollapseIcon={<i className='ri-arrow-down-s-line' />}
    >
      <StyledTreeItem nodeId='1' labelText='All Mail' labelIcon='ri-mail-line' />
      <StyledTreeItem nodeId='2' labelText='Trash' labelIcon='ri-delete-bin-7-line' />
      <StyledTreeItem nodeId='3' labelText='Categories' labelIcon='ri-price-tag-line'>
        <StyledTreeItem nodeId='5' labelInfo='90' labelText='Social' labelIcon='ri-group-line' />
        <StyledTreeItem nodeId='6' labelInfo='2,294' labelText='Updates' labelIcon='ri-information-line' />
        <StyledTreeItem nodeId='7' labelInfo='3,566' labelText='Forums' labelIcon='ri-chat-4-line' />
        <StyledTreeItem nodeId='8' labelInfo='733' labelText='Promotions' labelIcon='ri-price-tag-3-line' />
      </StyledTreeItem>
      <StyledTreeItem nodeId='4' labelText='History' labelIcon='ri-price-tag-line' />
    </TreeView>
  )
}

export default TreeViewGmailClone
