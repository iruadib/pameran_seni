import { ContBg } from '../ContBg'
import styles from './style.module.css'

export const Label = () => {
  return (
    <>
      <ContBg title="Label Karya">
        <div className={styles.card}>
          <img
            src="/img/Identitas Karya.png"
            alt="Identitas Karya Seni Rupa"
            className={styles.img}
            loading="lazy"
          />
        </div>
      </ContBg>
    </>
  )
}
