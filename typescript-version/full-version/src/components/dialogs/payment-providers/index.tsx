// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Style Imports
import styles from './styles.module.css'
import globalDialogStyles from '@components/dialogs/styles.module.css'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

type Image = {
  src: string
  alt?: string
  height?: string
  width?: string
}

type CardList = {
  images: Image[]
  providerName: string
}

const cardList: CardList[] = [
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/mastercard.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      },
      {
        src: '/images/logos/dinners-club.png',
        height: '16px'
      }
    ],
    providerName: 'Adyen'
  },
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      },
      {
        src: '/images/logos/dinners-club.png',
        height: '16px'
      }
    ],
    providerName: '2Checkout'
  },
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/mastercard.png',
        width: '30px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      }
    ],
    providerName: 'Airpay'
  },
  {
    images: [
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      },
      {
        src: '/images/logos/dinners-club.png',
        height: '16px'
      }
    ],
    providerName: 'Authorize.net'
  },
  {
    images: [
      {
        src: '/images/logos/mastercard.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      }
    ],
    providerName: 'Bambora'
  },
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/mastercard.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      },
      {
        src: '/images/logos/dinners-club.png',
        height: '16px'
      }
    ],
    providerName: 'Cayan'
  },
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/american-express.png',
        width: '36px'
      },
      {
        src: '/images/logos/jcb.png',
        height: '16px'
      },
      {
        src: '/images/logos/dinners-club.png',
        height: '16px'
      }
    ],
    providerName: 'Chase Paymentech (Orbital)'
  },
  {
    images: [
      {
        src: '/images/logos/visa.png',
        width: '30px'
      },
      {
        src: '/images/logos/mastercard.png',
        width: '30px'
      }
    ],
    providerName: 'Checkout.com'
  }
]

const PaymentProviders = ({ open, setOpen }: Props) => {
  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Dialog fullWidth open={open} onClose={() => setOpen(false)} maxWidth='md' scroll='body'>
      <DialogTitle
        className={classnames('flex gap-2 flex-col text-center', globalDialogStyles.dialogTitle, {
          [globalDialogStyles.smDialogTitle]: isBelowSmScreen
        })}
      >
        Select Payment Providers
        <Typography component='span' className='flex flex-col text-center'>
          Third-party payment providers
        </Typography>
      </DialogTitle>
      <DialogContent
        className={classnames(globalDialogStyles.dialogContentWithActions, {
          [globalDialogStyles.smDialogContentWithActions]: isBelowSmScreen
        })}
      >
        <IconButton onClick={() => setOpen(false)} className={styles.closeIcon}>
          <Icon icon='mdi:close' />
        </IconButton>
        <div>
          {cardList?.map((card, index) => (
            <div
              key={index}
              className={classnames(
                'flex items-center justify-between flex-wrap gap-x-4 gap-y-1',
                styles.paymentItem,
                styles.borderBottom,
                { 'flex-col !items-start': isBelowSmScreen }
              )}
            >
              <Typography>{card.providerName}</Typography>
              <div className='flex gap-x-4 gap-y-2 flex-wrap'>
                {card.images.map((image, index) => (
                  <Avatar key={index} variant='rounded' className={styles.avatarIcon}>
                    <img src={image.src} alt={image.alt} height={image.height} width={image.width} />
                  </Avatar>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PaymentProviders
