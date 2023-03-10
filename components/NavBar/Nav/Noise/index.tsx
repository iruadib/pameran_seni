import { useEffect, useState } from 'react'
import styles from './style.module.css'

interface Props {
  opened: boolean
  show: boolean
}

export const NoiseNav = ({ opened, show }: Props) => {
  const [isNoise, setIsNoise] = useState(false)
  useEffect(() => {
    setInterval(() => {
      const duration = Math.random() * (40 - 4) + 4
      setTimeout(() => {
        setIsNoise(true)
        // console.log('sett')
      }, duration * 100)
      setIsNoise(false)
      // console.log('unset')
    }, 5000)
  }, [])
  return (
    <div
      className={`${show ? styles.show : ''} ${opened ? styles.opened : ''} ${
        isNoise ? styles.is_noise : ''
      }`}
    >
      <div className={styles.bg}>
        <div className={styles.noise}>
          <div className={styles.list}>
            <span className={`${styles.item} ${styles.img_1}`}></span>
            <span className={`${styles.item} ${styles.img_2}`}></span>
            <span className={`${styles.item} ${styles.img_3}`}></span>
            <span className={`${styles.item} ${styles.img_4}`}></span>
            <span className={`${styles.item} ${styles.img_1}`}></span>
          </div>
        </div>
      </div>
    </div>
  )
}
