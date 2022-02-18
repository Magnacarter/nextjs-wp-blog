import styles from '../layout.module.css'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function Header({ home, name }) {
  return (
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            priority
            src="/images/adam.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/adam.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
  )
}
