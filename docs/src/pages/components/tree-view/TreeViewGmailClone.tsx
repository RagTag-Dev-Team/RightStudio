// React Imports
import React from 'react'

// MUI Imports
import TreeView from '@mui/lab/TreeView'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import TreeItem from '@mui/lab/TreeItem'
import type { TreeItemProps } from '@mui/lab/TreeItem'

// Custom Icon Import
import Icon from '@core/components/IconifyIcon'

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
          <Icon icon={labelIcon} color='inherit' className='mie-1' />
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
      defaultExpandIcon={<Icon icon='mdi:chevron-right' />}
      defaultCollapseIcon={<Icon icon='mdi:chevron-down' />}
    >
      <StyledTreeItem nodeId='1' labelText='All Mail' labelIcon='mdi:email-outline' />
      <StyledTreeItem nodeId='2' labelText='Trash' labelIcon='mdi:delete-outline' />
      <StyledTreeItem nodeId='3' labelText='Categories' labelIcon='mdi:label-outline'>
        <StyledTreeItem nodeId='5' labelInfo='90' labelText='Social' labelIcon='mdi:account-supervisor-outline' />
        <StyledTreeItem nodeId='6' labelInfo='2,294' labelText='Updates' labelIcon='mdi:information-outline' />
        <StyledTreeItem nodeId='7' labelInfo='3,566' labelText='Forums' labelIcon='mdi:forum-outline' />
        <StyledTreeItem nodeId='8' labelInfo='733' labelText='Promotions' labelIcon='mdi:tag-outline' />
      </StyledTreeItem>
      <StyledTreeItem nodeId='4' labelText='History' labelIcon='mdi:label-outline' />
    </TreeView>
  )
}

export default TreeViewGmailClone
