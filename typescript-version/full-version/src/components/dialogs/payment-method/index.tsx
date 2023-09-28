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

type CardList = {
  image: string
  imgWidth: string
  imgHeight?: string
  alt: string
  cardName: string
  cardType: string
}

const cardList: CardList[] = [
  {
    image: '/images/logos/visa.png',
    imgWidth: '30px',
    alt: 'visa card',
    cardName: 'Visa',
    cardType: 'Credit Card'
  },
  {
    image: '/images/logos/american-express.png',
    imgWidth: '36px',
    alt: 'American Express',
    cardName: 'American Express',
    cardType: 'Credit Card'
  },
  {
    image: '/images/logos/mastercard.png',
    imgWidth: '30px',
    alt: 'Mastercard',
    cardName: 'Mastercard',
    cardType: 'Credit Card'
  },
  {
    image: '/images/logos/jcb.png',
    imgWidth: '21.4px',
    alt: 'JCB',
    cardName: 'JCB',
    cardType: 'Credit Card'
  },
  {
    image: '/images/logos/dinners-club.png',
    imgWidth: '20px',
    alt: 'Dinners Club',
    cardName: 'Dinners Club',
    cardType: 'Credit Card'
  }
]

const PaymentMethod = ({ open, setOpen }: Props) => {
  // Hooks
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Dialog fullWidth open={open} onClose={() => setOpen(false)} maxWidth='sm' scroll='body'>
      <DialogTitle
        className={classnames('flex gap-2 flex-col text-center', globalDialogStyles.dialogTitle, {
          [globalDialogStyles.smDialogTitle]: isBelowSmScreen
        })}
      >
        Select Payment Methods
        <Typography component='span' className='flex flex-col items-center'>
          Supported payment methods
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
                'flex gap-x-4 gap-y-1 items-center justify-between',
                styles.paymentItem,
                styles.borderBottom,
                {
                  'flex-col !items-start': isBelowSmScreen
                }
              )}
            >
              <div className='flex items-center gap-4'>
                <Avatar variant='rounded' className={styles.avatarIcon}>
                  <img src={card.image} alt={card.alt} height={card.imgHeight} width={card.imgWidth} />
                </Avatar>
                <Typography>{card.cardName}</Typography>
              </div>
              <Typography>{card.cardType}</Typography>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PaymentMethod
