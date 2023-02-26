import Link from 'next/link'
import { useEffect, useState } from 'react'
import { routeList } from '../routeList'
import styles from './style.module.css'

interface Props {
  open: boolean
  handleClick: () => void
}

export const Nav = ({ open, handleClick }: Props) => {
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
            {routeList.map((route) => (
              <li className={styles.item} key={route.name}>
                <Link
                  href={route.link}
                  className={styles.link}
                  onClick={handleClick}
                >
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
                  <div className={styles.text}>{route.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
