import clsx from 'clsx'
import Link from '@docusaurus/Link'

export default function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props

  return (
    <Link
      className={clsx('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev')}
      to={permalink}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {!isNext && (
          'PUT ICON HERE'
        )}
        <div style={{ flex: 1 }}>
          {subLabel && <div className='pagination-nav__sublabel'>{subLabel}</div>}
          <div className='pagination-nav__label'>{title}</div>
        </div>
        {isNext && (
          'PUT ICON HERE'
        )}
      </div>
    </Link>
  )
}
