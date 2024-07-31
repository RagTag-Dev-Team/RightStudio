// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'

const BuyNowButton = () => {
  return (
    <div className={classnames(styles.wrapper, 'mui-fixed')}>
      <a className={styles.button} role='button' href='https://1.envato.market/vuexy_admin' target='_blank'>
        Buy Now
        <span className={styles.buttonInner} />
      </a>
    </div>
  )
}

export default BuyNowButton
