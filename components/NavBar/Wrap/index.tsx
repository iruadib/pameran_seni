import { useEffect, useState } from 'react'
import styles from './style.module.css'

interface Props {
  open: boolean
}

export const Wrap = ({ open }: Props) => {
  const [closing, setClosing] = useState(false)
  useEffect(() => {
    if (!open) {
      setClosing(!open)
      setTimeout(() => {
        setClosing(open)
      }, 300)
    }
  }, [open])
  return (
    <div
      className={`${styles.cover} ${open ? styles.opened : ''} ${
        closing ? styles.closing : ''
      }`}
    >
      <div className={styles.in}>
        <span className={styles.img}></span>
        <span className={`${styles.img} ${styles.block_1}`}></span>
        <span className={`${styles.img} ${styles.block_2}`}></span>
        <span className={`${styles.img} ${styles.block_3}`}></span>
        <span className={`${styles.img} ${styles.block_4}`}></span>
        <span className={`${styles.img} ${styles.block_5}`}></span>
        <span className={`${styles.img} ${styles.block_6}`}></span>
        <span className={`${styles.img} ${styles.block_7}`}></span>
        <span className={`${styles.img} ${styles.bg}`}></span>
      </div>
      <div className={styles.out}>
        <span className={`${styles.img} ${styles.bg}`}></span>
        <span className={`${styles.img} ${styles.block_7}`}></span>
        <span className={`${styles.img} ${styles.block_6}`}></span>
        <span className={`${styles.img} ${styles.block_5}`}></span>
        <span className={`${styles.img} ${styles.block_4}`}></span>
        <span className={`${styles.img} ${styles.block_3}`}></span>
        <span className={`${styles.img} ${styles.block_2}`}></span>
        <span className={`${styles.img} ${styles.block_1}`}></span>
        <span className={styles.img}></span>
      </div>
    </div>
  )
}
