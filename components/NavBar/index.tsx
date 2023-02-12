import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Nav } from './Nav'
import styles from './style.module.css'
import { Wrap } from './Wrap'

export const NavBar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    setOpen(false)
  }, [router.asPath])
  const handleClick = () => {
    setOpen((prev) => !prev)
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.cont}>
          <div className={styles.kelompok}>Kelompok Dua</div>
          <div className={styles.heading}>
            <h1 className={styles.nama}>The Melankolis</h1>
            <sub className={styles.sub}>Melankolis ・ Kelompok Dua</sub>
          </div>
          <div className={styles.menu}>
            <div
              className={`${styles.inner} ${open ? styles.opened : ''}`}
              onClick={handleClick}
            >
              <div className={styles.in}>
                <div className={styles.open}>
                  <div className={`${styles.item} ${styles.one}`}>
                    <div className={styles.deco}></div>
                  </div>
                  <div className={`${styles.item} ${styles.two}`}>
                    <div className={styles.deco}></div>
                  </div>
                  <div className={`${styles.item} ${styles.three}`}>
                    <div className={styles.deco}></div>
                  </div>
                </div>
                <div className={styles.close}>
                  <div className={`${styles.item} ${styles.one}`}>
                    <div className={styles.deco}></div>
                  </div>
                  <div className={`${styles.item} ${styles.two}`}>
                    <div className={styles.deco}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Wrap open={open} />
      <Nav open={open} />
    </>
  )
}
