// React Imports
import type { CSSProperties, ReactNode } from 'react'

// Third-party Imports
import clsx from 'clsx'

// Style Imports
import styles from './styles.module.css'

type Props = {
  children: ReactNode
  minHeight?: number
  maxHeight?: number
  url: string
  style?: CSSProperties
  bodyStyle?: CSSProperties
}

const BrowserWindow = (props: Props) => {
  // Props
  const { children, minHeight = 450, maxHeight = 450, style, bodyStyle, url } = props

  return (
    <div className={styles.browserWindow} style={{ minHeight, maxHeight, ...style }}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: '#f25f58' }} />
          <span className={styles.dot} style={{ background: '#fbbe3c' }} />
          <span className={styles.dot} style={{ background: '#58cb42' }} />
        </div>
        <div className={clsx(styles.browserWindowAddressBar, 'text--truncate')}>{url}</div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody} style={bodyStyle}>
        {children}
      </div>
    </div>
  )
}

export default BrowserWindow