// React Imports
import { useEffect, useMemo, useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import Avatar from '@mui/material/Avatar'
import TabContext from '@mui/lab/TabContext'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { FaqType } from '@/types/pages/faqTypes'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'

type props = {
  faqData: FaqType[]
  searchValue: string
}

const FAQ = ({ faqData, searchValue }: props) => {
  // States
  const [activeTab, setActiveTab] = useState('payment')

  // Hooks
  const isAboveMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setActiveTab(newValue)
  }

  const filteredData = useMemo(() => {
    if (!searchValue) {
      return faqData
    }

    return faqData
      .filter(category =>
        category.questionsAnswers.some(item => item.question.toLowerCase().includes(searchValue.toLowerCase()))
      )
      .map(category => ({
        ...category,
        questionsAnswers: category.questionsAnswers.filter(item =>
          item.question.toLowerCase().includes(searchValue.toLowerCase())
        )
      }))
  }, [faqData, searchValue])

  useEffect(() => {
    setActiveTab(filteredData[0]?.id ?? '')
  }, [filteredData])

  return filteredData.length > 0 ? (
    <TabContext value={activeTab}>
      <Grid container>
        <Grid item xs={12} md={4} xl={3} className='flex flex-col items-center'>
          <CustomTabList orientation='vertical' onChange={handleChange} className='w-full' pill='true'>
            {filteredData.map((faq, index) => (
              <Tab
                key={index}
                label={faq.title}
                value={faq.id}
                icon={<i className={classnames(faq.icon, '!mbe-0')} />}
                className='flex-row justify-start'
              />
            ))}
          </CustomTabList>
          {isAboveMdScreen && <img src='/illustration-john.png' alt='john image' />}
        </Grid>
        <Grid item xs={12} md={8} xl={9}>
          {filteredData.map((faq, index) => (
            <TabPanel key={index} value={faq.id} className='p-0'>
              <div className='flex items-center gap-4'>
                <Avatar variant='rounded'>
                  <i className={faq.icon} />
                </Avatar>
                <div>
                  <Typography>{faq.title}</Typography>
                  <Typography>{faq.subtitle}</Typography>
                </div>
              </div>
              <div>
                {faq.questionsAnswers.map((items, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<i className='ri-arrow-down-s-line' />}
                      aria-controls='panel1a-content'
                    >
                      <Typography>{items.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{items.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    </TabContext>
  ) : (
    <div className='flex justify-center items-center'>
      <i className='ri-error-warning-line' />
      <Typography>No results found</Typography>
    </div>
  )
}

export default FAQ
