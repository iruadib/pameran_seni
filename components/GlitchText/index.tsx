import { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'

export const GlitchText = () => {
  const [timer, setTimer] = useState(0)
  const [isNoise, setIsNoise] = useState(false)
  const interval = useRef<null | NodeJS.Timer>(null)
  useEffect(() => {
    const handleTimer = () => {
      interval.current = setInterval(() => {
        const duration = Math.random() * (40 - 4) + 4
        setTimeout(() => {
          setIsNoise(true)
        }, duration * 100)
        setIsNoise(false)
      }, 7500)
    }
    if (timer === 0) {
      handleTimer()
    }
  }, [timer])
  return (
    <>
      <div className={`${styles.cont} ${isNoise && styles.is_noise}`}>
        <p className={styles.heading}>
          <span className={styles.line}>Kelompok Lima</span>
          <span className={styles.line}>Kelompok Lima</span>
          <span className={styles.line}>Kelompok Lima</span>
          <span className={styles.line}>Kelompok Lima</span>
          <span className={styles.line}>Kelompok Lima</span>
          <span className={styles.line}>Kelompok Lima</span>
          <span className={styles.line}>Kelompok Lima</span>
          <span className={styles.line}>Kelompok Lima</span>
          <span className={styles.line}>Kelompok Lima</span>
        </p>
      </div>
    </>
  )
}
