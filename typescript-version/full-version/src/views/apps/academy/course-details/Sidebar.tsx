'use client'

// React Imports
import { useState } from 'react'
import type { ChangeEvent, SyntheticEvent } from 'react'

// MUI Imports
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import type { AccordionProps } from '@mui/material/Accordion'
import type { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import type { AccordionDetailsProps } from '@mui/material/AccordionDetails'

// Type Imports
import type { CourseContent } from '@/types/apps/academyTypes'

type ItemsType = {
  title: string
  time: string
  isCompleted: boolean
}[]

// Styled component for Accordion component
export const Accordion = styled(MuiAccordion)<AccordionProps>({
  boxShadow: 'none !important',
  border: '1px solid var(--mui-palette-divider)',
  '&:not(:last-of-type)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    margin: 'auto'
  },
  '&:first-of-type': {
    '& .MuiButtonBase-root': {
      borderTopLeftRadius: 'var(--mui-shape-borderRadius)',
      borderTopRightRadius: 'var(--mui-shape-borderRadius)'
    }
  },
  '&:last-of-type': {
    '& .MuiAccordionSummary-root:not(.Mui-expanded)': {
      borderBottomLeftRadius: 'var(--mui-shape-borderRadius)',
      borderBottomRightRadius: 'var(--mui-shape-borderRadius)'
    }
  }
})

// Styled component for AccordionSummary component
export const AccordionSummary = styled(MuiAccordionSummary)<AccordionSummaryProps>(({ theme }) => ({
  marginBottom: -1,
  padding: theme.spacing(0, 4),
  minHeight: theme.spacing(12),
  transition: 'min-height 0.15s ease-in-out',
  backgroundColor: 'var(--mui-palette-action-hover)',
  borderBottom: '1px solid var(--mui-palette-divider)',
  '&.Mui-expanded': {
    minHeight: theme.spacing(12),
    '& .MuiAccordionSummary-expandIconWrapper': {
      transform: 'rotate(90deg)'
    }
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: theme.direction === 'rtl' && 'rotate(180deg)'
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: '12px 0'
  }
}))

// Styled component for AccordionDetails component
export const AccordionDetails = styled(MuiAccordionDetails)<AccordionDetailsProps>(({ theme }) => ({
  padding: `${theme.spacing(4)} !important`
}))

const Sidebar = ({ content }: { content?: CourseContent[] }) => {
  // States
  const [expanded, setExpanded] = useState<number | false>(0)
  const [items, setItems] = useState<ItemsType[]>(content?.map(item => item.topics) ?? [])

  const handleChange = (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, index1: number, index2: number) => {
    setItems(
      items.map((item, i) => {
        if (i === index1) {
          return item.map((topic, j) => {
            if (j === index2) {
              return { ...topic, isCompleted: e.target.checked }
            }

            return topic
          })
        }

        return item
      })
    )
  }

  return (
    <>
      {content?.map((item, index) => {
        const totalTime = items[index]
          .reduce((sum, topic) => {
            const time = parseFloat(topic.time || '0')

            return sum + time
          }, 0)
          .toFixed(2)

        const selectedTopics = items[index].filter(topic => topic.isCompleted).length

        return (
          <Accordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
            <AccordionSummary
              id='customized-panel-header-1'
              expandIcon={<i className='ri-arrow-right-s-line' />}
              aria-controls={'sd'}
            >
              <div>
                <Typography variant='h5'>{item.title}</Typography>
                <Typography>{`${selectedTopics} / ${item.topics.length} | ${parseFloat(totalTime)} min`}</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <List role='list' component='div' className='plb-0'>
                {item.topics.map((topic, i) => {
                  return (
                    <ListItem key={i} role='listitem' className='p-0'>
                      <ListItemIcon>
                        <Checkbox
                          tabIndex={-1}
                          disableRipple
                          checked={items[index][i].isCompleted}
                          onChange={e => handleCheckboxChange(e, index, i)}
                        />
                      </ListItemIcon>
                      <ListItemText primary={`${i + 1}. ${topic.title}`} secondary={topic.time} />
                    </ListItem>
                  )
                })}
              </List>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </>
  )
}

export default Sidebar
