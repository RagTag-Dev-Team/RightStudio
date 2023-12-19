'use client'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'
import commonStyles from '@/styles/common.module.css'

type PaymentMethodProps = {
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

const PaymentMethod = ({ open, setOpen }: PaymentMethodProps) => {
  return (
    <Dialog fullWidth open={open} onClose={() => setOpen(false)} maxWidth='sm' scroll='body'>
      <DialogTitle
        variant='h5'
        className='flex gap-2 flex-col text-center pbs-10 pbe-6 pli-10 sm:pbs-16 sm:pbe-6 sm:pli-16'
      >
        Select Payment Methods
        <Typography component='span' variant='body2' className='flex flex-col items-center'>
          Supported payment methods
        </Typography>
      </DialogTitle>
      <DialogContent className='pbs-0 pbe-10 pli-10 sm:pli-16 sm:pbe-16'>
        <IconButton onClick={() => setOpen(false)} className={styles.closeIcon}>
          <i className='ri-close-line' />
        </IconButton>
        <div>
          {cardList?.map((card, index) => (
            <div
              key={index}
              className={classnames(
                'flex gap-x-4 gap-y-1 flex-col sm:flex-row !items-start sm:items-center justify-between',
                styles.paymentItem,
                styles.borderBottom
              )}
            >
              <div className='flex items-center gap-4'>
                <Avatar variant='rounded' className={classnames(styles.avatarIcon, commonStyles.actionHoverColor)}>
                  <img src={card.image} alt={card.alt} height={card.imgHeight} width={card.imgWidth} />
                </Avatar>
                <Typography className='font-medium'>{card.cardName}</Typography>
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
