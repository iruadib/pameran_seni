import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './style.module.css'

interface Props {
  open: boolean
}

export const Nav = ({ open }: Props) => {
  const [show, setShow] = useState(false)
  const [opened, setOpened] = useState(false)
  useEffect(() => {
    if (!open) {
      setOpened(open)
      setTimeout(() => {
        setShow(open)
      }, 300)
    } else {
      setShow(open)
      setTimeout(() => {
        setOpened(open)
      }, 300)
    }
  }, [open])
  return (
    <div
      className={`${styles.nav} ${show ? styles.show : ''} ${
        opened ? styles.opened : ''
      }`}
    >
      {/* <div className={styles.bg}>
        <div className={styles.noise}>
        </div>
      </div> */}
      <div className={styles.cont}>
        <div className={styles.inner}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/" className={styles.link}>
                <div className={styles.icon}>
                  <svg
                    className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13.3 25.6"
                  >
                    <polygon
                      className={styles.arrow}
                      fill="#fff"
                      points="13.3,12.8 13.3,12.8 13.3,12.8 2.9,25.6 1.9,24.5 11.3,12.8 1.9,1.1 2.9,0 13.3,12.8 13.3,12.8	13.3,12.8 "
                    ></polygon>
                    <polygon
                      className={styles.dot}
                      fill="#fff"
                      points="3.1,9.4 6.3,12.8 3.1,16.2 0,12.8 "
                    ></polygon>
                  </svg>
                </div>
                <div className={styles.text}>Home</div>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/panitia" className={styles.link}>
                <div className={styles.icon}>
                  <svg
                    className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13.3 25.6"
                  >
                    <polygon
                      className={styles.arrow}
                      fill="#fff"
                      points="13.3,12.8 13.3,12.8 13.3,12.8 2.9,25.6 1.9,24.5 11.3,12.8 1.9,1.1 2.9,0 13.3,12.8 13.3,12.8	13.3,12.8 "
                    ></polygon>
                    <polygon
                      className={styles.dot}
                      fill="#fff"
                      points="3.1,9.4 6.3,12.8 3.1,16.2 0,12.8 "
                    ></polygon>
                  </svg>
                </div>
                <div className={styles.text}>Panitia</div>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/proposal" className={styles.link}>
                <div className={styles.icon}>
                  <svg
                    className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13.3 25.6"
                  >
                    <polygon
                      className={styles.arrow}
                      fill="#fff"
                      points="13.3,12.8 13.3,12.8 13.3,12.8 2.9,25.6 1.9,24.5 11.3,12.8 1.9,1.1 2.9,0 13.3,12.8 13.3,12.8	13.3,12.8 "
                    ></polygon>
                    <polygon
                      className={styles.dot}
                      fill="#fff"
                      points="3.1,9.4 6.3,12.8 3.1,16.2 0,12.8 "
                    ></polygon>
                  </svg>
                </div>
                <div className={styles.text}>Proposal</div>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/katalog" className={styles.link}>
                <div className={styles.icon}>
                  <svg
                    className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13.3 25.6"
                  >
                    <polygon
                      className={styles.arrow}
                      fill="#fff"
                      points="13.3,12.8 13.3,12.8 13.3,12.8 2.9,25.6 1.9,24.5 11.3,12.8 1.9,1.1 2.9,0 13.3,12.8 13.3,12.8	13.3,12.8 "
                    ></polygon>
                    <polygon
                      className={styles.dot}
                      fill="#fff"
                      points="3.1,9.4 6.3,12.8 3.1,16.2 0,12.8 "
                    ></polygon>
                  </svg>
                </div>
                <div className={styles.text}>Katalog</div>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/poster" className={styles.link}>
                <div className={styles.icon}>
                  <svg
                    className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13.3 25.6"
                  >
                    <polygon
                      className={styles.arrow}
                      fill="#fff"
                      points="13.3,12.8 13.3,12.8 13.3,12.8 2.9,25.6 1.9,24.5 11.3,12.8 1.9,1.1 2.9,0 13.3,12.8 13.3,12.8	13.3,12.8 "
                    ></polygon>
                    <polygon
                      className={styles.dot}
                      fill="#fff"
                      points="3.1,9.4 6.3,12.8 3.1,16.2 0,12.8 "
                    ></polygon>
                  </svg>
                </div>
                <div className={styles.text}>Poster</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
