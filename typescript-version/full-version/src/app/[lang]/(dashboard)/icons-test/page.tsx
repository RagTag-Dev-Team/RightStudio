// MUI Imports
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// Component Imports
import Icon from '@core/components/IconifyIcon'

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/icons-test`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const IconsTestPage = async () => {
  const data = await getData()

  return (
    <>
      <Typography variant='h5'>All the icons are made with the help of our custom component.</Typography>
      <Typography variant='h4' sx={{ mt: 8, mb: 4 }}>
        Icons from APIs
      </Typography>
      <Typography variant='h5' sx={{ mb: 4 }}>
        Online Icons
      </Typography>
      <Typography>
        BoxIcons coming from Iconify&#39;s API
        <Icon icon='bx:x' />
      </Typography>

      <Typography variant='h5' sx={{ my: 4 }}>
        FakeDB MDI icons but offline
      </Typography>
      <Typography sx={{ mb: 4 }}>
        MDI icons coming from our API (Next.js API) and SVGs are from the Iconify Bundle
      </Typography>
      {data.map((icon: string, index: number) => (
        <Icon key={index} fontSize='2.1875rem' icon={icon} />
      ))}

      <Typography variant='h4' sx={{ mt: 8, mb: 4 }}>
        Offline Icons
      </Typography>
      <Typography sx={{ mb: 4 }}>
        Iconify icons come with the following props as well: <code>id</code>, <code>key</code>, <code>name</code>,{' '}
        <code>ref</code>, <code>role</code>, <code>strokeLinecap</code>.
      </Typography>

      <Typography sx={{ mb: 4 }}>
        Our logo wrapped with <code>Box</code> component
        <Box component='span' sx={{ ml: 5, display: 'inline-flex', color: 'primary.main' }}>
          <Icon icon='custom:logo' />
        </Box>
      </Typography>

      <Typography sx={{ fontWeight: 500 }}>Material Line Icons with height</Typography>
      <Icon icon='line-md:home-twotone-alt' height='35' />
      <Icon icon='line-md:github' height='35' />
      <Icon icon='line-md:document-list' height='35' />
      <Icon icon='line-md:document-code' height='35' />
      <Icon icon='line-md:image-twotone' height='35' />

      <Typography sx={{ mt: 4, fontWeight: 500 }}>MDI Icons</Typography>
      <Typography>
        Simple MDI Icon
        <Icon icon='mdi:airplane-alert' />
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        MDI Icon wrapped with <code>Box</code> component
        <Box component='span' sx={{ ml: 5, display: 'inline-flex', color: 'success.main' }}>
          <Icon icon='mdi:airplane-alert' />
        </Box>
      </Typography>
      <Typography>
        MDI Icon with font-size
        <Icon icon='mdi:airplane-alert' fontSize={50} />
      </Typography>
      <Typography>
        MDI Icon with color and passed color-name
        <Icon icon='mdi:airplane-alert' color='red' />
      </Typography>
      <Typography>
        MDI Icon with horizontal flip
        <Icon icon='mdi:airplane-alert' hFlip />
      </Typography>
      <Typography>
        MDI Icon with vertical flip
        <Icon icon='mdi:airplane-alert' vFlip />
      </Typography>
      <Typography>
        MDI Icon with vertical & horizontal flips
        <Icon icon='mdi:airplane-alert' hFlip vFlip />
      </Typography>
      <Typography>
        MDI Icon with color and passed hex code
        <Icon icon='mdi:airplane-alert' color='#09a6eb' />
      </Typography>
      <Typography>
        MDI Icon with rotate 90 degree
        <Icon icon='mdi:airplane-alert' rotate={1} />
      </Typography>
      <Typography>
        MDI Icon with rotate 270 degree
        <Icon icon='mdi:airplane-alert' rotate={3} />
      </Typography>
      <Typography>
        Inline MDI Icon
        <Icon icon='mdi:airplane-alert' inline={true} />
      </Typography>
      <Typography>
        MDI Icon with width
        <Icon icon='mdi:airplane-alert' width='100' />
      </Typography>
      <Typography>
        MDI Icon with height
        <Icon icon='mdi:airplane-alert' height='75' />
      </Typography>
      <Typography>
        MDI Icon with cursor pointer
        <Icon icon='mdi:airplane-alert' cursor='pointer' />
      </Typography>
      <Typography>
        MDI Icon with display flex
        <Icon icon='mdi:airplane-alert' display='flex' />
      </Typography>

      <Typography>
        MDI Icon with fill-opacity using string
        <Icon icon='mdi:airplane-alert' fillOpacity='0.5' />
        MDI Icon with fill-opacity using number
        <Icon icon='mdi:airplane-alert' fillOpacity={0.25} />
      </Typography>
      {/* <Typography>
        MDI Icon with onClick. It has all props for <code>on</code>
        <Icon icon='mdi:airplane-alert' onClick={() => alert('Clicked on the icon')} />
      </Typography> */}
      <Typography>
        MDI Icon with opacity using string
        <Icon icon='mdi:airplane-alert' opacity='0.6' />
        MDI Icon with opacity using number
        <Icon icon='mdi:airplane-alert' opacity={0.3} />
      </Typography>
      <Typography>
        MDI Icon with stroke
        <Icon icon='mdi:airplane-alert' stroke='#f00' />
      </Typography>
      <Typography>
        MDI Icon with stroke and stroke-dasharray using string
        <Icon icon='mdi:airplane-alert' stroke='#f00' strokeDasharray='3' />
        MDI Icon with stroke and stroke-dasharray using number
        <Icon icon='mdi:airplane-alert' stroke='#f00' strokeDasharray={5} />
      </Typography>
      <Typography>
        MDI Icon with stroke and stroke-opacity using string
        <Icon icon='mdi:airplane-alert' stroke='#f00' strokeOpacity='0.5' />
        MDI Icon with stroke and stroke-opacity using number
        <Icon icon='mdi:airplane-alert' stroke='#f00' strokeOpacity={0.25} />
      </Typography>
      <Typography>
        MDI Icon with stroke and stroke-width using string
        <Icon icon='mdi:airplane-alert' stroke='#f00' strokeWidth='2' />
        MDI Icon with stroke and stroke-width using number
        <Icon icon='mdi:airplane-alert' stroke='#f00' strokeWidth={2} />
      </Typography>
      <Typography>
        MDI Icon with style
        <Icon icon='mdi:airplane-alert' style={{ color: '#00f' }} />
      </Typography>
      <Typography>
        MDI Icon with transform scale
        <Icon icon='mdi:airplane-alert' transform='scale(2)' />
      </Typography>
      <Typography>
        MDI Icon with visibility hidden
        <Icon icon='mdi:airplane-alert' visibility='hidden' />
      </Typography>

      <Typography variant='h5' sx={{ mt: 4 }}>
        Icons from different icon libraries
      </Typography>
      <Icon icon='bx:basket' />
      <Icon icon='bi:airplane-engines' />
      <Icon icon='tabler:anchor' />
      <Icon icon='uit:adobe-alt' />
      <Icon icon='fa6-regular:comment' />
      <Icon icon='twemoji:auto-rickshaw' />
    </>
  )
}

export default IconsTestPage
