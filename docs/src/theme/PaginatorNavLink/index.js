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
          <svg width='1em' height='1em' fill="currentColor" className='text-2xl' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
        )}
        <div style={{ flex: 1 }}>
          {subLabel && <div className='pagination-nav__sublabel'>{subLabel}</div>}
          <div className='pagination-nav__label'>{title}</div>
        </div>
        {isNext && (
          <svg width='1em' height='1em' fill="currentColor" className='text-2xl' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
        )}
      </div>
    </Link>
  )
}
