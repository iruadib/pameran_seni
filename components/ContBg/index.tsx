import { ReactNode } from 'react'
import styles from './style.module.css'

interface Props {
  title: string
  children: ReactNode
}

export const ContBg = ({ title, children }: Props) => {
  return (
    <>
      <div className={styles.in}>
        <div className={styles.bg}>&nbsp;</div>
        <div className={styles.cont}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <div className={styles.inner}>{children}</div>
        </div>
      </div>
    </>
  )
}
