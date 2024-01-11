// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'

const BuyNowButton = () => {
  return (
    <div className={classnames(styles.wrapper, 'mui-fixed')}>
      <a className={styles.button} role='button' href='https://themeselection.com/buy-now' target='_blank'>
        Buy Now
        <span className={styles.buttonInner} />
      </a>
    </div>
  )
}

export default BuyNowButton
