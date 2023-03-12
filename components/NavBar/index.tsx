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
    document.querySelector('body')?.classList.remove('scroll-hide')
  }, [router.asPath])
  const handleClick = () => {
    document.querySelector('body')?.classList.toggle('scroll-hide')
    setOpen((prev) => !prev)
  }
  const handleLinkClick = () => {
    document.querySelector('body')?.classList.remove('scroll-hide')
    setOpen(false)
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.cont}>
          <div className={styles.kelompok}>Kelompok Lima</div>
          <div className={styles.heading}>
            <h1 className={styles.nama}>The Melankolia</h1>
            <sub className={styles.sub}>Melankolis ・ Kelompok Lima</sub>
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
      <Nav open={open} handleClick={handleLinkClick} />
    </>
  )
}
