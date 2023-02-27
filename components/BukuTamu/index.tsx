import styles from './style.module.css'
import { ContBg } from '../ContBg'

export const BukuTamu = () => {
  return (
    <>
      <ContBg title="Buku Tamu">
        <div className={styles.card}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdBReoszg38wjxkx0-VkvbH8gS7ELZPoEJbNCUFla4n_pO5_w/viewform?embedded=true"
            width="640"
            height="792"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            className={styles.iframe}
          >
            Loading...
          </iframe>
        </div>
      </ContBg>
    </>
  )
}
