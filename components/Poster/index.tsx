import { ContBg } from '../ContBg'
import styles from './style.module.css'

export const Poster = () => {
  return (
    <>
      <ContBg title="Poster">
        <div className={styles.card}>
          <img
            // src="/img/poster.jpeg"
            src="/img/poster (2).jpeg"
            alt="Poster Pameran Seni"
            className={styles.img}
            loading="lazy"
          />
        </div>
      </ContBg>
    </>
  )
}
