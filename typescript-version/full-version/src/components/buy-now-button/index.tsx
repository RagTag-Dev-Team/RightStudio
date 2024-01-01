// Style Imports
import styles from './styles.module.css'

const BuyNowButton = () => {
  return (
    <a className={styles.button} role='button' href='https://themeselection.com/buy-now' target='_blank'>
      Buy Now
      <span className={styles.buttonInner} />
    </a>
  )
}

export default BuyNowButton
