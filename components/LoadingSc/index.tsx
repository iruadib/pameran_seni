import { useEffect, useRef } from 'react'
import styles from './style.module.css'

export const LoadingSc = () => {
  const loadingRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    setTimeout(() => {
      loadingRef.current?.classList.add(styles.hidden)
    }, 500)
  }, [])
  return (
    <>
      <div className={styles.cont} ref={loadingRef}>
        <div className={styles.loader}>
          <span className={`${styles.bar} ${styles.bar_1}`}></span>
          <span className={`${styles.bar} ${styles.bar_2}`}></span>
          <span className={`${styles.bar} ${styles.bar_3}`}></span>
          <span className={`${styles.bar} ${styles.bar_4}`}></span>
        </div>
      </div>
    </>
  )
}
