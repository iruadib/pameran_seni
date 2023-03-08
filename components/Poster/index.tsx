import { ContBg } from '../ContBg'
import styles from './style.module.css'

export const Poster = () => {
  return (
    <>
      <ContBg title="Poster">
        <div className={styles.card}>
          <img
            src="/img/poster.jpeg"
            alt="Poster Pameran Seni"
            className={styles.img}
            loading="lazy"
          />
        </div>
      </ContBg>
    </>
  )
}
