import { ContBg } from '../ContBg'
import styles from './style.module.css'

export const Label = () => {
  return (
    <>
      <ContBg title="Label Karya">
        {[...Array(10)].map((x, i) => (
          <div className={styles.card} key={x}>
            <img
              src={`/img/labels/${i + 1}.png`}
              alt={`Identitas Karya Seni Rupa ${i + 1}`}
              className={styles.img}
              loading="lazy"
            />
          </div>
        ))}
      </ContBg>
    </>
  )
}
